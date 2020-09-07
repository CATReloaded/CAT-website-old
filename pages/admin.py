from django.contrib import admin
from .models import *

class MemberAdmin(admin.ModelAdmin):
    list_display = ("name","role","circle")

class CircleAdmin(admin.ModelAdmin):
    list_display = ("name","circle_type","leader")



admin.site.register(Circle,CircleAdmin)
admin.site.register(Member,MemberAdmin)
admin.site.register(Event)
admin.site.register(Reward)
admin.site.register(Founder)