from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from rest_framework import status
from .serializers import *

@api_view(["GET"])
def itemDetail(request, item_id):
    """
    API endpoint for searching for a particular item from database
    """
    try:
        item = Item.objects.get(pk=item_id)
    except Item.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ItemSerializer(item, context={'request': request})        # serialize the data into python's primitive datatypes like string, integer, dict, list, tuple etc...

    # print(item)
    return Response(
        data=serializer.data,
        status=status.HTTP_200_OK
    )


@api_view(["GET", "POST"])
def itemList(request):
    """
    API endpoint for searching for getting item list and posting an item
    """
    if request.method == "GET":
        items = Item.objects.all()

        serializer = ItemSerializer(items, context={'request': request}, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = ItemSerializer(data=request.data)      # serializing the incoming data. Pass request.data as data attribute in post request as data is fetched from request body
        if serializer.is_valid():       # checking for validity according to our model
            serializer.save()           # saving the data into database

            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def filterItems(request, keyword):
    """
    API endpoint that deals with filtering wrt a given keyword in either items or services
    """
    try:
        items_by_name = Item.objects.filter(name=keyword)
        items_by_category = Item.objects.filter(category=keyword)
    except Item.DoesNotExist:
        Response(status=status.HTTP_404_NOT_FOUND)
    if len(items_by_name) > 0:
        serializer = ItemSerializer(items_by_name, context={'request': request}, many=True)
    elif len(items_by_category) > 0:
        serializer = ItemSerializer(items_by_category, context={'request': request}, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)



@api_view(["GET"])
def serviceDetail(request, service_id):
    """
    API endpoint for searching for a particular service from database
    """
    try:
        service = Service.objects.get(pk=service_id)
    except Service.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ServiceSerializer(service, context={'request': request})        # serialize the data into python's primitive datatypes like string, integer, dict, list, tuple etc...
    return Response(
        data=serializer.data,
        status=status.HTTP_200_OK
    )


@api_view(["GET", "POST"])
def serviceList(request):
    """
    API endpoint for searching for getting service list and posting an service
    """
    if request.method == "GET":
        services = Service.objects.all()
        serializer = ServiceSerializer(services, context={'request': request}, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def filterServices(request, keyword):
    """
    API endpoint that deals with filtering wrt a given keyword in either items or services
    """
    try:
        services_by_name = Service.objects.filter(name=keyword)
        services_by_category = Service.objects.filter(category=keyword)
    except Item.DoesNotExist:
        Response(status=status.HTTP_404_NOT_FOUND)

    if len(services_by_name) > 0:
        serializer = ServiceSerializer(services_by_name, context={'request': request}, many=True)
    elif len(services_by_category) > 0:
        serializer = ServiceSerializer(services_by_category, context={'request': request}, many=True)

    return Response(data=serializer.data, status=status.HTTP_200_OK)






@api_view(["GET"])
def transactionDetail(request, transaction_id):
    """
    API endpoint for searching for a particular transaction from database
    """
    try:
        transaction = Transaction.objects.get(pk=transaction_id)
    except Transaction.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = TransactionSerializer(transaction, context={'request': request})
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(["GET", "POST"])
def transactionList(request):
    """
    API endpoint for searching for getting item list and posting an item
    """

    if request.method == "GET":
        transactions = Transaction.objects.all()
        serializer = TransactionSerializer(transactions, context={'request': request}, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = TransactionSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()

            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





@api_view(["GET"])
def shopkeeperDetail(request, shopkeeper_id):
    """
    API endpoint for searching for a particular shopkeeper from database
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
def customerList(request):
    """
    API endpoint for getting customer list
    """
    customers = Customer.objects.all()
    serializer = CustomerSerializer(customers, context={'request': request}, many=True)
    for serializer in serializer.data:
        if serializer['user'].is_admin:
            serializer['user'].pop('is_admin')
    return Response(data=serializer.data, status=status.HTTP_200_OK)


