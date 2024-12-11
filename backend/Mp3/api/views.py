from rest_framework import viewsets
from .models import User,Loan,FD,TransactionHistory
from .serializers import UserSerializer
from .serializers import LoanSerializer
from .serializers import FDSerializer
from .serializers import TransactionSerializer
from rest_framework.response import Response
from rest_framework import status,viewsets
from api.serializers import *
from rest_framework import views
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

# @csrf_exempt
class UserViewSet(views. APIView):
    def get(self, request, id=None, format=None):
        if id is not None:
            queryset=User.objects.filter(id=id)
            serializer_class=UserSerializer(queryset,many=True)
            return Response({'data':serializer_class.data},status=status.HTTP_200_OK)
        queryset = User.objects.all()
        serializer_class = UserSerializer(queryset,many=True)
        return Response({'data':serializer_class.data},status=status.HTTP_200_OK)

from django.shortcuts import render
from api.models import User
from rest_framework import views
from api import serializers
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from api.serializers import *
from rest_framework.permissions import IsAuthenticated
from api.custom_permission import *
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    # Add custom claims to the access token
    refresh['is_admin'] = user.is_admin
    refresh['is_customer'] = user.is_customer
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserLogin(views.APIView):
    def post(self, request, format=None):
        serializer = UserloginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            customer_id = serializer.data.get('customer_id')
            password = serializer.data.get('password')
            user = authenticate(customer_id=customer_id, password=password)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'token':token,'data':'Login success'}, status=status.HTTP_200_OK)
            else:
                return Response({'errors':{'non_field_errors':['customer_id or password not a valid']}},
                status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

from .serializers import UserregisterSerializer

class UserRegisterView(views.APIView):
    def post(self, request, format=None):
        serializer = UserregisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            return Response({'Data':'User Registred'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class LoanApplyView(views.APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self,request,format=None):
        serializer = LoanSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.validated_data['user'] = request.user
            serializer.save()
            return Response({'Loan':'Applied'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request,id=None, format=None):
        if id is not None:
            queryset = Loan.objects.filter(id=id)
            serializer_class = LoanSerializer(queryset,many=True)
            return Response({'data':serializer_class.data},status=status.HTTP_200_OK)
        queryset = Loan.objects.all()
        serializer_class = LoanSerializer(queryset,many=True)
        return Response({'data':serializer_class.data},status=status.HTTP_200_OK)
    
    
class TransactionHistoryView(views.APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self,request):
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.validated_data['user'] = request.user
            # print("Dipesh------->",serializer.validated_data['user'])
            serializer.save()
            return Response({'Transaction':'Transaction History Created'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def get(self,request, id=None, format=None):
        if id is not None:
            queryset = TransactionHistory.objects.filter(id=id)
            serializer_class = TransactionSerializer(queryset,many=True)
            return Response({'data':serializer_class.data},status=status.HTTP_200_OK)
        queryset=TransactionHistory.objects.all()
        serializer_class=TransactionSerializer(queryset,many=True)
        return Response({'data':serializer_class.data},status=status.HTTP_200_OK)
    
class FDApplyView(views.APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self,request):
        serializer = FDSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.validated_data['user'] = request.user
            serializer.save()
            return Response({'FD':'FD Applied'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self,request, id=None, format=None):
        if id is not None:
            queryset = FD.objects.filter(id=id)
            serializer_class = FDSerializer(queryset,many=True)
            return Response({'data':serializer_class.data},status=status.HTTP_200_OK)
        queryset = FD.objects.all()
        serializer_class = FDSerializer(queryset,many=True)
        return Response({'data':serializer_class.data},status=status.HTTP_200_OK)