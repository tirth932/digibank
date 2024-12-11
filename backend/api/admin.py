from django.contrib import admin
from .models import User
from .models import Loan
from .models import FD
from .models import TransactionHistory

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id','username', 'email', 'acc_no', 'pan_no', 'customer_id', 'is_admin', 'is_customer', 'balance', 'acc_type']
    search_fields = ['username', 'email', 'acc_no', 'pan_no', 'customer_id']

@admin.register(Loan)
class LoanAdmin(admin.ModelAdmin):
    list_display = ['id','amount', 'loan_type', 'interest', 'apply_date', 'tenure']
    search_fields = ['loan_type']
    # list_filter = ('loan_type', 'apply_date')
    # ordering = ('loan_id',)

@admin.register(FD)
class FDAdmin(admin.ModelAdmin):
    list_display = ['id','amount', 'interest', 'apply_date', 'period']
    search_fields = ['amount']
    # list_filter = ('apply_date', 'period')
    # ordering = ('fd_id',)
@admin.register(TransactionHistory)
class TransactionHistoryAdmin(admin.ModelAdmin):
    list_display = ['id','transaction_type','amount','transaction_date','balance_after_transaction']
    # search_fields = []