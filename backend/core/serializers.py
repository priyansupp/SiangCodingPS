from rest_framework import serializers
from .models import Customer, Shopkeeper

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
        
class ShopkeeperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shopkeeper
        fields = '__all__'