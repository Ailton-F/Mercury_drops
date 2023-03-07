# Generated by Django 4.1.7 on 2023-02-19 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mercury_drops', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='_admin',
        ),
        migrations.AlterField(
            model_name='user',
            name='_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=30),
        ),
    ]