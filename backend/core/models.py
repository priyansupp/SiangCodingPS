from django.db import models

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
    shop_id = models.IntegerField()
    quantity = models.IntegerField()
    image = models.ImageField(upload_to="images")

    def __str__(self) -> str:
        return f'id={self.id} and name={self.name} and shop={self.shop_id}'


class User(models.Model):
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=200, help_text="Enter your password")
    is_shopkeeper = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=True)
    image = models.ImageField(upload_to="images")

    def __str__(self) -> str:
        return "User model"

class Customer(models.Model):
    # default customer id provided by django
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="customer")
    name = models.CharField(max_length=200)
    contact = models.IntegerField()
    email_id = models.EmailField()

    def __str__(self) -> str:
        return "Customer model"

class Cart(models.Model):
    # default cart id provided by django
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE)
    amount = models.IntegerField()

    def __str__(self) -> str:
        return "Cart model"




class Transaction(models.Model):
    # default item id provided by django
    Status = [
        ('A', 'Approved'),
        ('W', 'Waiting'),
        ('D', 'Denied')
    ]
    status = models.CharField(choices=Status, default='W', max_length=1)
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE)
    shop_id = models.ForeignKey('Shop', on_delete=models.CASCADE)
    quantity = models.IntegerField()
    amount = models.IntegerField()

    def __str__(self) -> str:
        return "Transaction model"







class Shopkeeper(models.Model):
    # default shopkeeper id provided by django
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    shop_id = models.ForeignKey('Shop', on_delete=models.CASCADE) # a shopkeeper can be owner of only one shop.
    name = models.CharField(max_length=200)
    contact = models.IntegerField()
    email_id = models.EmailField()

    def __str__(self) -> str:
        return "Shopkeeper model"


class Area(models.Model):
    # default area id provided by django
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)

    def __str__(self) -> str:
        return "Area model"
        

class Shop(models.Model):
    # default shop id provided by django
    status = models.BooleanField(default=True)      # True is open, False is closed
    shopkeeper_id = models.ForeignKey(Shopkeeper, on_delete=models.CASCADE, related_name="shop")
    area_id = models.ForeignKey(Area, on_delete=models.CASCADE)
    description = models.CharField(max_length=300)
    image = models.ImageField(upload_to="images")

    def __str__(self) -> str:
        return "Shop model"

        






