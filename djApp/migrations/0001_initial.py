# Generated by Django 4.1.1 on 2022-10-08 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VideoGames',
            fields=[
                ('id', models.AutoField(db_column='Id', primary_key=True, serialize=False)),
                ('title', models.CharField(db_column='Title', max_length=50)),
                ('rating', models.IntegerField(db_column='Rating')),
                ('platform', models.CharField(db_column='Platform', max_length=20)),
                ('preordered', models.BooleanField(blank=True, db_column='PreOrdered', null=True)),
                ('excited', models.BooleanField(blank=True, db_column='Excited', null=True)),
                ('comment', models.CharField(blank=True, db_column='Comment', max_length=200, null=True)),
                ('date_created', models.DateTimeField(blank=True, db_column='Date_Created', null=True)),
            ],
            options={
                'db_table': 'Video Games',
                'managed': False,
            },
        ),
    ]