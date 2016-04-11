/**
 * @fileoverview Settings screen for the Coding with Chrome editor.
 *
 * @license Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */

goog.provide('cwc.ui.SettingScreen');

goog.require('cwc.soy.ui.SettingScreen');
goog.require('cwc.utils.Helper');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.soy');
goog.require('goog.ui.Component.EventType');
goog.require('goog.ui.Option');
goog.require('goog.ui.Select');
goog.require('goog.ui.Zippy');



/**
 * @param {!cwc.utils.Helper} helper
 * @constructor
 * @struct
 */
cwc.ui.SettingScreen = function(helper) {
  /** @type {string} */
  this.name = 'SettingsScreen';

  /** @type {Element} */
  this.node = null;

  /** @type {string} */
  this.prefix = 'setting-screen-';

  /** @type {!cwc.utils.Helper} */
  this.helper = helper;
};


/**
 * Decorates the given node and adds the settings.
 * @param {Element} node The target node to add the settings.
 * @param {string=} opt_prefix Additional prefix for the ids of the
 *    inserted elements and style definitions.
 */
cwc.ui.SettingScreen.prototype.decorate = function(node, opt_prefix) {
  this.node = node;
  this.prefix = opt_prefix + this.prefix;

  goog.soy.renderElement(
      this.node,
      cwc.soy.ui.SettingScreen.template,
      {'prefix': this.prefix}
  );

  goog.style.installStyles(
      cwc.soy.ui.SettingScreen.style({ 'prefix': this.prefix })
  );
};


/**
 * Shows settings screen.
 */
cwc.ui.SettingScreen.prototype.show = function() {
  var layoutInstance = this.helper.getInstance('layout', true);
  var overlayNode = layoutInstance.getOverlay();
  this.decorate(overlayNode);
  layoutInstance.showOverlay(true);
};


/**
 * Hides settings screen.
 */
cwc.ui.SettingScreen.prototype.hide = function() {
  var layoutInstance = this.helper.getInstance('layout', true);
  layoutInstance.showOverlay(false);
};

