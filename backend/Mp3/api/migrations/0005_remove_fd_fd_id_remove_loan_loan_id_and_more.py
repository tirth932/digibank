# Generated by Django 5.1 on 2024-09-01 04:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_transactionhistory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fd',
            name='fd_id',
        ),
        migrations.RemoveField(
            model_name='loan',
            name='loan_id',
        ),
        migrations.RemoveField(
            model_name='transactionhistory',
            name='transaction_id',
        ),
    ]