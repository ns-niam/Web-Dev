from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.shortcuts import get_object_or_404


# Create your views here.
class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

class CompanyDetailAPIView(APIView):
    def get(self, request, id: int):
        company = get_object_or_404(Company, pk=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

class CompanyVacancyListlAPIView(APIView):
    def get(self, request, id: int):
        company = get_object_or_404(Company, pk=id)
        serializer = VacancySerializer(company.vacancies.all(), many=True)
        return Response(serializer.data)


class VacancyListlAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyDetailAPIView(APIView):
    def get(self, request, id: int):
        vacancy = get_object_or_404(Vacancy, pk=id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

class VacancyTop10APIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by("-salary")
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
