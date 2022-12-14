# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Users(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True)  # Field name made lowercase.
    username = models.CharField(db_column='Username', max_length = 100, unique = True)  # Field name made lowercase.
    password = models.TextField(db_column='Password', max_length = 100)  # Field name made lowercase.
    date_created = models.DateTimeField(db_column='Date_Created', blank=True, null=True)  # Field name made lowercase.
    token = models.TextField(db_column='Token', blank=True, null=True, max_length = 500)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Users'


class VideoGames(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True)  # Field name made lowercase.
    title = models.CharField(db_column='Title', max_length = 100)  # Field name made lowercase.
    rating = models.IntegerField(db_column='Rating')  # Field name made lowercase.
    platform = models.CharField(db_column='Platform', max_length = 100)  # Field name made lowercase.
    preordered = models.BooleanField(db_column='PreOrdered', blank=True, null=True)  # Field name made lowercase.
    excited = models.BooleanField(db_column='Excited', blank=True, null=True)  # Field name made lowercase.
    comment = models.CharField(db_column='Comment', blank=True, null=True, max_length = 100)  # Field name made lowercase.
    date_created = models.DateTimeField(db_column='Date_Created', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Video Games'