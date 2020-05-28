// Libs
lib.renderCE = RECORDS
lib.renderCE {
	source.current = 1
	tables = tt_content
}

lib.contentElement.variables.10 = LOAD_REGISTER
lib.contentElement.variables.10.content_uid = TEXT
lib.contentElement.variables.10.content_uid.field = uid
lib.contentElement.settings.media.popup.linkParams.ATagParams.dataWrap = class="{$styles.content.textmedia.linkWrap.lightboxCssClass}" data-gallery="gallery-{register:content_uid}"
lib.contentElement.stdWrap.append = RESTORE_REGISTER

# Neue Layouts Hinzufügen
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
	key.field = layout
	100 = TEXT
	100.value = <div class="example1">|</div>
	200 = TEXT
	200.value = <div class="example2">|</div>
}

/*
### Einbindung headerbild / Headerslider ###
lib.headerslideshow < styles.content.get
lib.headerslideshow {
	select.where = colPos=3
	stdWrap.required = 1
	slide = -1
}
*/

lib.backend_layout = TEXT
lib.backend_layout {
	data = levelfield:-1, backend_layout_next_level, slide
	override.field = backend_layout
}

lib.layoutSwitch < lib.backend_layout
lib.layoutSwitch.wrap = layout|


# BODY-Tag CSS Klasse Seiten PID ###############################
lib.sitepid = COA
lib.sitepid {
	5 = HMENU
	5 {
		special = rootline
		special.range = 1|-1
		includeNotInMenu = 1
		1 = TMENU
		1 {
			NO {
				doNotLinkIt = 1
				doNotShowLink = 0
				allStdWrap.cObject = COA
				allStdWrap.cObject {
					5 = TEXT
					5 {
						field = uid
						noTrimWrap = | uid_| |
					}
				}
			}
		}
	}
}

# Aktuelle SeitenID im Frontend auslesen
lib.currentPid = TEXT
lib.currentPid.value = {TSFE:id}
lib.currentPid.insertData = 1

# Aktuelle Sprache im Frontend auslesen
lib.currentLanguage = TEXT
lib.currentLanguage.value = {TSFE:sys_language_uid}
lib.currentLanguage.insertData = 1

# BODY-Tag erstellen ###############################
lib.bodyTag = COA
lib.bodyTag {
	5 = TEXT
	5.dataWrap = <body id="p{TSFE:id}" class="
	# === insert layout switch (page|backend_layout)
	10 < lib.layoutSwitch
	15 < lib.sitepid
	20 = TEXT
	20.value = ">
}

lib.canonical = TEXT
lib.canonical {
	typolink {
		parameter.cObject = COA
		parameter.cObject {
			5 = TEXT
			5.data = TSFE:page|content_from_pid
			5.if.isTrue.data = TSFE:page|content_from_pid
			10 = TEXT
			10.data = TSFE:id
			10.if.isFalse.data = TSFE:page|content_from_pid
		}

		forceAbsoluteUrl = 1
		returnLast = url
		useCacheHash = 1
		additionalParams < lib.currentUrl.10.typolink.additionalParams
	}

	wrap = <link rel="canonical" href="|" />
}

lib.hreflang = HMENU
lib.hreflang {
	special = language
	special.value = 0,1,2
	1 = TMENU
	1 {
		# Link zu nicht-aktiven Sprachen anzeigen
		NO = 1
		NO {
			stdWrap.cObject = TEXT
			stdWrap.cObject.value = de || en || fr
			linkWrap = <link rel="alternate" hreflang="|
			doNotLinkIt = 1
			after.cObject = TEXT
			after.cObject {
				stdWrap {
					wrap = " href="|" />
					typolink {
						parameter.data = TSFE:id
						returnLast = url
						forceAbsoluteUrl = 0
						additionalParams < lib.currentUrl.10.typolink.additionalParams
						additionalParams.cObject.1 = TEXT
						additionalParams.cObject.1.value = &L=0 || &L=1 || &L=2
					}
				}
			}
		}

		# Link zur gerade aktiven Sprache NICHT anzeigen
		#ACT = 1
		#ACT.doNotShowLink = 1
		# Link zu fehlenden Übersetzungen NICHT anzeigen
		USERDEF1 = 1
		USERDEF1.doNotShowLink = 1
	}

	if.isTrue = {$headerData.hreflang.active}
}

