<?php
namespace TeamDigital\Sitepackage\Domain\Model;


/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2015 Tim Büschken <bueschken@team-digital.de>, team digital GmbH
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

use TYPO3\CMS\Extbase\Persistence\ObjectStorage;

/**
 * Machinery
 */
class Anchor extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {

    /**
     * name
     *
     * @var string
     */
    protected $name = '';

    /**
     * link
     *
     * @var string
     */
    protected $link = '';

    /**
     * pid
     *
     * @var string
     */
    protected $pid = '';

    /**
     * title
     *
     * @var string
     */
    protected $title = '';

    /**
     * untertitle
     *
     * @var string
     */
    protected $untertitle = '';

    /**
     * __construct
     */
    public function __construct() {
        //Do not remove the next line: It would break the functionality
        $this->initStorageObjects();
    }

    /**
     * Initializes all ObjectStorage properties
     * Do not modify this method!
     * It will be rewritten on each save in the extension builder
     * You may modify the constructor of this class instead
     *
     * @return void
     */
    protected function initStorageObjects() {

    }

    /**
     * Returns the name
     *
     * @return string $name
     */
    public function getName() {
        return $this->name;
    }

    /**
     * Sets the name
     *
     * @param string $name
     * @return void
     */
    public function setName($name) {
        $this->name = $name;
    }

    /**
    * Returns the link
    *
    * @return string $link
    */
    public function getLink() {
    	return $this->link;
    }

    /**
    * Sets the link
    *
    * @param string $link
    * @return void
    */
    public function setLink($link) {
    	$this->link = $link;
    }

    /**
    * Returns the pid
    *
    * @return string $pid
    */
    public function getPid() {
    	return $this->pid;
    }

    /**
    * Sets the pid
    *
    * @param string $pid
    * @return void
    */
    public function setPid($pid) {
    	$this->pid = $pid;
    }

    /**
    * Returns the title
    *
    * @return string $title
    */
    public function getTitle() {
    	return $this->title;
    }

    /**
    * Sets the title
    *
    * @param string $title
    * @return void
    */
    public function setTitle($title) {
    	$this->title = $title;
    }

    /**
    * Returns the untertitle
    *
    * @return string $untertitle
    */
    public function getUntertitle() {
    	return $this->untertitle;
    }

    /**
    * Sets the untertitle
    *
    * @param string $untertitle
    * @return void
    */
    public function setUntertitle($untertitle) {
    	$this->untertitle = $untertitle;
    }
}
