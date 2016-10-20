"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MenuItem_1 = require("./MenuItem");
var React = require('react');
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        _super.call(this, props);
    }
    Menu.prototype.handleMenuItemClick = function (event) {
        console.log('Bubble in menu!');
        console.log('event in menu' + event);
        this.props.handleOnClick(event);
    };
    Menu.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("ul", null, this.props.menuItems.map(function (item) {
                var boundClick = this.handleMenuItemClick.bind(this);
                return (React.createElement(MenuItem_1.MenuItem, {handleOnClick: boundClick, key: item.id, id: item.id, title: item.title}));
            }.bind(this)))
        ));
    };
    return Menu;
}(React.Component));
exports.Menu = Menu;
