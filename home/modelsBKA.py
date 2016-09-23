from __future__ import unicode_literals

from django.db import models

from wagtail.wagtailcore.models import Page, Orderable
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.blocks import StreamBlock
from wagtail.wagtailadmin.edit_handlers import FieldPanel, MultiFieldPanel, InlinePanel, StreamFieldPanel
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailcore.blocks import RawHTMLBlock, TextBlock, CharBlock
from wagtail.wagtailcore import blocks
from wagtail.wagtailsearch import index

#reusable content block-jc

class InfowebStreamBlock(StreamBlock):
    panel = blocks.RawHTMLBlock()
    add_script = blocks.RawHTMLBlock()
   

class HomePage(Page):
    pass



class SectionPage(Page):

    # Database fields
    category = StreamField([
        ('cat_title_class', blocks.CharBlock(classname="full")),
        ('cat_title', blocks.CharBlock(classname="full"))
        
    ])

    body = StreamField(InfowebStreamBlock())
    recently = models.TextField()
    date = models.DateField("Post date")
    feed_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    
       

    # Search index configuraiton

    search_fields = Page.search_fields + (
        index.SearchField('body'),
        index.FilterField('date'),
    )


    # Editor panels configuration

    content_panels = Page.content_panels + [
        StreamFieldPanel('category'),
        StreamFieldPanel('body'),
        FieldPanel('date'),
        FieldPanel('recently', classname="full"),
    ]

    promote_panels = [
        MultiFieldPanel(Page.promote_panels, "Common page configuration"),
        ImageChooserPanel('feed_image'),
    ]


    # Parent page / subpage type rules
    subpage_types = ['NavPage']
    



class NavPage(Page):

    # Database fields
    nav_title=RichTextField(default='')
    body = StreamField([
        ('heading', blocks.CharBlock(classname="full title")),
        ('paragraph', blocks.RawHTMLBlock())
        
    ])
    date = models.DateField("Post date")
    feed_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )


    # Search index configuraiton

    search_fields = Page.search_fields + (
       index.SearchField('body'),
       index.FilterField('date'),
    )


    # Editor panels configuration

    content_panels = Page.content_panels + [
        FieldPanel('nav_title'),
        FieldPanel('date'),
        StreamFieldPanel('body'),
       
    ]

    promote_panels = [
        MultiFieldPanel(Page.promote_panels, "Common page configuration"),
        ImageChooserPanel('feed_image'),
    ]


     # Parent page / subpage type rules

    parent_page_types = ['SectionPage']
   

   
