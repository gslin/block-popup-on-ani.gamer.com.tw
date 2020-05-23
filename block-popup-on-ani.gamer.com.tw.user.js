// ==UserScript==
// @name         Popup blocker on ani.gamer.com.tw
// @namespace    https://github.com/gslin/block-popup-on-ani.gamer.com.tw/
// @version      0.20200523.0
// @description  Block popup windows on ani.gamer.com.tw
// @author       Gea-Suan Lin <gslin@gslin.com>
// @match        https://ani.gamer.com.tw/*
// @grant        none
// @license      MIT
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    window.alert = (msg) => {
        console.debug('Alert (blocked): ' + msg)
    };
})();
