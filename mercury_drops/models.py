from django.db import models as db

# Create your models here.
class User(db.Model):
    _id = db.AutoField(primary_key=True)
    name = db.CharField(max_length=30)
    surname = db.CharField(max_length=30)
    cpf = db.CharField(max_length=30)
    email = db.EmailField(max_length=30)
    password = db.CharField(max_length=30)

    #Getter and setter for id 
    @property
    def id(self):
        return self._id
    
    @id.setter
    def id(self, val):
        self._id = val
        return self._id

    def __str__(self) -> str:
        return f'User({self.name}, {self.surname}, {self.email}, {self.cpf})'