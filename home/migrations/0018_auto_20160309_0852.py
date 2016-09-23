# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-09 08:52
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0017_sectionpage_add_script'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sectionpage',
            name='add_script',
            field=wagtail.wagtailcore.fields.StreamField((('script', wagtail.wagtailcore.blocks.RawHTMLBlock()),)),
        ),
    ]
