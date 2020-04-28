<?php
namespace TeamDigital\Sitepackage\ViewHelpers;

use TYPO3\CMS\Core\Database\DatabaseConnection;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

class MetaTagViewHelper extends AbstractViewHelper
{
	 /**
     * TYPO3 Database connection
     *
     * @var DatabaseConnection
     */
    protected $databaseConnection;

    /**
     * As this ViewHelper renders HTML, the output must not be escaped.
     *
     * @var bool
     */
    protected $escapeOutput = false;

	public function initializeArguments()
	{
   		$this->registerArgument('property', 'string', 'uid of the author', true);
   		$this->registerArgument('content', 'string', 'uid of the author', true);
	}

    public function render()
    {
        $property = $this->arguments['property'];
        $content = $this->arguments['content'];

        $GLOBALS['TSFE']->additionalHeaderData[] = '<meta property="'.$property.'" content="'.strip_tags($content).'"/>';

//        return '';
    }
}
