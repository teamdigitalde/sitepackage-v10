<?php
namespace TeamDigital\Sitepackage\ViewHelpers;

use TYPO3\CMS\Core\Database\DatabaseConnection;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

class TitleViewHelper extends AbstractViewHelper
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
   		$this->registerArgument('title', 'string', 'uid of the author', true);
	}

    public function render()
    {
        $title = $this->arguments['title']. ' - OCULUS Akademie';

        $GLOBALS['TSFE']->altPageTitle = $title;
        $GLOBALS['TSFE']->indexedDocTitle = $title;
        $GLOBALS['TSFE']->page['title'] = $title;
    }
}
