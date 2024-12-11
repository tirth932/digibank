from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser,Group,Permission

class User(AbstractUser):
    acc_no = models.CharField(max_length=20, unique=True)
    pan_no = models.CharField(max_length=10, unique=True)
    customer_id = models.CharField(max_length=50, unique=True)
    is_admin = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)
    address = models.TextField()
    contact = models.CharField(max_length=15)
    balance = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    acc_type = models.CharField(max_length=50)
    
    # def __str__(self):
    #     return '__all__'

class Loan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_loan")
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    loan_type = models.CharField(max_length=50)
    interest = models.DecimalField(max_digits=5, decimal_places=2)
    apply_date = models.DateTimeField(auto_now_add=True)
    tenure = models.IntegerField() 
    
    # def __str__(self):
    #     return f"{self.loan_type} Loan - {self.loan_id}"
    
class FD(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_fd")
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    interest = models.DecimalField(max_digits=5, decimal_places=2)
    apply_date = models.DateTimeField(auto_now_add=True)
    period = models.IntegerField() # in month

    def __str__(self):
        return f"FD {self.user.username}"
    
class TransactionHistory(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE, related_name="user_transaction")
    transaction_type = models.CharField(max_length=50)  # e.g., 'deposit', 'withdrawal', 'transfer'
    account_holder = models.CharField(max_length=20)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    transaction_date = models.DateTimeField(auto_now_add=True)
    balance_after_transaction = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self) -> str:
        return str(self.user.username)