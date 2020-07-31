<?php

/**
 * Extension Manager/Repository config file for ext "sitepackage".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Sitepackage',
    'description' => 'team digital Kickstart Sitepackage',
    'category' => 'templates',
    'constraints' => [
        'conflicts' => [
        ],
        'depends' => [
            'gridelements' => '9.0.0-11.0.0'
        ]
    ],
    'autoload' => [
        'psr-4' => [
            'TeamDigital\\Sitepackage\\' => 'Classes',
        ],
    ],
    'state' => 'experimental',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'team digital',
    'author_email' => 'info@team-digital.de',
    'author_company' => 'team digital GmbH',
    'version' => '3.3.0',
];
