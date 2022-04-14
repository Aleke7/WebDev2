from django.contrib import admin

from api.models import Company, Vacancy

# Register your models here.

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city', 'address')
    search_fields = ('name', 'city',)
    list_filter = ('city',)


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary')
    search_fields = ('name', 'salary',)
    list_filter = ('company',)

# admin.site.register(Company)
# admin.site.register(Vacancy)
