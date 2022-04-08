from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True)
    def products(self, request, pk):
        print(pk)
        products = Product.objects.filter(category__id=pk).all()

        serializer = self.get_serializer(products, many=True)
        return Response(serializer.data)