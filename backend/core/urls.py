from django.urls import path, include
from rest_framework import routers
from . import customer_views
from . import shopkeeper_views
import requests

urlpatterns = [

    # customer views
    path('customer/itemdetail/<int:item_id>', customer_views.itemDetail, name='search_item'),   # for fetching a particular item
    path('customer/items', customer_views.itemList, name='all_items'),                          # for getting list of all item or for posting an item
    path('customer/itemfilter/<str:keyword>', customer_views.filterItems, name='filter_items'), # filter items by category(its letter must match those in database) or name(keyword)
    # path('customer/transaction/<int:transaction_id>', customer_views.transactionDetail, name='search_transaction'),
    # path('customer/profile/<int:customer_id>', customer_views.customerProfile, name='profile'),
    # path('customer/servicedetail/<int:service_id>', customer_views.serviceDetail, name='search_service'),
    # path('customer/services', customer_views.allServices, name='all_services'),
    # path('customer/servicefilter/<str:filter_services>', customer_views.filterServices, name='filter_services'),
    # path('customer/')


    # shopkeeper view
    # path('shopkeeper/listItems/<int:shopkeeper_id>', shopkeeper_views.listItems, name='list_items'),
    # path('shopkeeper/listServices/<int:shopkeeper_id>', shopkeeper_views.listServices, name='list_services'),
    # path('shopkeeper/itemdetail/<int:item_id>', shopkeeper_views.itemDetail, name='search_item'),
    # path('shopkeeper/servicedetail/<int:service_id>', shopkeeper_views.serviceDetail, name='search_service'),
    # path('shopkeeper/postitem/<int:')



]
