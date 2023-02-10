from django.db import models

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200, unique=True, help_text="Enter your password")
    is_shopkeeper = models.BooleanField(default="yes")
    is_customer = models.BooleanField(default='Yes')
    image = models.ImageField(upload_to="images")

class Customer(models.Model):
    cust_id = models.IntegerField()
    user_id = models.IntegerField()
    name = models.CharField(max_length=200)
    contact = models.IntegerField()
    email_id = models.EmailField()

class Shopkeeper(models.Model):
    shopkeeper_id = models.IntegerField()
    user_id = models.IntegerField()
    shop_id = models.IntegerField()
    name = models.CharField(max_length=200)
    contact = models.IntegerField()
    email_id = models.EmailField()

class Area(models.Model):
    area_id = models.IntegerField()
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    


class Shop(models.Model):
    Status = (
        ('O', 'Open'),
        ('C', 'Closed')
    )
    shop_id = models.IntegerField()
    shopkeeper_id = models.OneToOneField(Shopkeeper, on_delete=models.CASCADE)
    area_id = models.OneToOneField(Area, on_delete=models.CASCADE)
    status = models.CharField(choices=Status, default="Open", max_length=2)
    description = models.CharField(max_length=300)
    image = models.ImageField(upload_to="images")
    


class Cart(models.Model):
    cart_id = models.IntegerField()
    customer_id = models.IntegerField()
    item_id = models.IntegerField()
    amount = models.IntegerField()

class Transaction(models.Model):
    Status = (
        ('A', 'Approved'),
        ('W', 'Waiting'),
        ('D', 'Denied')
    )
    transaction_id = models.IntegerField()
    customer_id = models.IntegerField()
    item_id = models.IntegerField()
    shop_id = models.IntegerField()
    items_purchased = models.IntegerField()
    amount = models.IntegerField()
    status = models.CharField(choices=Status, max_length=2)

class Item(models.Model):
    Category = (
        ('E', 'Edible'),
        ('St', 'Stationary'),
        ('S', 'Sports'),
        ('E', 'Electronics'),
        ('L', 'Lifestyles')
    )
    item_id = models.IntegerField()
    shop_id = models.IntegerField()
    no_of_items = models.IntegerField()
    image = models.ImageField(upload_to="images")
    category = models.CharField(choices=Category, default="Edible", max_length=200)
    

    




    

