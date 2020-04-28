<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
/* * *****************************************************************************
 * New fields
 * **************************************************************************** */

$aNewFields = array(
    'ctrl' => array(
        'requestUpdate' => ''
    ),
    'space_before_class' => array(
        'exclude' => 1,
        'label' => 'Abstand davor',
        'config' => array(
            'type' => 'input',
            'size' => '20',
            'eval' => 'trim',
            'max' => '80'
        ),
    ),
    'space_after_class' => array(
        'exclude' => 1,
        'label' => 'Abstand danach',
        'config' => array(
            'type' => 'input',
            'size' => '40',
            'eval' => 'trim',
            'max' => '80'
        ),
    ),
);

ExtensionManagementUtility::addTCAcolumns('tt_content', $aNewFields);
