# Generated by Django 5.1 on 2024-09-12 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_loan_apply_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fd',
            name='apply_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
