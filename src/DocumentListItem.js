"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DocumentListItem = (function (_super) {
    __extends(DocumentListItem, _super);
    function DocumentListItem(props) {
        _super.call(this, props);
    }
    DocumentListItem.prototype.handleOnClick = function (event) {
        var link = event.target;
    };
    DocumentListItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("li", null, 
            React.createElement("a", {onClick: function (e) { return _this.props.handleOnClick(e); }})
        ));
    };
    return DocumentListItem;
}(React.Component));
exports.DocumentListItem = DocumentListItem;
