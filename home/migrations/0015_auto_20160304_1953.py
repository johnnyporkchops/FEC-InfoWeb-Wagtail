# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-04 19:53
from __future__ import unicode_literals

from django.db import migrations, models
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0014_auto_20160304_0238'),
    ]

    operations = [
        migrations.AddField(
            model_name='sectionpage',
            name='recent',
            field=wagtail.wagtailcore.fields.RichTextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='sectionpage',
            name='body',
            field=models.CharField(max_length=255),
        ),
    ]
