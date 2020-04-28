#
# BACKENDLAYOUT: Layout4 - zweisplatig
#
mod.web_layout.BackendLayouts {
    Layout4 {
        title = Layout4 mit Sitebarmenü
        icon = EXT:sitepackage/Resources/Public/Images/BackendLayouts/grid-head-inhalt-2spaltig.png
        config.backend_layout {
            colCount = 3
            rowCount = 3
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
                3 {
                    columns {
                        1 {
                            name = Inhalt Vollflächtig
                            colspan = 3
                            colPos = 4
                        }
                    }
                }
            }
        }
    }
}
