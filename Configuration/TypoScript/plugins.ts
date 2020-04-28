lib.gridelements.defaultGridSetup {
	columns {
		default {
			renderObj = COA
			renderObj {
				20 =< tt_content
			}
		}
	}
	cObject =< lib.contentElement
}

plugin.tx_gridelements_pi1 >
tt_content.gridelements_pi1 >
tt_content.gridelements_pi1 =< lib.contentElement
tt_content.gridelements_pi1 {
	# Fluid Styled Content liefert aktuell nur Default
	# Stattdessen muß Generic verwendet werden, weil es kein Default Template gibt
	templateName = Generic
	variables {
		content = COA
		content {
			10 = USER
			10 {
				userFunc = GridElementsTeam\Gridelements\Plugin\Gridelements->main
				setup {
					default < lib.gridelements.defaultGridSetup
					1 < lib.gridelements.defaultGridSetup
					1 {
						cObject {
							templateName = 100
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					2 < lib.gridelements.defaultGridSetup
					2 {
						cObject {
							templateName = 50-50
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					3 < lib.gridelements.defaultGridSetup
					3 {
						cObject {
							templateName = 30-70
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					4 < lib.gridelements.defaultGridSetup
					4 {
						cObject {
							templateName = 70-30
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					5 < lib.gridelements.defaultGridSetup
					5 {
						cObject {
							templateName = 40-60
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					6 < lib.gridelements.defaultGridSetup
					6 {
						cObject {
							templateName = 60-40
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					7 < lib.gridelements.defaultGridSetup
					7 {
						cObject {
							templateName = 33-33-33
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					8 < lib.gridelements.defaultGridSetup
					8 {
						cObject {
							templateName = 25-25-25-25
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					9 < lib.gridelements.defaultGridSetup
					9 {
						cObject {
							templateName = 20-20-20-20-20
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
					10 < lib.gridelements.defaultGridSetup
					10 {
						cObject {
							templateName = Accordion
							templateRootPaths {
								20 = EXT:sitepackage/Resources/Private/Templates/Grids/
							}
						}
					}
				}
			}
		}
	}
}


# Tab Menue
# First define the tab cObject, we want this in the container
tt_content.gridelements_pi1.variables.content.10.setup.uebb_bootstrap_tabs_tab {

	# Add the ID and the Class to the tab container
	preCObject = LOAD_REGISTER
	preCObject {
		containerId.cObject = COA
		containerId.cObject {
			wrap = id="|"
			10 = TEXT
			10.wrap = tab-content-|
				10.field = uid
		}

		containerClasses.cObject = COA
		containerClasses.cObject {
			wrap = class="tab-pane |"

			# fade or empty
			10 = TEXT
			10.field = parentgrid_flexform_switch_effect
			10.noTrimWrap = | | |

			# We want the active flag on the first child
			20 = TEXT
			20.value = active in
			20.noTrimWrap = | | |
			20.if {
				value = 1
				equals.data = cObj:parentRecordNumber
				equals.prioriCalc = 1
			}
		}
	}

	outerWrap = <div {register: containerId} {register: containerClasses} role="tabpanel" aria-labelledby="{containerId}-tab">|</div>
	outerWrap.insertData = 1

	# Render the children the default way
	columns.0 {
		renderObj = < tt_content
	}
}

# Define the Tab Container
tt_content.gridelements_pi1.variables.content.10.setup.uebb_bootstrap_tabs_container {
	# Render navigation using fluid
	cObject = FLUIDTEMPLATE
	cObject {
		file = EXT:sitepackage/Resources/Private/Templates/Grids/Tabcontainer.html
	}

	# Add the renderObj of the tab directly, this prevents the "csc-default"-wrap
	columns.0 {
		renderObj = < tt_content.gridelements_pi1
	}
}
