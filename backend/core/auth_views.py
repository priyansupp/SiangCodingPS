from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import *
from django.contrib.auth import authenticate
from .models import User
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

def authenticate_user(email, password):
    try:
        user = User.objects.get(email=email)
        if check_password(password, user.password):
            return user
    except User.DoesNotExist:
        return None
    
def generate_token(user):
    refresh = RefreshToken.for_user(user)
    print(refresh)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserRegistrationView(APIView):
    """
    API endpoint for registering a new user
    """
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            token = generate_token(serializer.instance)
            return Response(data={'data': token, 'success': True}, status=status.HTTP_201_CREATED)
        return Response(data={'error': serializer.errors, 'success': False}, status=status.HTTP_400_BAD_REQUEST)
    
class UserLoginView(APIView):
    """
    API endpoint for logging in a user
    """
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            authenticated_user = authenticate_user(email=serializer.data['email'], password=serializer.data['password'])
            if authenticated_user is not None:
                token = generate_token(authenticated_user)
                return Response(data = {'token': token, 'success': True}, status=status.HTTP_200_OK)
        return Response(data = {'success': False, 'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
class UserLogoutView(APIView):
    """
    API endpoint for logging out a user
    """
    def post(self, request):
        pass
    
class UserProfileView(APIView):
    """
    API endpoint for getting profile of a user and updating it
    """
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(data={'data': serializer.data, 'success': True}, status=status.HTTP_200_OK)
        
    
    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={'data': serializer.data, 'success': True}, status=status.HTTP_201_CREATED)
        return Response(data={'error': serializer.errors, 'success': False}, status=status.HTTP_400_BAD_REQUEST)
        