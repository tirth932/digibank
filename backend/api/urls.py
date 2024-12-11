from django.urls import path
from .views import UserLogin,UserRegisterView,LoanApplyView,TransactionHistoryView,CheckAccountView,UpdateBalanceView
from .views import UserViewSet,FDApplyView
# from .views import UserViewSet,UserRegister
# from .views import LoanViewSet,Userlogin
urlpatterns = [
    # path('user/', UserViewSet.as_view(), name='user-list'),
    # # path('loan/', LoanViewSet.as_view({'get': 'list'}), name='fds-list'),
    # path('sign-up/', UserRegister.as_view(), name='create-user'),
    # path('login/', Userlogin.as_view(), name='login-user')
    path("login/",UserLogin.as_view(),  name='user-login'),
    path("sign-up/",UserRegisterView.as_view(),name="user-sign-up"),
    path("get_user/",UserViewSet.as_view(),name="get-user"),
    # path("get_user/<int:id>/",UserViewSet.as_view(),name="get-user"),
    path("loan/",LoanApplyView.as_view(),name="loan-apply"),
    path("get_loan/",LoanApplyView.as_view(),name="get-loan"),
    path("transactionhistory/",TransactionHistoryView.as_view(),name="transaction-history"),
    path("get_transaction/",TransactionHistoryView.as_view(),name="get-transaction"),
    path("fd/",FDApplyView.as_view(),name="fd-apply"),
    path("get_fd/",FDApplyView.as_view(),name="get-fd"),
    path('check-account/', CheckAccountView.as_view(), name='check_account'),
    path('update-balance/<int:pk>/', UpdateBalanceView.as_view(), name='update-balance'),

]
