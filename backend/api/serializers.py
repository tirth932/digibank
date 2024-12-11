from rest_framework import serializers
from .models import User
from .models import Loan
from .models import FD
from .models import TransactionHistory
from django.contrib.auth import get_user_model

from rest_framework import serializers
from django.conf import settings
from django.utils.encoding import smart_str, force_str,force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.exceptions import ValidationError

User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class LoanSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Loan
        fields = '__all__'

class FDSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = FD
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = TransactionHistory
        fields = '__all__'

from rest_framework import serializers
from .models import User

class UserloginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255)
    class Meta:
        model = User
        fields = ['username','password']


from rest_framework import serializers
from .models import User

class UserregisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    
    class Meta:
        model = User
        fields = ['username', 'email','acc_no','pan_no','customer_id',
                  'is_admin','is_customer','address','contact',
                  'balance','acc_type','password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, data):
        p1 = data.get('password')
        p2 = data.get('password2')
        if p1 != p2:
            raise serializers.ValidationError('Password & confirm password do not match')
        return data

    def create(self, validated_data):
        # Remove the password2 field from validated_data as it's not needed for user creation
        validated_data.pop('password2', None)
        
        # Create the user with the remaining validated_data
        return User.objects.create_user(**validated_data)
class UpdateBalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['balance']    
