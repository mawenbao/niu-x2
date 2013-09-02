# Niu-X2

Niu-X2 is a responsive theme for pelican, built with bootstrap3 and font-awesome. This
theme is implemented in a hurry and I am pretty new to bootstrap and jinja2, so the codes
look messy and may be bugy. If you find any bugs, please let me know.

## License

BSD 3-Clause License. Please see LICENSE.txt for more details.

## Demo

You can check out my blog [atime.me](http://atime.me) for a live demo.

## Usage

If you are hosting your pelican site locally, please remeber to set the `SITEURL` variable empty in your pelican configuration, otherwise the theme will not be able to find the css and js static files correctly. 

For more theme related configurations, please refer to `Theme settings` section below.

First clone my theme:

    git clone https://github.com/wilbur-ma/niu-x2

Then set `THEME` variable to the path of the repository folder you have just cloned in your pelican configuration.

    THEME = ~/repo/niu-x2

## Features

*  Bootstrap3.0.0 and font-awesome3.2.1 included.
*  Responsive(should be). 
*  Fixed position navigation bar.
*  Show toc(table of contents) on navigation bar with the [extract_headings](https://github.com/wilbur-ma/extract_headings) plugin, no addtional dependencies and no `[TOC]` in your markdown file. (Currently only markdown is supported)
*  Categories show in a dropdown menu on the header bar.
*  Pagination bar with customizable length. 
*  Tagcloud implemented with [tagcloud.js](https://code.google.com/p/tagcloud) which supports incremental search.
*  Collapsible monthly archives.
*  Define your own dropdown menu, footer links or footer icons through pelican configuration with font-awesome icons.
*  Category aliases, which should be useful when you set `USE_FOLDER_AS_CATEGORY` to `True`.
*  Auto-generated copyright year range, which is actually from the year of your first article to the lastest.

## TODO

1. Integrate google custom search into the theme.
2. Better SEO support.

## Custom css

You can define custom css codes in `niu-x2/static/css/custom.css`, and they will be available to all the templates.

## Global pelican settings

Currently the following pelican configuration variables are supported:

*  DISQUS_SITENAME
*  GOOGLE_ANALYTICS

## Theme settings

Note that:

*  All the following theme configuration variables are optional.
*  All the icons come from font awesome. You can find the icon class name [here](http://fortawesome.github.io/Font-Awesome/icons/).

### Category aliases

NIUX2_CATEGORY_MAP is a dictionary of category aliases, of which each item follows the format `orig name: ("display name", "icon class")`, if you do not want a icon, just leave the icon class empty. e.g.:

    NIUX2_CATEGORY_MAP = {
        "code": ("代码", "icon-code")
        "note": ("笔记", ""),
    }

### Navigation bar

NIUX2_HEADER_SECTIONS is a list of links displayed on the fixed position navigation bar. Each link element is a tuple with the format `(link value, link title, link href, icon class)` e.g.:

    NIUX2_HEADER_SECTIONS = [ 
         ("关于", "about", "/about.html", "icon-anchor"),
         ("存档", "archives", "/archives.html", "icon-archive"),
         ("标签", "tags", "/tag/", "icon-tag"),
    ]

NIUX2_HEADER_DROPDOWN_SECTIONS is a dictionary of dropdown menu. The key is a tuple with the format `(display name, icon class)`, and the corresponding value is actually a `NIUX2_HEADER_SECTIONS` list, e.g.:

    NIUX2_HEADER_DROPDOWN_SECTIONS = [
        ("custom drop down", "icon-archive"): [
            ("关于", "about", "/about.html", "icon-anchor"),
            ("存档", "archives", "/archives.html", "icon-archive"),
            ],
        ("custom drop down2", "icon-folder-open"): [
            ("标签", "tags", "/tag/", "icon-tag"),
            ],
    ]

### Footer icons

NIUX2_FOOTER_ICONS is a list of icon links shown in the footer section, floated right. Each element follows the format `(icon class, link title, link href)`, e.g.:

    NIUX2_FOOTER_ICONS = [
         ("icon-envelope-alt", "my email address", "mailto: wilbur.ma@foxmail.com"),
         ("icon-github-alt", "my github page", "http://github.com/wilbur-ma"),
         ("icon-rss", "subscribe my blog via rss", "http://atime.me/feed.xml"),
         ]

### Translation settings

*  NIUX2_TAG_NAME: string(default "Tag"), translation of tag
*  NIUX2_ARCHIVE_NAME: string(default "Archive"), translation of archive
*  NIUX2_CATEGORY_NAME: string(default "Category"), translation of category
*  NIUX2_TAG_CLEAR_NAME: string(default, "clear"), name of clear button on the tags page
*  NIUX2_TAG_FILTER_NAME: string(default, "filter tags"), placeholder of the tag_filter input on the tags page

### Misc settings

*  NIUX2_PAGINATOR_LENGTH: int(default 11), the length of your pagination bar
*  NIUX2_FAVICON_URL: string(default "/favicon.png"), your favicon url
*  NIUX2_HEADER_TOC_NAME: string(default "TOC"), display name of your category dropdown menu
*  NIUX2_FOOTER_LINKS: a `NIUX2_HEADER_SECTIONS` format list shown right after your copyright info in the footer section.

