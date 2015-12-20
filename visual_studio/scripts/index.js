(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
exports.subs = subs;
function add(a, b) {
    return a + b;
}

function subs(a, b) {
    return a > b ? a - b : b - a;
}
},{}],2:[function(require,module,exports){
'use strict';

var _lib = require('./lib');

console.log((0, _lib.add)(3, 2));
console.log((0, _lib.subs)(2, 3));
console.log((0, _lib.subs)(3, 2));
},{"./lib":1}]},{},[2]);
