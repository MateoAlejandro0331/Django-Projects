from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework import status

from .models import *
from .serializers import *


@api_view(['POST', 'GET'])
def create_hospedador(request):
    if request.method == 'GET':
        data = Hospedador.objects.all()
        serializer = HospedadoresSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = HospedadoresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # save the data into a object
            return Response(serializer.data, status=201)

    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def delete_hospedador(request, id):
        try:
            host = Hospedador.objects.get(id=id)
        except Hospedador.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        if request.method == 'DELETE':
            host.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['DELETE'])
def delete_huesped(request, id):
        try:
            guest = Huesped.objects.get(id=id)
        except Huesped.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        if request.method == 'DELETE':
            guest.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST', 'GET'])
def create_huesped(request):
    if request.method == 'GET':
        data = Huesped.objects.all()
        serializer = HuespedesSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = HuespedesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # save the data into a object
            return Response(serializer.data, status=201)

    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def match_huesped(request):
    try:

        host = request.data.get('hospedador')
        guest = request.data.get('huesped')
        huesped = Huesped.objects.get(document=guest)
        hospedador = Hospedador.objects.get(document=host)
        if huesped.hospedador:
            raise ValidationError('El huesped ya  tiene un match')
        if hospedador.guests <= hospedador.capacity:
            if hospedador.guests == hospedador.capacity:
                raise ValidationError('El hospedador ya esta lleno')
            huesped.hospedador = hospedador
            hospedador.guests += 1
            huesped.save()
            hospedador.save()
            serializer = HuespedesSerializer(huesped)
            return Response(serializer.data)
    except Huesped.DoesNotExist:
        return Response(status=404)
    except Hospedador.DoesNotExist:
        return Response(status=400)


@api_view(['GET'])
def filter_hospedador(request):
    key, value = next(iter(request.query_params.items()))
    field_dict = {key: value}
    data = Hospedador.objects.filter(**field_dict)
    serializer = HospedadoresSerializer(data, many=True)
    print(serializer.data)
    return Response(serializer.data)

@api_view(['GET'])
def filter_huesped(request):
    key, value = next(iter(request.query_params.items()))
    field_dict = {key: value}
    data = Huesped.objects.filter(**field_dict)
    serializer = HuespedesSerializer(data, many=True)
    print(serializer.data)
    return Response(serializer.data)