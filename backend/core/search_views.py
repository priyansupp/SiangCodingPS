from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import *
from rest_framework import status


@api_view(["GET"])
def searchItem(request, item_id):
    """
    API endpoint for searching for a particular item from database
    """
    item = get_object_or_404(Item, pk=item_id)

    return Response(
        data="hello",               # serialize the data into python's primitive datatypes like string, integer, dict, list, tuple etc...
        status=status.HTTP_200_OK
    )



@api_view(["POST"])
def filterItems(request, keyword):
    """
    API endpoint that deals with filtering wrt a given keyword in either items or services
    """

    itemList = get_list_or_404(Item)


def allItems(request):
    """
    API endpoint for searching for a particular item from database
    """
    item = get_object_or_404(Item)

    return Response(
        data="hello",               # serialize the data into python's primitive datatypes like string, integer, dict, list, tuple etc...
        status=status.HTTP_200_OK
    )
