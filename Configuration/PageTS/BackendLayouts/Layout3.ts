#
# BACKENDLAYOUT: Layout3 - dreisplatig
#
mod.web_layout.BackendLayouts {
            Layout3 {
                title = Layout3
                icon = EXT:sitepackage/Resources/Public/Images/BackendLayouts/grid-head-3spaltig.png
                config.backend_layout {
                        colCount = 5
                        rowCount = 2
							rows {
								1 {
                                    columns {
                                        1 {
                                            name = Headerbild / Slider
                                            colspan = 5
                                            colPos = 3
                                            allowed = textpic,image,textmedia,shortcut,list
                                        }
                                    }
                                }
                                2 {
                                    columns {
                                        1 {
                                            name = Linke Spalte
                                            colPos = 1
                                        }
                                        2 {
                                            name = Inhalt
                                            colspan = 3
                                            colPos = 0
                                        }
                                        3 {
                                            name = Rechte Spalte
                                            colPos = 2
                                        }
                                    }
                                }
                            }
                }
            }
}