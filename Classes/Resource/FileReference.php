<?php
namespace TeamDigital\Sitepackage\Resource;

/**
 * FileReference
 */
class FileReference extends \TYPO3\CMS\Core\Resource\FileReference {

    /**
     * Returns the title text to this image
     *
     * @todo Possibly move this to the image domain object instead
     *
     * @return string
     */
    public function getAusrichtung()
    {
        return $this->getProperty('ausrichtung');
    }

}
