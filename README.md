# Niu-X2

Niu-X2 is a responsive theme for pelican, built with bootstrap3 and font-awesome.

As I am pretty new to bootstrap and jinja2, the codes look messy and may be buggy. If you find any bugs, please let me know.

## License

BSD 3-Clause License. Please see LICENSE.txt for more details.

## Demo

![Demo image of niu-x2 theme](https://raw.github.com/mawenbao/niu-x2/master/screenshot.png "niu-x2 demo image")

## Features

*  Bootstrap3.0.0, font-awesome3.2.1 and jQuery1.10 included.
*  Responsive. 
*  Disqus, duoshuo, google analytics and google custom search support.
*  Pagination bar with customizable length. 
*  Tagcloud implemented with [tagcloud.js](https://code.google.com/p/tagcloud) which supports incremental search.
*  Collapsible monthly archives.
*  Auto-generated copyright year range, which is actually from the year of your first article to the lastest.
*  Fixed position navigation bar.
*  TOC(table of contents) in navigation bar with the help of [extract_headings](https://github.com/wilbur-ma/extract_headings) plugin, with no addtional dependencies and no `[TOC]` in your markdown file. (Currently only markdown is supported)
*  TOC(table of contents) in a sidebar.
*  Article/Page comment on/off controled by file metadata.
*  Pygments theme support.
*  Categories shown in a dropdown list.
*  Category aliases, which should be useful when you set `USE_FOLDER_AS_CATEGORY` to `True`.
*  Custom dropdown menu, footer links and footer icons through pelican configuration with font-awesome icons.
*  Custom 404 page.
*  Translations through pelican configuration.

## Usage

If you are hosting your pelican site locally, please remeber to set the `SITEURL` variable empty in your pelican configuration, otherwise the theme will not be able to find the css and js static files correctly. 

For more theme related configurations, please refer to `Theme settings` section below.

First clone the repository:

    git clone https://github.com/wilbur-ma/niu-x2

Then set `THEME` variable to the path of the repository folder you have just cloned in your pelican configuration.

    THEME = ~/repo/niu-x2

The theme depends on the jinja2 `expression statement` extension which should be added to your pelican configuration as below:

    JINJA_EXTENSIONS = ['jinja2.ext.ExprStmtExtension',]

## Sidebar TOC
Please use the `sidebar-toc` branch.

    cd niu-x2
    git co sidebar-toc

## TODO

1. Better SEO support.

## Global pelican settings

Currently the following pelican configuration variables are supported:

*  `DISQUS_SITENAME` is your disqus site ID.
*  `GOOGLE_ANALYTICS` is your Google analytics ID.

## Custom css

You can define custom css codes in `niu-x2/static/css/custom.css`, and they will be available to all the templates.

## Theme settings

Note that:

*  All the following theme configuration variables are optional.
*  All the icons come from font awesome. You can find the icon class name [here](http://fortawesome.github.io/Font-Awesome/icons/).

### Enable/Disable comments

The theme enables comments for all the articles and pages by default. However you can disable comments for some particular articles or pages by setting `Comment` metadata to any value other than `on`, e.g.:

    Title: An Article With No Comments
    Date: 2013-09-09 21:38:00
    Comment: off

### Custom 404

*  `NIUX2_404_TITLE_TRANSL` string(default "ERROR 404 Page Not Found!"), title of the 404 page
*  `NIUX2_404_INFO_TRANSL` string(default "The requested url was not found!"), warning infomation on the 404 page

You should add the following setting to your pelican configuration.

    TEMPLATE_PAGES = {
        "404.html": "404.html",
    }

### Pygments theme

First make sure you have enabled the `codehilite` markdown extension(pelican enables it by default). Then you can pick you favorite theme
in the `static/css/pygments` folder. Currently all the theme css files come from the [pygments-css](https://github.com/richleland/pygments-css) repository. At last you should set the `NIUX2_PYGMENTS_THEME` variable to the file name of the theme with no .css extension at the end. For example:

    NIUX2_PYGMENTS_THEME = 'borland'

If `NIUX2_PYGMENTS_THEME` is not set, niu-x2 uses `github` theme by default.

### Google custom search engine

*  `NIUX2_GOOGLE_CSE_ID` is your your google custom [search engine id](http://support.google.com/customsearch/bin/answer.py?hl=en&answer=2649143).
*  `NIUX2_SEARCH_TRANSL` is the search text displayed in header bar, which is "Search" by default.
*  `NIUX2_SEARCH_PLACEHOLDER_TRANSL` is the placeholder of your search box, which is "Press enter to search ..." by default. 

The css codes above will set the width of your search box to 200px.

#### Limitations

Currently, there is not a search result page in this theme, so I suggest that you display the search results in a Google-hosted page. 

### Category aliases

`NIUX2_CATEGORY_MAP` is a dictionary of category aliases, of which each item follows the format `original name: (display name, icon class)`, if you do not want a icon, just leave the icon class empty. e.g.:

    NIUX2_CATEGORY_MAP = {
        "code": ("代码", "icon-code")
        "note": ("笔记", ""),
    }

### Navigation bar

`NIUX2_HEADER_SECTIONS` is a list of links displayed on the fixed position navigation bar. Each link element is a tuple with the format `(link value, link title, link href, icon class)` e.g.:

    NIUX2_HEADER_SECTIONS = [ 
         ("关于", "about", "/about.html", "icon-anchor"),
         ("存档", "archives", "/archives.html", "icon-archive"),
         ("标签", "tags", "/tag/", "icon-tag"),
    ]

`NIUX2_HEADER_DROPDOWN_SECTIONS` is a dictionary of dropdown menu. The key is a tuple with the format `(display name, icon class)`, and the corresponding value is actually a `NIUX2_HEADER_SECTIONS` list, e.g.:

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

`NIUX2_FOOTER_ICONS` is a list of icon links shown in the footer section. Each element follows the format `(icon class, link title, link href)`, e.g.:

    NIUX2_FOOTER_ICONS = [
         ("icon-envelope-alt", "my email address", "mailto: wilbur.ma@foxmail.com"),
         ("icon-github-alt", "my github page", "http://github.com/wilbur-ma"),
         ("icon-rss", "subscribe my blog via rss", "http://mawenbao.com/feed.xml"),
         ]

### Translation settings

*  `NIUX2_404_TITLE_TRANSL` string(default "ERROR 404 Page Not Found!"), title of the 404 page
*  `NIUX2_404_INFO_TRANSL` string(default "The requested url was not found!"), warning infomation on the 404 page
*  `NIUX2_TAG_TRANSL` string(default "Tag"), translation of tag
*  `NIUX2_ARCHIVE_TRANSL` string(default "Archive"), translation of archive
*  `NIUX2_CATEGORY_TRANSL` string(default "Category"), translation of category
*  `NIUX2_TAG_CLEAR_TRANSL` string(default "clear"), name of clear button on the tags page
*  `NIUX2_TAG_FILTER_TRANSL` string(default "filter tags"), placeholder of the tag_filter input on the tags page
*  `NIUX2_HEADER_TOC_TRANSL` string(default "TOC"), name of the categories dropdown menu
*  `NIUX2_SEARCH_TRANSL` string(default "Search"), name displayed for google cse in the header bar
*  `NIUX2_SEARCH_PLACEHOLDER_TRANSL` string(default "Press enter to search ..."), placeholder of the header search box
*  `NIUX2_COMMENTS_TRANSL` string(default "Comments"), translation of comments
*  `NIUX2_PUBLISHED_TRANSL` string(default "Published"), translation of publish date
*  `NIUX2_LASTMOD_TRANSL` string(default "Last modified"), translation of last modified label, need pelican update_date plugin support
*  `NIUX2_RECENT_UPDATE_TRANSL` string(default "Recent Updated Posts"), translation of recent updated posts

### Misc settings

*  `NIUX2_RECENT_UPDATE_NUM` int(default 10), number of your recent updated posts in the sidebar, require [pelican-update-date](https://github.com/mawenbao/pelican-update-date) plugin
*  `NIUX2_PAGINATOR_LENGTH` int(default 11), the length of your pagination bar
*  `NIUX2_FAVICON_URL` string(default "/favicon.png"), your favicon url
*  `NIUX2_FOOTER_LINKS` a `NIUX2_HEADER_SECTIONS` format list shown right after your copyright info in the footer section
*  `NIUX2_DISPLAY_TITLE` boolean(default True), whether to display the title of article and page
*  `NIUX2_DUOSHUO_SHORTNAME` string(default None), your duoshuo shortname. Note that if `DISQUS_SITENAME` is set, duoshuo will not be loaded.
*  `NIUX2_LIB_THEME` string(default SITEURL+'/theme'), url of niu-x2 theme root
*  `NIUX2_LIB_FONTAWESOME` string(default '//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1'), url of font-awesome
*  `NIUX2_LIB_BOOTSTRAP_JS` string(default 'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min.js'), url of bootstrap javascript
*  `NIUX2_LIB_JQUERY` string(default 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js'), url of jquery


