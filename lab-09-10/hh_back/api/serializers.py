from rest_framework import serializers

from .models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True, allow_blank=False, max_length=200)
    description = serializers.CharField(
        required=False, allow_blank=True, max_length=500
    )
    city = serializers.CharField(required=True, allow_blank=False, max_length=200)
    address = serializers.CharField(required=False, allow_blank=True, max_length=500)

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.city = validated_data.get("city", instance.city)
        instance.address = validated_data.get("address", instance.address)

        instance.save()

        return instance


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"
