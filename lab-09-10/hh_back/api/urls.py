from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r"companies", views.CompanyViewSet, basename="companies")
router.register(r"vacancies", views.VacancyViewSet, basename="vacancies")

urlpatterns = [
    path("", include(router.urls)),
]
