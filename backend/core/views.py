from rest_framework import viewsets
from .serializers import CustomerSerializer, ShopkeeperSerializer, ItemSerializer
from .models import Customer, Shopkeeper, Item

# Create your views here.
class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
    
    def get_queryset(self):     # this is the method that is called when you do a GET request to the API endpoint for this view set (i.e. http://localhost:8000/customer/) 
        return Customer.objects.all()
    
    def perform_create(self, serializer):      # this is the method that is called when you do a POST request to the API endpoint for this view set (i.e. http://localhost:8000/customer/)
        serializer.save()
        
    def perform_update(self, serializer):       # this is the method that is called when you do a PUT request to the API endpoint for this view set (i.e. http://localhost:8000/customer/)
        serializer.save()
        
    def perform_destroy(self, instance):        # this is the method that is called when you do a DELETE request to the API endpoint for this view set (i.e. http://localhost:8000/customer/)
        instance.delete()
    
class ShopkeeperView(viewsets.ModelViewSet):
    serializer_class = ShopkeeperSerializer
    queryset = Shopkeeper.objects.all()
    
    def get_queryset(self):     # this is the method that is called when you do a GET request to the API endpoint for this view set (i.e. http://localhost:8000/shopkeeper/) 
        return Shopkeeper.objects.all()
    
    def perform_create(self, serializer):      # this is the method that is called when you do a POST request to the API endpoint for this view set (i.e. http://localhost:8000/shopkeeper/)
        serializer.save()
        
    def perform_update(self, serializer):       # this is the method that is called when you do a PUT request to the API endpoint for this view set (i.e. http://localhost:8000/shopkeeper/)
        serializer.save()
        
    def perform_destroy(self, instance):        # this is the method that is called when you do a DELETE request to the API endpoint for this view set (i.e. http://localhost:8000/shopkeeper/)
        instance.delete()

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    def get_queryset(self):
        qs = Item.objects.all()
        name = self.request.query_params.get('name')
        if name is not None:
            qs = qs.filter(name__icontains=name)
        return qs


    

    
