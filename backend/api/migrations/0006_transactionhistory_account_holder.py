# Generated by Django 5.1 on 2024-09-01 05:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_fd_fd_id_remove_loan_loan_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='transactionhistory',
            name='account_holder',
            field=models.CharField(default=1, max_length=20),
            preserve_default=False,
        ),
    ]
