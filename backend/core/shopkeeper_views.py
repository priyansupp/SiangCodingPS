from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from rest_framework import status
from .serializers import *


@api_view(["GET", "POST"])
def itemList(request, shopkeeper_id):
    if request.method == "GET":
        try:
            items = Item.objects.filter(shopkeeper_id=shopkeeper_id)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ItemSerializer(items, context={'request': request}, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = ItemSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(statu=status.HTTP_400_BAD_REQUEST)



@api_view(["GET", "POST"])
def serviceList(request, shopkeeper_id):
    if request.method == "GET":
        try:
            services = Service.objects.filter(shopkeeper_id=shopkeeper_id)
        except Service.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ServiceSerializer(services, context={'request': request}, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = ServiceSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(statu=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def item(request, item_id):
    """
    API endpoint for searching, editing and deleting a particular item from database. 
    """
    try:
        item = Item.objects.get(pk=item_id)
    except Item.DoesNotExist:
        return Response(error="Item not found", status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ItemSerializer(item, context={'request': request})
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    elif request.method == "PUT":
        serializer = ItemSerializer(item, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET", "PUT", "DELETE"])
def service(request, service_id, shopkeeper_id):
    """
    API endpoint for searching, editing and deleting a particular item from database. 
    """
    try:
        service = Service.objects.get(pk=service_id, shopkeeper_id=shopkeeper_id)
    except Service.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = ServiceSerializer(service, context={'request': request})
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    elif request.method == "PUT":
        serializer = ServiceSerializer(service, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        service.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(["GET"])
def shopkeeperDetail(request, shopkeeper_id):
    """
    API endpoint for searching for fetching profile of a shopkeeper
    """
    try:
        shopkeeper = Shopkeeper.objects.get(pk=shopkeeper_id)
    except Shopkeeper.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ShopkeeperSerializer(shopkeeper, context={'request': request})
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def shopDetail(request, shop_id):
    """
    API endpoint for searching for a particular shop from database
    """
    try:
        shop = Shop.objects.get(pk=shop_id)
    except Shop.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ShopSerializer(shop, context={'request': request})
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def transactionList(request, transactionstatus, shopkeeper_id):
    """
    API endpoint to get all pending/active orders for a particular shop/shopkeeper
    """
    try:
        transactions = Transaction.objects.filter(shopkeeper_id=shopkeeper_id, status=transactionstatus)
    except Transaction.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = TransactionSerializer(transactions, context={'request': request}, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)




@api_view(["GET", "PUT", "DELETE"])
def transaction(request, transaction_id, shopkeeper_id):
    """
    API endpoint for searching, editing and deleting a particular item from database. 
    """
    try:
        transaction = Transaction.objects.get(pk=transaction_id, shopkeeper_id=shopkeeper_id)
    except Transaction.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = TransactionSerializer(transaction, context={'request': request})
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    elif request.method == "PUT":
        serializer = TransactionSerializer(transaction, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    







