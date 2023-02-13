from django.urls import path
from . import search_views

urlpatterns = [

    # customer views
    path('customer/itemdetail/<int:item_id>', search_views.searchItem, name='search_item'),



    # path('shopkeeper/', ),
]
