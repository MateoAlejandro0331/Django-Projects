from rest_framework import serializers
from .models import Hospedador, Huesped


class HospedadoresSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hospedador
        fields = '__all__'

class HuespedesSerializer(serializers.ModelSerializer):

    hospedador = HospedadoresSerializer(required=False)

    class Meta:
        model = Huesped
        fields = '__all__'
