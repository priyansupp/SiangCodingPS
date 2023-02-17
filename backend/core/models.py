from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager
)
from django.contrib.auth.hashers import make_password

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
    shopkeeper = models.ManyToManyField('Shopkeeper')
    quantity = models.IntegerField()
    image = models.ImageField(upload_to="images")
    price = models.IntegerField(default=0)

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
    shopkeeper = models.ManyToManyField('Shopkeeper')
    quantity = models.IntegerField()
    image = models.ImageField(upload_to="images")
    price = models.IntegerField(default=0)

    def __str__(self) -> str:
        return str(self.id) + " " + self.name

class UserManager(BaseUserManager):
    use_in_migrations = True    
    def create_user(self,email, name, password=None, **extra_fields):
        # handle exceptions 
        if not email:
            raise ValueError("Email is required")
        if not name:
            raise ValueError("Name is required")
        hashed_password = make_password(password)
        print("hashed_password: ", hashed_password)
        user = self.model(
            email=self.normalize_email(email),
            name=name,
            password=hashed_password,
            **extra_fields
        )
        print("user: ", user)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, name, password=None, **extra_fields):
        user = self.create_user(
            email,
            name,
            password,
            **extra_fields
        )
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user
    
class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='Email',
        unique=True,
        default="abc@gmail.com"
    )
    name = models.CharField(
        max_length=200,
        default="abc"
    )
    password = models.CharField(
        max_length=200, 
        help_text="Enter your password",
        default="abc"
    )
    last_login = models.DateTimeField(
        verbose_name='Last Login',
        auto_now=True
    )
    contact = models.IntegerField(default=0, unique=True)
    is_shopkeeper = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=True)
    image = models.ImageField(upload_to="images", default="images/default.png")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'password']
    
    objects = UserManager()
    
    def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

    def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      # Simplest possible answer: Yes, always
      return True

    def __str__(self):
        return self.email
class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="customer")

    def __str__(self) -> str:
        return str(self.id)
        
class Shopkeeper(models.Model):
    # default shopkeeper id provided by django
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)

class Shop(models.Model):
    # default shop id provided by django
    status = models.BooleanField(default=True)      # True is open, False is closed
    shopkeeper = models.OneToOneField(Shopkeeper, on_delete=models.CASCADE, related_name="shop")
    area = models.ForeignKey('Area', on_delete=models.CASCADE)
    description = models.CharField(max_length=300)
    image = models.ImageField(upload_to="images")

    def __str__(self) -> str:
        return str(self.id)

        

class Cart(models.Model):
    # default cart id provided by django
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
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
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, default=1)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, default=1)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, default=1)
    shopkeeper = models.ForeignKey('Shopkeeper', on_delete=models.CASCADE, default=1)
    quantity = models.IntegerField()
    amount = models.IntegerField()      # item_price(or service_price) * quantity

    def __str__(self) -> str:
        return str(self.id)


class Area(models.Model):
    # default area id provided by django
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)

    def __str__(self) -> str:
        return str(self.id)