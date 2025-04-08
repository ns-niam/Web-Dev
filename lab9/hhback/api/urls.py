from django.urls import path
from . import views
urlpatterns = [
    path("companies", views.CompanyListAPIView.as_view()),
    path("companies/<int:id>", views.CompanyDetailAPIView.as_view()),
    path("companies/<int:id>/vacancies", views.CompanyVacancyListlAPIView.as_view()),
    path("vacancies", views.VacancyListlAPIView.as_view()),
    path("vacancies/<int:id>", views.VacancyDetailAPIView.as_view()),
    path("vacancies/top_ten", views.VacancyTop10APIView.as_view()),
]
    
