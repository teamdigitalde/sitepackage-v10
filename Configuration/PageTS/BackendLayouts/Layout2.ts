#
# BACKENDLAYOUT: Layout2 - zweisplatig
#
mod.web_layout.BackendLayouts {
    Layout2 {
        title = Layout2
        icon = EXT:sitepackage/Resources/Public/Images/BackendLayouts/grid-head-inhalt-2spaltig.png
        config.backend_layout {
		  colCount = 3
			rowCount = 2
			rows {
                1 {
                    columns {
                        1 {
                            name = Headerbild / Slider
                            colspan = 3
                            colPos = 3
                            allowed = textpic,image,textmedia,shortcut,list
                        }
                    }
                }
                2 {
                    columns {
                        1 {
                            name = Inhalt
                            colspan = 2
                            colPos = 0
                        }
                        2 {
                            name = Rechte Spalte
                            colPos = 2
                        }
                    }
                }
            }
        }
    }
}