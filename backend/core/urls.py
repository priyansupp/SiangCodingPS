from django.urls import path
from . import customer_views
from . import shopkeeper_views

urlpatterns = [

    # customer views
    path('customer/itemdetail/<int:item_id>', customer_views.itemDetail, name='search_item'),   # for fetching a particular item
    path('customer/items', customer_views.itemList, name='items'),                          # for getting list of all item or for posting an item
    path('customer/itemfilter/<str:keyword>', customer_views.filterItems, name='filter_items'), # filter items by category(ex: El, Li, etc. its letter must match those in database) or name(casesensitive keyword)
    path('customer/transaction/<int:transaction_id>', customer_views.transactionDetail, name='search_transaction'),
    path('customer/transactions', customer_views.transactionList, name='transactions'),   # list all and post transaction
    # path('customer/profile/<int:customer_id>', customer_views.customerProfile, name='profile'),
    path('customer/servicedetail/<int:service_id>', customer_views.serviceDetail, name='search_service'),
    path('customer/services', customer_views.serviceList, name='services'),
    path('customer/servicefilter/<str:filter_services>', customer_views.filterServices, name='filter_services'),
    path('customer/<int:shopkeeper_id>', customer_views.shopkeeperDetail, name='search_shopkeeper'),
    path('customer/<int:shop_id>', customer_views.shopDetail, name='search_shop'),


    # shopkeeper view
    path('shopkeeper/items/<int:shopkeeper_id>', shopkeeper_views.itemList, name='items'),      # api for listing all items of a particular shopkeeper and for posting an item by a shopkeeper
    path('shopkeeper/services/<int:shopkeeper_id>', shopkeeper_views.serviceList, name='services'),         # api for listing all services of a particular shopkeeper and for posting a service by a shopkeeper
    path('shopkeeper/item/<int:shopkeeper_id>/<int:item_id>', shopkeeper_views.item, name='search_item'),           # get, put and delete items
    path('shopkeeper/item/<int:shopkeeper_id>/<int:service_id>', shopkeeper_views.service, name='search_item'),           # get, put and delete services
    path('shopkeeper/profile/<int:shopkeeper_id>', shopkeeper_views.shopkeeperDetail, name='search_shopkeeper'),
    path('shopkeeper/shop/<int:shop_id>', shopkeeper_views.shopDetail, name='search_shop'),
    path('shopkeeper/listtransactions/<str:transactionstatus>/<int:shopkeeper_id>', shopkeeper_views.transactionList, name='transactions'),    # list all orders of a particular type from a particular shopkeeper
    path('shopkeeper/transaction/<int:shopkeeper_id>/<int:transaction_id>', shopkeeper_views.transaction, name='search_transaction')           # get, put, delete transaction
    


]
