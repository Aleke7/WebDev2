from django.urls import path

from api.views import categories_list, category_detail, product_detail, product_of_category, products_list


urlpatterns = [
    path('products/', products_list),
    path('products/<int:id>/', product_detail),
    path('categories/', categories_list),
    path('categories/<int:id>/', category_detail),
    path('categories/<int:id>/products/', product_of_category)
]