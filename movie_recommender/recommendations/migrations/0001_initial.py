# Generated by Django 5.0.7 on 2024-08-03 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="MovieRecommendation",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("score", models.CharField(max_length=10)),
                ("weekend_gross", models.CharField(max_length=50)),
                ("total_gross", models.CharField(max_length=50)),
                ("weeks_released", models.CharField(max_length=10)),
                ("reasoning", models.TextField()),
                ("timestamp", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]