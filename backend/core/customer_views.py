from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import *
from rest_framework import status
from django.http import HttpResponse
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

    serializer = ItemSerializer(data=item, context={'request': request})        # serialize the data into python's primitive datatypes like string, integer, dict, list, tuple etc...

    print(item)
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

        serializer = ItemSerializer(data=items, context={'request': request}, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = ItemSerializer(data=request.data)      # serializing the incoming data
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
        serializer = ItemSerializer(data=items_by_name, context={'request': request}, many=True)
    elif len(items_by_category) > 0:
        serializer = ItemSerializer(data=items_by_category, context={'request': request}, many=True)

    return Response(data=serializer.data, status=status.HTTP_200_OK)
















