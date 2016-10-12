"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _this = this;
var React = require('react');
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(props) {
        _super.call(this, props);
    }
    MenuItem.prototype.handleOnClick = function (event) {
        var input = event.target;
        console.log('handle on click in MenuItem');
    };
    MenuItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("li", null, 
            React.createElement("div", null, 
                "In the menuitem", 
                this.props.title, 
                React.createElement("a", {onClick: function (e) { return _this.props.handleOnClick(_this); }}, this.props.title))
        ));
    };
    return MenuItem;
}(React.Component));
exports.MenuItem = MenuItem;
React.createElement("li", null, 
    React.createElement("a", {onClick: function (e) { return _this.props.handleOnClick(e); }})
);
