# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-03 16:07
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_remove_navpage_nav_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='navpage',
            name='body',
            field=wagtail.wagtailcore.fields.StreamField((('heading', wagtail.wagtailcore.blocks.CharBlock(classname='full title')), ('paragraph', wagtail.wagtailcore.blocks.RichTextBlock())), default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='navpage',
            name='nav_title',
            field=wagtail.wagtailcore.fields.RichTextField(default=''),
        ),
    ]