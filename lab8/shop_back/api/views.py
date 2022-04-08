from django.http.response import JsonResponse

from api.models import Category, Product

# Create your views here.

def products_list(request):
    products = Product.objects.all()
    products_json = [product.toJSON() for product in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    try:
        product = Product.objects.get(id = product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(product.toJSON(), safe=True)

def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category.toJSON() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, category_id):
    try:
        category = Category.objects.get(id = category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(category.toJSON(), safe=True)

def product_of_category(request, categoryId):
    try:
        products = Product.objects.filter(category_id = categoryId)
        products_json = [product.toJSON() for product in products]
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(products_json, safe=False)






