"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var jQuery = require('jquery');
var DocumentModel_1 = require("./DocumentModel");
var constants_1 = require("./constants");
var EADocumentsApp = (function (_super) {
    __extends(EADocumentsApp, _super);
    function EADocumentsApp(props) {
        _super.call(this, props);
        this.state = {
            nowShowing: constants_1.ALL_DOCUMENTS,
            editing: null
        };
    }
    EADocumentsApp.prototype.getDocuments = function (query) {
        var endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98';
        return jQuery.getJSON(endpoint, function (cs) { return alert(cs); });
    };
    EADocumentsApp.prototype.componentDidMount = function () {
        alert('did mount');
        var setState = this.setState;
        this.getDocuments(null);
    };
    EADocumentsApp.prototype.render = function () {
        var main;
        var documents = this.props.model.documents;
        var documentItems = null;
        var activeTodoCount = 0;
        main = (React.createElement("section", {className: "main"}, 
            React.createElement("input", {className: "toggle-all", type: "checkbox", checked: activeTodoCount === 0}), 
            React.createElement("ul", {className: "document-list"}, documentItems)));
        return (React.createElement("div", null, 
            React.createElement("header", {className: "header"}, 
                React.createElement("h1", null, "todos"), 
                React.createElement("input", {ref: "newField", className: "new-todo", placeholder: "What needs to be done?", autoFocus: true})), 
            main));
    };
    return EADocumentsApp;
}(React.Component));
var model = new DocumentModel_1.DocumentModel('react-documents');
function render() {
    React.render(React.createElement(EADocumentsApp, {model: model}), document.getElementsByClassName('widget')[0]);
}
model.subscribe(render);
render();
