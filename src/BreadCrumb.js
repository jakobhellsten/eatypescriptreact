"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BreadCrumbItem_1 = require("./BreadCrumbItem");
var BreadCrumb = (function (_super) {
    __extends(BreadCrumb, _super);
    function BreadCrumb(props) {
        _super.call(this, props);
    }
    BreadCrumb.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    };
    BreadCrumb.prototype.componentDidUpdate = function (prevProps) {
    };
    BreadCrumb.prototype.handleBreadCrumbItemClick = function (event) {
        var link = event.target;
    };
    BreadCrumb.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("ul", null, this.props.menuItems.map(function (item, i) {
                var boundClick = this.handleBreadCrumbItemClick.bind(this, i);
                return (React.createElement(BreadCrumbItem_1.BreadCrumbItem, {id: "{item.id}", title: "{item.title}", handleOnClick: boundClick}));
            }))
        ));
    };
    return BreadCrumb;
}(React.Component));
exports.BreadCrumb = BreadCrumb;
