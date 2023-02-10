from django.contrib import admin
from .models import User, Customer, Shopkeeper, Area, Shop, Cart, Transaction, Item
# Register your models here.
admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Shopkeeper)
admin.site.register(Area)
admin.site.register(Shop)
admin.site.register(Cart)
admin.site.register(Transaction)
admin.site.register(Item)


