# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-04 02:38
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0013_sectionpage_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sectionpage',
            name='cat_title',
        ),
        migrations.RemoveField(
            model_name='sectionpage',
            name='cat_title_class',
        ),
    ]