lib.dynamicContent = COA
lib.dynamicContent {
	10 = LOAD_REGISTER
	10 {
		colPos.cObject = TEXT
		colPos.cObject {
			field = colPos
			ifEmpty.cObject = TEXT
			ifEmpty.cObject {
				value.current = 1
				ifEmpty = 0
			}
		}
		pageUid.cObject = TEXT
		pageUid.cObject {
			field = pageUid
			ifEmpty.data = TSFE:id
		}
		contentFromPid.cObject = TEXT
		contentFromPid.cObject {
			data = DB:pages:{register:pageUid}:content_from_pid
			data.insertData = 1
		}
		wrap.cObject = TEXT
		wrap.cObject {
			field = wrap
		}
	}
	20 = CONTENT
	20 {
		table = tt_content
		select {
			includeRecordsWithoutDefaultTranslation = 1
			orderBy = sorting
			where = {#colPos}={register:colPos}
			where.insertData = 1
			pidInList.data = register:pageUid
			pidInList.override.data = register:contentFromPid
		}
		stdWrap {
			dataWrap = {register:wrap}
			required = 1
		}
	}
	30 = RESTORE_REGISTER
}
lib.headerslideshow = COA
lib.headerslideshow {
	10 = LOAD_REGISTER
	10 {
		colPos.cObject = TEXT
		colPos.cObject {
			field = colPos
			ifEmpty.cObject = TEXT
			ifEmpty.cObject {
				value.current = 1
				ifEmpty = 0
			}
		}
		pageUid.cObject = TEXT
		pageUid.cObject {
			field = pageUid
			ifEmpty.data = TSFE:id
		}
		contentFromPid.cObject = TEXT
		contentFromPid.cObject {
			data = DB:pages:{register:pageUid}:content_from_pid
			data.insertData = 1
		}
		wrap.cObject = TEXT
		wrap.cObject {
			field = wrap
		}
	}
	20 = CONTENT
	20 {
		table = tt_content
		select {
			includeRecordsWithoutDefaultTranslation = 1
			orderBy = sorting
			where = {#colPos}=3
			where.insertData = 1
			pidInList.data = register:pageUid
			pidInList.override.data = register:contentFromPid
		}
		stdWrap {
			dataWrap = {register:wrap}
			required = 1
		}
		slide = -1
	}
	30 = RESTORE_REGISTER
}

# Make the PAGE object
page = PAGE
page {
	# Regular pages always have typeNum = 0
	typeNum = 0

	# Add the icon that will appear in front of the url in the browser
	# This icon will also be used for the bookmark menu in browsers
	shortcutIcon = {$filepaths.images}favicon.ico
	bodyTag >
	bodyTagCObject < lib.bodyTag
	10 = FLUIDTEMPLATE
	10 {
		partialRootPath = EXT:sitepackage/Resources/Private/Partials/
		templateRootPath = EXT:sitepackage/Resources/Private/Templates/
		layoutRootPath = EXT:sitepackage/Resources/Private/Layouts/

		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout
			default = TEXT
			default.value = EXT:sitepackage/Resources/Private/Templates/Page/Layout1.html
			pagets__Layout2 = TEXT
			pagets__Layout2.value = EXT:sitepackage/Resources/Private/Templates/Page/Layout2.html
			pagets__Layout3 = TEXT
			pagets__Layout3.value = EXT:sitepackage/Resources/Private/Templates/Page/Layout3.html
			pagets__Layout4 = TEXT
			pagets__Layout4.value = EXT:sitepackage/Resources/Private/Templates/Page/Layout4.html
		}

		# fill the subparts and markers
		variables {
			# Current Pid
			currentPid < lib.currentPid
			currentLanguage < lib.currentLanguage
			backend_layout < lib.backend_layout
			layoutclass < lib.layoutSwitch

			# Insert content as already constructed in TypoScript objects into subparts
			#content_col0 < styles.content.get
			#content_col1 < styles.content.get
			#content_col1.select.where = colPos=1
			#content_col2 < styles.content.get
			#content_col2 {
			#	select.where = colPos=2
			#	stdWrap.required = 1
			#	slide = -1
			#}
		}
		dataProcessing {
			10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
			10 {
				special = directory
				special.value = 1
				levels = 4
				includeSpacer = 1
				as = Mainmenu
			}
			20 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
			20 {
				special = directory
				special.value = 6
				levels = 4
				includeSpacer = 1
				as = Topmenu
			}
			30 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
			30 {
				special = directory
				special.value = 7
				levels = 4
				includeSpacer = 1
				as = Footermenu
			}
			40 = TYPO3\CMS\Frontend\DataProcessing\LanguageMenuProcessor
			40 {
				languages = auto
				as = Languagemenu
			}
			50 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
			50 {
				special = rootline
				special.range = 0|-1
				includeNotInMenu = 1
				as = Breadcrumb
			}
		}
	}

	// FooterData
	footerData {
		5 = COA
		5 {
			5 = TEXT
			5 {
				value = {$headerData.matomo.tracker_url}
				wrap = <noscript><p><img src="|
			}

			10 = TEXT
			10 {
				value = {$headerData.matomo.site_id}
				value = {$headerData.matomo.site_id}
				wrap = piwik.php?idsite=|" style="border:0;" alt="" /></p></noscript>
			}

			stdWrap.if.isTrue = {$headerData.matomo.active}
		}
	}

	// HeaderData
	headerData {
		2 = TEXT
		2.value = <meta name="format-detection" content="telephone=no">
		5 = COA
		5 {
			// Apple touch icons
			5 = IMG_RESOURCE
			5 {
				file = {$filepaths.images}favicon_256.png
				file {
					width = 57c
					height = 57c
				}

				stdWrap.dataWrap = <link rel="apple-touch-icon" sizes="{TSFE:lastImgResourceInfo|0}x{TSFE:lastImgResourceInfo|1}" href="|">
			}

			10 < .5
			10.file {
				width = 76c
				height = 76c
			}

			15 < .5
			15.file {
				width = 114c
				height = 114c
			}

			20 < .5
			20.file {
				width = 152c
				height = 152c
			}

			25 < .5
			25.file {
				width = 180c
				height = 180c
			}

			// ...

			// Android icons
			30 < .5
			30 {
				file {
					width = 16c
					height = 16c
				}

				stdWrap.dataWrap = <link rel="icon" type="image/png" sizes="{TSFE:lastImgResourceInfo|0}x{TSFE:lastImgResourceInfo|1}" href="|">
			}

			35 < .5
			35.file {
				width = 32c
				height = 32c
			}

			40 < .5
			40.file {
				width = 96c
				height = 96c
			}

			45 < .5
			45.file {
				width = 160c
				height = 160c
			}

			50 < .5
			50.file {
				width = 196c
				height = 196c
			}

			// Microsoft Application icons
			55 < .5
			55 {
				file {
					width = 70c
					height = 70c
				}

				stdWrap.dataWrap = <meta name="msapplication-square{TSFE:lastImgResourceInfo|0}x{TSFE:lastImgResourceInfo|1}logo" content="|"/>
			}
		}

		10 = TEXT
		10 {
			value (
			<meta name="geo.region" content="{$meta.geo.region}" />
			<meta name="geo.placename" content="{$meta.geo.placename}" />
			<meta name="geo.position" content="{$meta.geo.position}" />
			<meta name="ICBM" content="{$meta.geo.position}" />
			)
			if.isTrue = {$meta.geo.active}
		}

		#5220 < lib.hreflang
		#5230 < lib.canonical
		# Integrate Google Analytics Tracking
		5300 = COA
		5300 {
			5 = TEXT
			5.value (
	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			)
			10 = TEXT
			10.value = {$headerData.googleAnalytics.id}
			10.wrap = ga('create', '|', 'auto');
			15 = TEXT
			15.value (
	ga('set', 'anonymizeIp', true);
	ga('send', 'pageview');
	</script>
			)
			stdWrap.if.isTrue = {$headerData.googleAnalytics.active}
		}
		5305 = COA
		5305 {
			5 = TEXT
			5.value = <script type="text/javascript">
			10 = TEXT
			10.value = {$headerData.googleAnalytics.id}
			10.wrap = var gaProperty = '|';
			15 = TEXT
			15.value (
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
window[disableStr] = true;
}
function gaOptout() {
document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
window[disableStr] = true;
alert('Das Tracking durch Google Analytics wurde in Ihrem Browser für diese Website deaktiviert.');
} </script>
			)
			stdWrap.if.isTrue = {$headerData.googleAnalytics.active}
		}

		#Integrate Matomo Tracking
		5400 = COA
		5400 {
			5 = TEXT
			5.value (
	<script type="text/javascript">
	var _paq = _paq || [];
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);
	(function() {
			)
			10 = TEXT
			10 {
				value = {$headerData.matomo.tracker_url}
				wrap = var u="|";
			}

			15 = TEXT
			15.value = _paq.push(['setTrackerUrl', u+'piwik.php']);
			20 = TEXT
			20 {
				value = {$headerData.matomo.site_id}
				wrap = _paq.push(['setSiteId', |]);
			}

			25 = TEXT
			25.value (
	var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
	})();
	</script>
			)
			stdWrap.if.isTrue = {$headerData.matomo.active}
		}
	}

	// includeCSS
	includeCSS {
		295 = {$filepaths.css}style.css
		300 = {$filepaths.css}print.css
		300.media = print
	}

	// inlcudeJS
	includeJSLibs {
		modernizr = {$filepaths.scripts}Dist/modernizr-3.2.0-custom.min.js
#		jQuery = //ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js
		jQuery = {$filepaths.scripts}Dist/jquery-2.0.2.min.js
#		jQuery = {$filepaths.scripts}Dist/jquery-3.2.1.min.js
		jQuery {
			external = 1
			excludeFromConcatenation = 1
			disableCompression = 1
		}
	}

	includeJSFooterlibs {
		5 = {$filepaths.scripts}Dist/bootstrap.min.js
		10 = {$filepaths.scripts}Dist/bootstrap-dropdown.js
	}

	includeJSFooter {
		magnificpopup = {$filepaths.scripts}Dist/magnific-popup.min.js
		drilldown = {$filepaths.scripts}Dist/jquery.drilldown.js
		main = {$filepaths.scripts}Src/main.js
	}

	// Meta Data
	meta {
		# If the meta field description in the page properties is filled, then this will override the default.
		description.field = description
		author.field = author
		keywords.field = keywords

		viewport = width=device-width, initial-scale=1.0
		robots = INDEX,FOLLOW,NOODP
		google-site-verification.cObject = TEXT
		google-site-verification.cObject {
			value = {$meta.google-site-verification.value}
			if.isTrue = {$meta.google-site-verification.active}
		}

		# OpenGraph Tags
		og:title {
			attribute = property
			field = title
		}

		og:site_name {
			attribute = property
			data = TSFE:tmpl|setup|sitetitle
		}

		og:description = {$page.meta.description}
		og:description {
			attribute = property
			field = description
		}

		og:image {
			attribute = property
			stdWrap.cObject = FILES
			stdWrap.cObject {
				references {
					data = levelfield:-1, media, slide
				}

				maxItems = 1
				renderObj = COA
				renderObj {
					10 = IMG_RESOURCE
					10 {
						file {
							import.data = file:current:uid
							treatIdAsReference = 1
							width = 1280c
							height = 720c
						}

						stdWrap {
							typolink {
								parameter.data = TSFE:lastImgResourceInfo|3
								returnLast = url
								forceAbsoluteUrl = 1
							}
						}
					}
				}
			}
		}
	}
}

