from django.db import models


class VideoGames(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    title = models.TextField(db_column='Title')  # Field name made lowercase.
    rating = models.IntegerField(db_column='Rating')  # Field name made lowercase.
    preordered = models.BooleanField(db_column='PreOrdered', blank=True, null=True)  # Field name made lowercase.
    comment = models.TextField(db_column='Comment', blank=True, null=True)  # Field name made lowercase.
    excitement = models.TextField(db_column='Excitement', blank=True, null=True)  # Field name made lowercase.
    platform = models.TextField(db_column='Platform')  # Field name made lowercase.
    data_created = models.DateTimeField(db_column='Data_Created', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Video_Games'