from django.urls import path
from . import views
urlpatterns = [
    path("companies", views.CompanyListAPIView.as_view()),
    path("companies/<int:id>", views.CompanyDetailAPIView.as_view()),
    path("companies/<int:id>/vacancies", views.CompanyVacancyListlAPIView.as_view()),
    path("vacancies", views.vacancy_list_view),
    path("vacancies/<int:id>", views.vacancy_detail_view),
    path("vacancies/top_ten", views.vacancy_top_ten),
]
    
