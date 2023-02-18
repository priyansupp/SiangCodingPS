from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from .models import Item

class ItemsView(APIView):
    """
    API endpoint for viewing all items
    """
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        items = Item.objects.all()
        serializer = ItemsSerializer(items, context={'request': request}, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
            

class ItemCategoryView(APIView):
    """
    API endpoint for viewing all items of a particular category
    """
    permission_classes = [IsAuthenticated]
    
    def get(self, request, category):
        items = Item.objects.filter(category=category)
        serializer = ItemsCategorySerializer(data=items, context={'request': request}, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class ItemDetailView(APIView):
    """
    API endpoint for viewing a particular item
    """
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk):
        try:
            item = Item.objects.get(pk=pk)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ItemSerializer(data=item, context={'request': request})
        return Response(data=serializer.data, status=status.HTTP_200_OK)