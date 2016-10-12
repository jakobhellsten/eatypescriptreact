"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BreadCrumbItem = (function (_super) {
    __extends(BreadCrumbItem, _super);
    function BreadCrumbItem(props) {
        _super.call(this, props);
    }
    BreadCrumbItem.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("a", null, this.props.title)
        ));
    };
    return BreadCrumbItem;
}(React.Component));
exports.BreadCrumbItem = BreadCrumbItem;
