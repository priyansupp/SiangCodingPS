# Generated by Django 4.1.5 on 2023-02-15 10:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_alter_user_options_remove_user_date_joined_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
    ]
