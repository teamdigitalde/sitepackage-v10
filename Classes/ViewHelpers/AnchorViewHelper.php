<?php
namespace TeamDigital\Sitepackage\ViewHelpers;

use TYPO3\CMS\Core\Database\DatabaseConnection;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class AnchorViewHelper extends AbstractViewHelper
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

    /**
     * AnchorRepository
     *
     * @var \TeamDigital\Sitepackage\Domain\Repository\AnchorRepository
     * @TYPO3\CMS\Extbase\Annotation\Inject
     */
    protected $anchorRepository = NULL;


	public function initializeArguments()
	{
   		$this->registerArgument('pid', 'integer', 'Pid', true);
	}

    public function render()
    {
        $pid = $this->arguments['pid'];

        $anchors = $this->anchorRepository->findByPid($pid);

        return $anchors;
    }
}
