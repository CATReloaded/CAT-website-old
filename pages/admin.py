from django.contrib import admin
from .models import *

class MemberAdmin(admin.ModelAdmin):
    list_display = ("name","role","circle")

class CircleAdmin(admin.ModelAdmin):
    list_display = ("name","circle_type","leader")

class EveImgInline(admin.StackedInline):
    model = EveImg
    extra = 4

class EventAdmin(admin.ModelAdmin):
    list_display=("name","date")
    inlines = [EveImgInline]
    

admin.site.register(Circle,CircleAdmin)
admin.site.register(Member,MemberAdmin)
admin.site.register(Event,EventAdmin)
admin.site.register(Reward)
admin.site.register(Founder)