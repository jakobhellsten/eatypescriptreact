"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(props) {
        _super.call(this, props);
    }
    MenuItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("li", null, 
            React.createElement("div", null, 
                React.createElement("a", {onClick: function (e) { return _this.props.handleOnClick(_this.props.id); }}, 
                    "key = ", 
                    this.props.key, 
                    ", id = ", 
                    this.props.id, 
                    " title = ", 
                    this.props.title)
            )
        ));
    };
    return MenuItem;
}(React.Component));
exports.MenuItem = MenuItem;
