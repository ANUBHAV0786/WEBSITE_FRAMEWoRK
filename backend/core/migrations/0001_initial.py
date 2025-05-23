# Generated by Django 5.2 on 2025-04-29 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('image', models.URLField()),
                ('content', models.TextField()),
                ('blog_type', models.CharField(choices=[('home', 'Home Page'), ('about', 'About Us Page'), ('services', 'Services Page')], max_length=20)),
            ],
        ),
    ]
