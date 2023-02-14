from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'customer', views.CustomerView)
router.register(r'shopkeeper', views.ShopkeeperView)

urlpatterns = [
    path('', include(router.urls)),
]
