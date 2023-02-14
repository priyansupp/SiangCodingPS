from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import PermissionsMixin

# Create your models here.


class Item(models.Model):
    # default item id provided by django
    CategoryChoices = [
        ('Ed', 'Edible'),
        ('St', 'Stationary'),
        ('Sp', 'Sports'),
        ('El', 'Electronics'),
        ('Li', 'Lifestyles')
    ]
    category = models.CharField(choices=CategoryChoices, default='Ed', max_length=2) 
    name = models.CharField(default="Item name", max_length=100)
    shopkeeper_id = models.IntegerField()
    quantity = models.IntegerField()
    image = models.ImageField(upload_to="images")

    def __str__(self) -> str:
        return str(self.id) + " " + self.name

class Service(models.Model):
    # default service id provided by django
    ServiceChoices = [
        ('Li', 'Lifestyles'),
        ('Ac', 'Accomodation'),
        ('Tr', 'Transportation'),
        ('Re', 'Restaurant')
    ]
    category = models.CharField(choices=ServiceChoices, default='Ed', max_length=2) 
    name = models.CharField(default="Item name", max_length=100)
    shopkeeper_id = models.IntegerField()
    quantity = models.IntegerField()
    image = models.ImageField(upload_to="images")

    def __str__(self) -> str:
        return str(self.id) + " " + self.name


# class User(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(unique=True)
#     name = models.CharField(max_length=200)
#     password = models.CharField(max_length=200, help_text="Enter your password")
#     is_shopkeeper = models.BooleanField(default=False)
#     is_customer = models.BooleanField(default=True)
#     image = models.ImageField(upload_to="images")

#     def __str__(self):
#         return str(self.id)

class User(models.Model):
    email = models.EmailField(unique=True, default="abc@gmail.com")
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=200, help_text="Enter your password")
    is_shopkeeper = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=True)
    image = models.ImageField(upload_to="images")

    def __str__(self):
        return str(self.id) 

class Customer(models.Model):
    # default customer id provided by django
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="customer")
    name = models.CharField(max_length=200)
    contact = models.IntegerField()

    def __str__(self) -> str:
        return str(self.id)
        
class Shopkeeper(models.Model):
    # default shopkeeper id provided by django
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    # shop_id = models.ForeignKey('Shop', on_delete=models.CASCADE) # a shopkeeper can be owner of only one shop.?/?7
    name = models.CharField(max_length=200)
    contact = models.IntegerField()

    def __str__(self):
        return str(self.id)

class Cart(models.Model):
    # default cart id provided by django
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE)
    amount = models.IntegerField()

    def __str__(self) -> str:
        return str(self.id)

class Transaction(models.Model):
    # default item id provided by django
    Status = [
        ('A', 'Approved'),      # when order is confirmed by shopkeeper
        ('W', 'Waiting'),       # when order is placed, it gets into waiting
        ('D', 'Denied'),        # when order is cancelled by shopkeeper
        ('C', 'Completed'),     # when order has been completed(i.e item/service has been purchased by customer)
    ]
    status = models.CharField(choices=Status, default='W', max_length=1)
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE)
    shopkeeper_id = models.ForeignKey('Shopkeeper', on_delete=models.CASCADE, default=1)
    quantity = models.IntegerField()
    amount = models.IntegerField()

    def __str__(self) -> str:
        return str(self.id)









class Area(models.Model):
    # default area id provided by django
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)

    def __str__(self) -> str:
        return str(self.id)
        

class Shop(models.Model):
    # default shop id provided by django
    status = models.BooleanField(default=True)      # True is open, False is closed
    shopkeeper_id = models.ForeignKey(Shopkeeper, on_delete=models.CASCADE, related_name="shop")
    area_id = models.ForeignKey(Area, on_delete=models.CASCADE)
    description = models.CharField(max_length=300)
    image = models.ImageField(upload_to="images")

    def __str__(self) -> str:
        return str(self.id)

        






