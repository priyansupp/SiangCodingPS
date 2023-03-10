# Generated by Django 4.1.5 on 2023-02-18 15:46

import core.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(default='abc@gmail.com', max_length=254, unique=True, verbose_name='Email')),
                ('name', models.CharField(default='abc', max_length=200)),
                ('password', models.CharField(default='abc', help_text='Enter your password', max_length=200)),
                ('last_login', models.DateTimeField(auto_now=True, verbose_name='Last Login')),
                ('contact', models.IntegerField(default=0)),
                ('is_customer', models.BooleanField(default=True)),
                ('image', models.ImageField(default='images/default.png', upload_to='images')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', core.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='customer', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('Ed', 'Edible'), ('St', 'Stationary'), ('Sp', 'Sports'), ('El', 'Electronics'), ('Li', 'Lifestyles')], default='Ed', max_length=2)),
                ('name', models.CharField(default='Item name', max_length=100)),
                ('quantity', models.IntegerField()),
                ('image', models.ImageField(upload_to='images')),
                ('price', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('Li', 'Lifestyles'), ('Ac', 'Accomodation'), ('Tr', 'Transportation'), ('Re', 'Restaurant')], default='Ed', max_length=2)),
                ('name', models.CharField(default='Item name', max_length=100)),
                ('quantity', models.IntegerField()),
                ('image', models.ImageField(upload_to='images')),
                ('price', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Shopkeeper',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('A', 'Approved'), ('W', 'Waiting'), ('D', 'Denied'), ('C', 'Completed')], default='W', max_length=1)),
                ('quantity', models.IntegerField()),
                ('amount', models.IntegerField()),
                ('customer', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='core.customer')),
                ('item', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='core.item')),
                ('service', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='core.service')),
                ('shopkeeper', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='core.shopkeeper')),
            ],
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.BooleanField(default=True)),
                ('description', models.CharField(max_length=300)),
                ('image', models.ImageField(upload_to='images')),
                ('area', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.area')),
                ('shopkeeper', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='shop', to='core.shopkeeper')),
            ],
        ),
        migrations.AddField(
            model_name='service',
            name='shopkeeper',
            field=models.ManyToManyField(to='core.shopkeeper'),
        ),
        migrations.AddField(
            model_name='item',
            name='shopkeeper',
            field=models.ManyToManyField(related_name='items', to='core.shopkeeper'),
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.customer')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.item')),
            ],
        ),
    ]
