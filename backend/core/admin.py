from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Item)
admin.site.register(User)
admin.site.register(Cart)
admin.site.register(Transaction)
admin.site.register(Customer)
admin.site.register(Area)
admin.site.register(Shop)
admin.site.register(Shopkeeper)