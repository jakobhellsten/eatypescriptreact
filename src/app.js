"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var jQuery = require('jquery');
var Menu_1 = require("./Menu");
var DocumentModel_1 = require("./DocumentModel");
var EADocumentsApp = (function (_super) {
    __extends(EADocumentsApp, _super);
    function EADocumentsApp(props) {
        _super.call(this, props);
        this.state = {
            updating: true,
            menuItems: this.getNavNodes()
        };
    }
    EADocumentsApp.prototype.getDocuments = function (query) {
        var endpoint = 'http://rsexternalaccessapiaspnet.azurewebsites.net/specialties';
        return jQuery.getJSON(endpoint, function (cs) { return console.log(cs); });
    };
    EADocumentsApp.prototype.getNavNodes = function () {
        var navNodes = new Array();
        var navNode = { id: "testKey", title: "testTitle" };
        var navNode2 = { id: "testKey2", title: "testTitle2" };
        var navNode3 = { id: "testKey3", title: "testTitle3" };
        navNodes.push(navNode);
        navNodes.push(navNode2);
        navNodes.push(navNode3);
        return navNodes;
    };
    EADocumentsApp.prototype.getSpecialties = function () {
        var specialties = {
            "parentId": "00000000-0000-0000-0000-000000000000",
            "id": "301b0941-a3c9-4e5a-9c84-9591a4739356",
            "title": "Ämnesområde",
            "isTermInUse": true,
            "hasUsedChildNodes": true,
            "children": [
                {
                    "parentId": "301b0941-a3c9-4e5a-9c84-9591a4739356",
                    "id": "62014f30-6a14-4ab6-bbf9-241db6023f14",
                    "title": "Administration",
                    "isTermInUse": false,
                    "hasUsedChildNodes": true,
                    "children": [],
                    "self": "http://localhost:12008/specialties/62014f30-6a14-4ab6-bbf9-241db6023f14"
                },
                {
                    "parentId": "301b0941-a3c9-4e5a-9c84-9591a4739356",
                    "id": "616af728-369f-4059-a408-9ee549d9d37e",
                    "title": "MeSH",
                    "isTermInUse": false,
                    "hasUsedChildNodes": true,
                    "children": [],
                    "self": "http://localhost:12008/specialties/616af728-369f-4059-a408-9ee549d9d37e"
                }
            ],
            "self": "http://localhost:12008"
        };
        return specialties;
    };
    EADocumentsApp.prototype.componentDidMount = function () {
        console.log('did mount');
        var items = this.getNavNodes();
        console.log(items.length);
        this.setState({
            menuItems: items
        });
    };
    EADocumentsApp.prototype.render = function () {
        var main;
        console.log('in render');
        console.log(this.state.menuItems);
        var menu = React.createElement(Menu_1.Menu, {menuItems: this.state.menuItems});
        return (React.createElement("div", null, 
            React.createElement("header", {className: "header"}, 
                React.createElement("h1", null, "Dokument per ämnesområde")
            ), 
            "//", 
            main, 
            menu));
    };
    return EADocumentsApp;
}(React.Component));
var model = new DocumentModel_1.DocumentModel('react-documents');
function render() {
    React.render(React.createElement(EADocumentsApp, {model: model}), document.getElementsByClassName('widget')[0]);
}
model.subscribe(render);
render();
