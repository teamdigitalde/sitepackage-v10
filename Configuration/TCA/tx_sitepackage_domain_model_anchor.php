<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}
$GLOBALS['TCA']['tx_sitepackage_domain_model_anchor'] = array(
    'ctrl' => array(
        'title' => 'Team Digital Anchors',
        'label' => 'name',
        'tstamp' => 'tstamp',
        'crdate' => 'crdate',
        'cruser_id' => 'cruser_id',
        'dividers2tabs' => true,
        'sortby' => 'sorting',
        'requestUpdate' => 'type',
        'versioningWS' => 2,
        'versioning_followPages' => true,
        'languageField' => 'sys_language_uid',
        'transOrigPointerField' => 'l10n_parent',
        'transOrigDiffSourceField' => 'l10n_diffsource',
        'delete' => 'deleted',
        'enablecolumns' => array(
            'disabled' => 'hidden',
        ),
        'searchFields' => 'name,',
        'typeicon_classes' => [
            'default' => 'ext-bootstrapslider-image'
        ],
    ),
    'interface' => array(
        'showRecordFieldList' => 'sys_language_uid, l10n_parent, l10n_diffsource, hidden, name, link, title, untertitle',
    ),
    'types' => array(
        '1' => array(
            'showitem' => 'l10n_diffsource, hidden;;1, name, untertitle, link, title'
        ),
    ),
    'palettes' => array(
        '1' => array('showitem' => 'hidetitle, hidedescription'),
    ),
    'columns' => array(
        'hidden' => array(
            'exclude' => 0,
            'label' => 'Datensatz ausblenden?',
            'config' => array(
                'type' => 'check',
                'items' => array(
                    '1' => array(
                        '0' => 'LLL:EXT:cms/locallang_ttc.xlf:hidden.I.0'
                    )
                )
            )
        ),
        'starttime' => array(
            'exclude' => 0,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.starttime',
            'config' => array(
                'type' => 'input',
                'size' => '13',
                'max' => '20',
                'eval' => 'datetime',
                'default' => '0'
            ),
            'l10n_mode' => 'exclude',
            'l10n_display' => 'defaultAsReadonly'
        ),
        'endtime' => array(
            'exclude' => 0,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.endtime',
            'config' => array(
                'type' => 'input',
                'size' => '13',
                'max' => '20',
                'eval' => 'datetime',
                'default' => '0',
                'range' => array()
            ),
            'l10n_mode' => 'exclude',
            'l10n_display' => 'defaultAsReadonly'
        ),
        'sys_language_uid' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.language',
            'config' => array(
                'readOnly' => true,
                'type' => 'select',
                'foreign_table' => 'sys_language',
                'foreign_table_where' => 'ORDER BY sys_language.title',
                'items' => array(
                    array(
                        'LLL:EXT:lang/locallang_general.xlf:LGL.allLanguages',
                        -1
                    ),
                    array(
                        'LLL:EXT:lang/locallang_general.xlf:LGL.default_value',
                        0
                    )
                )
            )
        ),
        'l10n_parent' => Array(
            'displayCond' => 'FIELD:sys_language_uid:>:0',
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.php:LGL.l18n_parent',
            'config' => Array(
                'type' => 'select',
                'items' => Array(
                    Array('', 0),
                ),
                'foreign_table' => 'tx_sitepackage_domain_model_anchor',
                'foreign_table_where' => 'AND tx_sitepackage_domain_model_anchor.uid=###REC_FIELD_l10n_parent### AND tx_sitepackage_domain_model_anchor.sys_language_uid IN (-1,0)',
            )
        ),
        'l10n_diffsource' => Array(
            'config' => array(
                'type' => 'passthrough'
            )
        ),
        'name' => array(
            'exclude' => 0,
            'label' => 'Navigationstitel',
            'config' => array(
                'type' => 'input',
                'size' => '40',
                'max' => '40'
            ),
        ),
        'link' => [
        	'label' => 'Link',
        	'config' => [
        		'type' => 'input',
        		'renderType' => 'inputLink',
        	],
        ],
        'title' => [
        	'label' => 'Linktitle',
        	'config' => [
        		'type' => 'input',
        		//'renderType' => 'inputLink',
        	],
        ],
        'untertitle' => [
        	'label' => 'Untertitle',
        	'config' => [
        		'type' => 'input',
        		//'renderType' => 'inputLink',
        	],
        ],
    )
);
