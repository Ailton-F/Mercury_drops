from rest_framework import serializers as sr
from .models import User

class UserSerializer(sr.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'surname', 'cpf', 'email', 'password']