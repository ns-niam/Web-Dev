from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, Category
from .serializers import CategorySerializer, ProductSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_by_id(request, id):
    product = get_object_or_404(Product, pk=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def category_by_id(request, id):
    category = get_object_or_404(Category, pk=id)
    serializer = CategorySerializer(category)
    return Response(serializer.data)

@api_view(['GET'])
def products_by_category(request, id):
    category = get_object_or_404(Category, pk=id)
    products = category.products.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
