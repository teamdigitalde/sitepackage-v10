<?php
namespace TeamDigital\Sitepackage\Form\Fields;

class Text extends \FluidTYPO3\Flux\Form\Field\Text {

    public function getRichtextConfiguration() {
        return 'sitepackage';
    }
}
