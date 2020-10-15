from django.db import models
from django.core.validators import FileExtensionValidator



class Circle(models.Model):
    types=(
        ("technical","technical"),
        ("non-technical","non-technical")
    )

    name = models.CharField(max_length=30,unique=True)
    description = models.TextField()
    circle_type = models.CharField(max_length=20,choices=types)
    image = models.FileField(upload_to='cicles-pics',validators=[FileExtensionValidator(['svg','png','jpg','jpeg'])])
    icon = models.FileField(upload_to='cicles-pics',validators=[FileExtensionValidator(['svg','png','jpg','jpeg'])])

    # leader_name = models.CharField(max_length=30)
    # leader_img = models.ImageField(upload_to='members-pics')

    @property
    def leader(self):
        return self.members.get(role='leader')

    @property
    def mentors(self):
        return self.members.filter(role='mentor')

    @property
    def members(self):
        return self.members.filter(role='member')

    def __str__(self):
        return self.name
    

"""
Member model is now just a normal model 
later if sign up added it will be changed to build-in user model 
"""
class Member(models.Model):
    roles = (
        ('leader','leader'),
        ('mentor','mentor'),
        ('member','member'),
        ('cor','cor')
    )

    name = models.CharField(max_length=30)
    circle = models.ForeignKey(Circle,on_delete=models.CASCADE)
    role = models.CharField(max_length=10,choices=roles)
    image = models.ImageField(upload_to="members-pics")
    git = models.URLField(null=True,blank=True)
    linked_in = models.URLField(null=True,blank=True)
    facebook = models.URLField(null=True,blank=True)
    twitter = models.URLField(null=True,blank=True)

    def __str__(self):
        return f"{self.name} {self.circle} {self.role}"

class Founder(models.Model):
    name = models.CharField(max_length=30)
    image = models.ImageField()
    description = models.CharField(max_length=30)

class Reward(models.Model):
    first = models.ForeignKey(Member,on_delete=models.CASCADE,related_name='first')
    second = models.ForeignKey(Member,on_delete=models.CASCADE,related_name='second')
    third = models.ForeignKey(Member,on_delete=models.CASCADE,related_name='third')
    circle = models.ForeignKey(Circle,on_delete=models.CASCADE)

    # def __str__(self):
    #     return f'{self.first.name} {self.circle}'
    

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField()
    date = models.DateTimeField()

    def __str__(self):
        return self.name
    
class EveImg(models.Model):
    img = models.ImageField()
    event = models.ForeignKey(Event,on_delete=models.CASCADE, related_name="images")
