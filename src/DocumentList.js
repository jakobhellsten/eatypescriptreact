"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DocumentListItem_1 = require("./DocumentListItem");
var DocumentList = (function (_super) {
    __extends(DocumentList, _super);
    function DocumentList(props) {
        _super.call(this, props);
    }
    DocumentList.prototype.componentDidUpdate = function (prevProps) {
    };
    DocumentList.prototype.handleListItemClick = function (event) {
        var link = event.target;
    };
    DocumentList.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("ul", null, this.props.documents.map(function (item, i) {
                var boundClick = this.handleListItemClick.bind(item, i);
                return (React.createElement(DocumentListItem_1.DocumentListItem, {handleOnClick: boundClick(item.id), document: item, key: item.id}));
            }))
        ));
    };
    return DocumentList;
}(React.Component));
exports.DocumentList = DocumentList;
