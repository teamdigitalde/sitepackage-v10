<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
/* * *****************************************************************************
 * New fields
 * **************************************************************************** */

$aNewFields = array(
    'ctrl' => array(
        'requestUpdate' => ''
    ),
    'ausrichtung' => array(
        'exclude' => 1,
        'label' => 'Bildunterschriftsausrichtung',
        'config' => array(
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => [
                ['Links', 'left'],
                ['Mitte', 'center'],
                ['Rechts', 'right'],
            ],
        ),
    ),
);

ExtensionManagementUtility::addTCAcolumns('sys_file_reference', $aNewFields);

// Make field visible in the TCEforms:
ExtensionManagementUtility::addToAllTCAtypes(
    'sys_file_reference', // Table name
    '--palette--;Bildunterschriftsausrichtung;imageoverlayPalette', // Field list to add
    '1'
);

// Feld einer neuen Palette hinzufügen
ExtensionManagementUtility::addFieldsToPalette(
    'sys_file_reference',
    'imageoverlayPalette',
    'ausrichtung'
);
