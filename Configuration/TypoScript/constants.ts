##############################
#### FLUID STYLED CONTENT ####
##############################
# Pfad zu den Fluid Templates
styles.templates {
  # cat=content/templates/b1; type=string; label= Path of Fluid Templates for all defined content elements
  templateRootPath = EXT:sitepackage/Resources/Private/Templates/ContentElements/
  # cat=content/templates/b2; type=string; label= Path of Fluid Partials for all defined content elements
  partialRootPath = EXT:sitepackage/Resources/Private/Partials/ContentElements/
  # cat=content/templates/b3; type=string; label= Path of Fluid Layouts for all defined content elements
  layoutRootPath = EXT:sitepackage/Resources/Private/Layouts/ContentElements/
}

config {
  # cat=config; type=boolean; label=Admin Panel: Turn on admin panel (mainly for testing purposes only)
  adminPanel = 0

  # cat=config; type=boolean; label=Debugging: Turn on debugging (testing purposes only)
  debug = 0

  #cat=config; type=string; label=Domain name for Base URL: (excluding slashes and protocol like http://)
  domain = installscript.tim-bueschken.de
}
#[globalString = IENV:HTTP_HOST=baseurl2-anpassen.de]
#  config.domain = baseurl2-anpassen.de
#[global]

filepaths {
  # cat=filepaths; type=string; label=HTML Templates: Location of the (X)HTML templates relative to site
  templates = EXT:sitepackage/Resources/Private/Templates/Page/

  # cat=filepaths; type=string; label=Partials Templates: Location of the (X)HTML templates relative to site
  partials = EXT:sitepackage/Resources/Private/Partials/Page/

  # cat=filepaths; type=string; label=Layouts Templates: Location of the (X)HTML templates relative to site
  layouts = EXT:sitepackage/Resources/Private/Layouts/Page/

  # cat=filepaths; type=string; label=CSS: Location of the Cascading Style Sheets relative to site
  css = EXT:sitepackage/Resources/Public/Css/

  # cat=filepaths; type=string; label=Images: Location of the images relative to site
  images = EXT:sitepackage/Resources/Public/Images/

  # cat=filepaths; type=string; label=Scripts: Location of the Javascript files relative to site
  scripts = EXT:sitepackage/Resources/Public/JavaScript/
}

menu {
  # cat=navigation menus; type=string; label= Top-menu pages: Comma separated list of page id's to be included in top-right menu.
  top.pages = 6
  # cat=navigation menus; type=string; label= Footer-menu pages: Comma separated list of page id's to be included in footer menu.
  footer.pages = 6
}

styles.content {
  # Überschrift H1
  defaultHeaderType = 1

  # This defines the maximum width of images inserted in content records of type Images or Text-with-images.
  # There are seperate settings for images floated next to text (..InText)
  textmedia {
    maxW = 1140
    maxWInText = 1140
    borderWidth = 1
    borderColor = #ccc
    linkWrap.newWindow = 1
	linkWrap.width =
	linkWrap.height =
  }
  uploads {
    jumpurl_secure = 1
    jumpurl_secure_mimeTypes = pdf=application/pdf, doc=application/msword
    jumpurl = 1
  }
}
styles.content.textmedia.linkWrap {
  lightboxEnabled = 1
  lightboxRelAttribute = gallery-{field:uid}
  lightboxCssClass = magnificLink
}

# some domainspecific values
meta {
	google-site-verification {
  	active = 0
  	value =
	}
	geo {
		active = 0
		region = DE-HE
		placename = Lauterbach
		position = 50.63;9.39
	}
}
headerData {
  hreflang.active = 0
  googleAnalytics {
    active = 0
    id = UA-123456789-1
  }
  matomo {
    active = 0
    site_id = 1
    # be aware of leading and trailing slashes!
    tracker_url = //piwik.example.com/
  }
}

lib.currentUrl= COA
lib.currentUrl {
  10 = TEXT
  10.typolink {
    parameter.data = TSFE:id
    returnLast = url
    forceAbsoluteUrl = 1
    useCacheHash = 1
    additionalParams.cObject = COA
    additionalParams.cObject {
      #EXT:news
      100 = TEXT
      100.dataWrap = &tx_news_pi1[news]={GP:tx_news_pi1|news}
      100.if.isTrue.data = GP:tx_news_pi1|news
      110 = TEXT
      110.dataWrap = &tx_news_pi1[controller]={GP:tx_news_pi1|controller}
      110.if.isTrue.data = GP:tx_news_pi1|controller
      120 = TEXT
      120.dataWrap = &tx_news_pi1[action]={GP:tx_news_pi1|action}
      120.if.isTrue.data = GP:tx_news_pi1|action
    }
  }
}
