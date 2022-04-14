from api.models import Company, Vacancy
from django.http.response import JsonResponse
# Create your views here.


def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.toJSON() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(company.toJSON(), safe=True)

def company_vacancies_list(request, company_id):
    try:
        vacancies = Vacancy.objects.filter(company_id = company_id)
        vacancies_json = [vacancy.toJSON() for vacancy in vacancies]
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancies_json, safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.toJSON() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancy.toJSON(), safe=True)

def top10_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.toJSON() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


    


