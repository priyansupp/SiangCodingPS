# Generated by Django 4.1.5 on 2023-02-17 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_alter_user_managers_rename_customer_id_cart_customer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='contact',
            field=models.IntegerField(default=0, unique=True),
        ),
    ]
