<?php
defined('TYPO3_MODE') || die();

call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 'sitepackage';

    /**
     * Default PageTS for team digital Kickstart EXT
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/PageTS/page.ts',
        'team digital Kickstart'
    );
});

$GLOBALS['TCA']['pages']['ctrl']['requestUpdate'] = 'onepager';
$aNewFields = array(
    'onepager' => [
        'exclude' => 1,
        'onChange' => 'reload',
        'label' => 'Seite als OnePager anzeigen?',
        'config' => [
            'type' => 'check',
            'items' => [
                ['Ja', 1],
            ],
            'cols' => '1',
        ],
    ],
    'onepagerclass' => [
    	'label' => 'Bodyclass',
    	'config' => [
    		'type' => 'input',
    		//'renderType' => 'inputLink',
    	],
    ],
    'opanchors' => array(
        'exclude' => 0,
        'label' => 'Link',
        'config' => array(
            'type' => 'inline',
            'foreign_table' => 'tx_sitepackage_domain_model_anchor',
            'foreign_field' => 'pages',
            'foreign_sortby' => 'sorting',
            'maxitems' => 200,
            'minitems' => 0,
            'behaviour' => array(
                'localizationMode' => 'select',
                'localizeChildrenAtParentLocalization' => true,
            ),
            'appearance' => array(
                /* @todo locallang */
                'createNewRelationLinkTitle' => 'Hinzufügen',
                'newRecordLinkTitle' => 'Hinzufügen',
                'showPossibleLocalizationRecords' => 1,
                'showRemovedLocalizationRecords' => 1,
                'showAllLocalizationLink' => 1,
                'showSynchronizationLink' => 1,
                'useSortable' => true,
                'enabledControls' => array(
                    'info' => false,
                    'new' => true,
                    'dragdrop' => true,
                    'sort' => true,
                    'hide' => true,
                    'delete' => true,
                    'localize' => true,
                ),
            ),
        ),
    ),
    'opfrom' => [
        'label' => 'OnePager Menü von Seite',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectTree',
            'foreign_table' => 'pages',
            'size' => 20,
            'maxitems' => 1,
            'treeConfig' => [
                'parentField' => 'pid',
                'appearance' => [
                    'expandAll' => true,
                    'showHeader' => true,
                ],
            ],
//            'foreign_table_where' => 'AND {#tx_styleguide_staticdata}.{#value_1} LIKE \'%foo%\' ORDER BY uid',
//            'foreign_table_prefix' => 'A prefix: ',
        ],
    ],
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $aNewFields);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'pages',
    $aNewFields,
    1
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'pages',
    '--div--;OnePager, onepager, opfrom, onepagerclass, opanchors'
);
