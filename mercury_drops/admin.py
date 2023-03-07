from django.contrib import admin
from .models import User

# Register your models here.
class Users(admin.ModelAdmin):
    list_display = ('id', 'name', 'surname', 'email', 'cpf')
    search_fields = ('nome', 'cpf',)


admin.site.register(User, Users)