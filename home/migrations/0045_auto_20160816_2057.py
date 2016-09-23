# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-08-16 20:57
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0044_auto_20160814_1908'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agendapage',
            name='agenda',
            field=wagtail.wagtailcore.fields.StreamField((('agenda_item', wagtail.wagtailcore.blocks.StreamBlock((('item_title', wagtail.wagtailcore.blocks.TextBlock()), ('item_content', wagtail.wagtailcore.blocks.StructBlock((('item_text', wagtail.wagtailcore.blocks.TextBlock()), ('mtg_doc', wagtail.wagtailcore.blocks.StructBlock((('doc_description', wagtail.wagtailcore.blocks.TextBlock()), ('doc_link', wagtail.wagtailcore.blocks.TextBlock())))))))))),)),
        ),
    ]