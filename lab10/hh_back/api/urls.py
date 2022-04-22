from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token

from api.views import CompanyListAPIView, CompanyDetailAPIView, \
                      VacancyListAPIView, VacancyDetailAPIView, \
                      company_vacancy_list, vacancy_top_ten

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:pk>/vacancies/', company_vacancy_list),

    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten', vacancy_top_ten),
]
