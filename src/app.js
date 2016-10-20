"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var jQuery = require('jquery');
var axios = require('axios');
var Menu_1 = require("./Menu");
var DocumentModel_1 = require("./DocumentModel");
var Utils_1 = require("./Utils");
var EADocumentsApp = (function (_super) {
    __extends(EADocumentsApp, _super);
    function EADocumentsApp(props) {
        _super.call(this, props);
        var startItems = new Array();
        this.state = {
            updating: true,
            menuItems: startItems
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
    EADocumentsApp.prototype.getSpecialties = function (id) {
        var endpoint = 'http://rsexternalaccessapiaspnet.azurewebsites.net/';
        var query = endpoint;
        if (id !== null) {
            query = endpoint + id;
        }
        var specialty;
        var axiosInstance = axios.create({
            baseURL: endpoint
        });
        axiosInstance.get('/specialties')
            .then(function (response) {
            console.log('In axios then');
            specialty = response.data;
            console.log(response);
            console.log(response.data);
            console.log("specialty= ");
            console.log(specialty);
        })
            .catch(function (error) {
            console.log('Something bad happened');
            console.log(error);
        });
        var returnType = specialty;
        return returnType;
    };
    EADocumentsApp.prototype.getSpecialtiesOld = function () {
        var navNodes = new Array();
        var specialties = {
            "parentId": "00000000-0000-0000-0000-000000000000",
            "id": "301b0941-a3c9-4e5a-9c84-9591a4739356",
            "title": "Ämnesområde",
            "isTermInUse": true,
            "hasUsedChildNodes": true,
            "children": [
                {
                    "id": "test",
                    "parentId": "301b0941-a3c9-4e5a-9c84-9591a4739356",
                    "title": "Administration",
                    "isTermInUse": false,
                    "hasUsedChildNodes": true,
                    "children": [],
                    "self": "http://localhost:12008/specialties/62014f30-6a14-4ab6-bbf9-241db6023f14"
                },
                {
                    "id": "616af728-369f-4059-a408-9ee549d9d37e",
                    "parentId": "301b0941-a3c9-4e5a-9c84-9591a4739356",
                    "title": "MeSH",
                    "isTermInUse": false,
                    "hasUsedChildNodes": true,
                    "children": [],
                    "self": "http://localhost:12008/specialties/616af728-369f-4059-a408-9ee549d9d37e"
                }
            ],
            "self": "http://localhost:12008"
        };
        var specialty = Utils_1.Utils.convertToSpecialty(specialties);
        for (var item in specialty.children) {
            navNodes.push(specialty.children[item]);
        }
        navNodes.push(specialty);
        console.log(specialty);
        var returnType = specialties;
        console.log(returnType);
        return returnType;
    };
    EADocumentsApp.prototype.componentDidMount = function () {
        console.log('did mount');
        var items = this.getSpecialties(null);
        if (items != null && items.children != null) {
            console.log(items.children.length);
        }
        var component = this;
        this.setState({
            menuItems: items.children
        });
    };
    EADocumentsApp.prototype.handleMenuClick = function (event) {
        console.log('Bubble for menu in app!');
        console.log(event);
    };
    EADocumentsApp.prototype.render = function () {
        var main;
        console.log('in render');
        console.log(this.state.menuItems);
        var menuClick = this.handleMenuClick.bind(this);
        var menu = React.createElement(Menu_1.Menu, {handleOnClick: menuClick, menuItems: this.state.menuItems});
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
