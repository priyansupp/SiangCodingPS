from rest_framework import serializers
from .models import *
from django.contrib.auth.hashers import make_password, check_password
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .utils import Util



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

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'contact', 'is_customer', 'image', 'created_at', 'updated_at', 'password')
        
class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Customer
        fields = '__all__'
        depth = 1   # to get all the fields of customer

        
class ShopkeeperSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Shopkeeper
        fields = '__all__'
        depth = 1   # to get all the fields of shopkeeper
class UserRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ('email', 'password', 'name', 'contact', 'is_customer', 'image')
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
        fields = ('id', 'email', 'name', 'contact', 'is_customer', 'image')
        
class UserChangePasswordSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['password']
     
    def validate(self, data):
        password = data.get('password', None)
        user = self.context['user']
        if password is None:
            raise serializers.ValidationError("A password is required to change password")
        user.set_password(password)
        user.save()
        return data 
    
class UserPasswordResetSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ('email',)
        
    def validate(self, data):
        email = data.get('email', None)
        user = User.objects.get(email=email)
        if user is None:
            raise serializers.ValidationError("A user with this email does not exist")
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        print(user)
        print("uid: ", uid)
        token = PasswordResetTokenGenerator().make_token(user)
        link = "http://localhost:3000/password/reset/" + uid + "/" + token
        print("Password reset link: ", link)
        Util.send_email(data={
            'email_subject': 'Password reset',
            'email_body': 'Hi, click on the link below to reset your password: ' + link,
            'to_email': user.email
        })
        return data
    
class UserPasswordResetConfirmSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password',)
        extra_kwargs = {'password': {'write_only': True}}
        
    def validate(self, data):
        password = data.get('password', None)
        uid = self.context['uid']
        token = self.context['token']
        decoded_uid = smart_str(urlsafe_base64_decode(uid).decode())
        user = User.objects.get(pk=decoded_uid)
        if password is None:
            raise serializers.ValidationError("A password is required to change password")
        if not PasswordResetTokenGenerator().check_token(user, token):
            raise serializers.ValidationError("The reset link is invalid")
        print("Current password: ", user.password)
        hashed_password = make_password(password)
        user.password = hashed_password
        user.save()
        print("New password: ", user.password)
        return data
    
class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
        depth = 1   # to get all the fields of item
        
class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
        depth = 2   # to get all the fields of service
        
class ItemsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
        depth = 2   # to get all the fields of item category
        
class ServicesCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
        depth = 2   # to get all the fields of service category