from django.contrib import admin
from .models import Lead
# Register your models here.

class LeadAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'message']
    list_filter = ['name']
    search_fields = ['name', 'email']

admin.site.register(Lead, LeadAdmin)