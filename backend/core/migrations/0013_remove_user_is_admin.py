# Generated by Django 4.1.5 on 2023-02-15 09:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_remove_user_is_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_admin',
        ),
    ]
