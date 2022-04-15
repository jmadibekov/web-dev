from rest_framework import viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    @action(detail=True)
    def vacancies(self, request, pk):
        print("You are", request.user, request.auth)

        vacancies = Vacancy.objects.filter(company__id=pk).all()

        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @action(detail=False)
    def top_ten(self, request):
        vacancies = Vacancy.objects.all().order_by("-salary")[:10]

        serializer = self.get_serializer(vacancies, many=True)
        return Response(serializer.data)


@api_view()
def hello_world(request):
    return Response({"message": "Hello, world!"})
