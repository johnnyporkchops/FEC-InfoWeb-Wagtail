# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-03 20:35
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_auto_20160303_1607'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navpage',
            name='body',
            field=wagtail.wagtailcore.fields.StreamField((('heading', wagtail.wagtailcore.blocks.CharBlock(classname='full title')), ('paragraph', wagtail.wagtailcore.blocks.RawHTMLBlock()))),
        ),
    ]