## Über die Condition wird erreicht, dass der Code nur dann ausgeführt wird,
## wenn eine Seite mit der News-Detailansicht aufgerufen ist.
[globalVar = GP:tx_news_pi1|news > 0]
	menu.breadcrumb {
		5.1.NO.doNotLinkIt = 0
		5.1.NO.allWrap = <li class="breadcrumb-item" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li>
		5.1.CUR {
			linkWrap = <li class="cur breadcrumb-item" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li>
			doNotLinkIt = 1
			doNotShowLink = 1
		}

		10 = RECORDS
		10 {
			dontCheckPid = 1
			tables = tx_news_domain_model_news
			source.data = GP:tx_news_pi1|news
			source.intval = 1
			conf.tx_news_domain_model_news = COA
			conf.tx_news_domain_model_news {
				5 = TEXT
				5.field = title
				5.htmlSpecialChars = 1
			}

			wrap = <li class="current last breadcrumb-item" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li>
		}
	}
[end]


// Config
config {
	# Display error messages instead of an unreadable errorcode
	#contentObjectExceptionHandler = 0
	// Administrator settings
	admPanel = {$config.adminPanel}
	debug = {$config.debug}

	doctype = html5

	baseURL >
	absRefPrefix = http://{$config.domain}/

	// Character sets
	renderCharset = utf-8
	metaCharset = utf-8

	// Cache settings
	cache_period = 43200
	sendCacheHeaders = 1

	// URL Settings
	tx_realurl_enable = 1
	simulateStaticDocuments = 0

	// Language Settings
	uniqueLinkVars = 1
	linkVars = L(1-99)
	sys_language_uid = 0
	sys_language_overlay = 1
	sys_language_mode = content_fallback
	language = de
	locale_all = de_DE.UTF-8
	sys_language_isocode_default = de
	htmlTag_langKey = de-DE
	typolinkEnableLinksAcrossDomains = 1

	// Link settings
	# # # # absRefPrefix            = /
	prefixLocalAnchors = all

	// Remove targets from links
	intTarget =
	#extTarget =

	// Indexed Search
	index_enable = 1
	index_externals = 1

	// Code cleaning
	disablePrefixComment = 1

	// Move default CSS and JS to external file
	removeDefaultJS = external
	inlineStyle2TempFile = 1

	pageTitleFirst = 1
	pageTitleSeparator = :
	pageTitleSeparator.noTrimWrap = | | |

	// Protect mail addresses from spamming
	spamProtectEmailAddresses = -3
	#spamProtectEmailAddresses_atSubst = @<span style="display:none;">remove-this.</span>

	// keep file-name
	meaningfulTempFilePrefix = 100

	concatenateCss = 0
	concatenateJs = 0
	compressCss = 0
	compressJs = 0
	headerComment (
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
| TYPO3 Webdesign und Umsetzung by team digital GmbH - www.team-digital.de - Alle Rechte vorbehalten.  |
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	)
}

[globalString = IENV:TYPO3_SITE_URL=https://{$config.domain}/]
	config.absRefPrefix = https://{$config.domain}/
[global]

[globalString = IENV:HTTP_HOST=http://{$config.domainDEV}]
	config.baseURL >
	config.absRefPrefix = http://{$config.domainDEV}/
[global]

## Sprachcondition
/*
[siteLanguage("languageId") == "1"]
	plugin.tx_indexedsearch {
		settings {
			blind {
				languageUid = 1
			}
			defaultOptions {
				languageUid = 1
			}
		}
	}
[global]
*/

@import 'EXT:sitepackage/Configuration/TypoScript/plugins.ts'

## Pfad zur YAML Configuration der EXT:form
plugin.tx_form.settings.yamlConfigurations.100 = EXT:sitepackage/Configuration/Yaml/BaseSetup.yaml
module.tx_form.settings.yamlConfigurations.100 = EXT:sitepackage/Configuration/Yaml/BaseSetup.yaml

lib.contentElement.settings.media.popup {
	linkParams.ATagParams.dataWrap = class="magnificLink" title="{file:current:title}" data-gallery="gallery-{field:uid}"
	directImageLink = 1
	JSwindow = 0
	wrap >
}
