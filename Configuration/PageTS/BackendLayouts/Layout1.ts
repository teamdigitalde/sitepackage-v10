#
# BACKENDLAYOUT: DEFAULT layout1 - einspaltig
#
mod.web_layout.BackendLayouts {
    Layout1 {
        title = Layout1
        icon = EXT:sitepackage/Resources/Public/Images/BackendLayouts/grid-head-inhalt.png
        config.backend_layout {
            colCount = 1
            rowCount = 2
			rows {
                1 {
				    columns {
					   1 {
                           name = Headerbild / Slider
                           colPos = 3
                           allowed = textpic,image,textmedia,shortcut,list
                       }
                    }
                }
                2 {
                    columns {
                        1 {
                            name = Inhalt
                            colPos = 0
                        }
                    }
                }
            }
        }
    }
}
