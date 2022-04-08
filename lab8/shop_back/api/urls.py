from django.urls import path

from api.views import categories_list, category_detail, product_detail, product_of_category, products_list


urlpatterns = [
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/', categories_list),
    path('categories/<int:category_id>/', category_detail),
    path('categories/<int:category_id>/products/', product_of_category)
]