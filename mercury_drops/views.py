from rest_framework import viewsets as vt
from rest_framework.permissions import IsAuthenticated
from .models import User
from .serializer import UserSerializer


class UserViewSet(vt.ModelViewSet):
    permission_classes = {IsAuthenticated,}
    queryset = User.objects.all()
    serializer_class = UserSerializer 