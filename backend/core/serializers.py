from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'contact', 'is_shopkeeper', 'is_customer', 'image', 'created_at', 'updated_at', 'password')
        
class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Customer
        fields = '__all__'
        depth = 1   # to get all the fields of customer

        
class ShopkeeperSerializer(serializers.ModelSerializer):
    usery = UserSerializer()
    class Meta:
        model = Shopkeeper
        fields = '__all__'
        depth = 1   # to get all the fields of shopkeeper


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'
        depth = 1   # to get all the fields of shop


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
        depth = 1   # to get all the fields of item

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
        depth = 1   # to get all the fields of service


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
        depth = 1   # to get all the fields of cart

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'
        depth = 1   # to get all the fields of transaction

class UserRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ('email', 'password', 'name', 'contact', 'is_shopkeeper', 'is_customer', 'image')
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, data):
        user = User.objects.create_user(**data)
        return user
    
class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ('email', 'password')
    
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'name', 'contact', 'is_shopkeeper', 'is_customer', 'image', 'password')
        extra_kwargs = {'password': {'write_only': True}}