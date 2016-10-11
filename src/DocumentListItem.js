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
        this.state = { editText: this.props.todo.title };
    }
    DocumentListItem.prototype.handleSubmit = function (event) {
        var val = this.state.editText.trim();
        if (val) {
            this.setState({ editText: val });
        }
        else {
        }
    };
    DocumentListItem.prototype.handleEdit = function () {
        this.setState({ editText: this.props.todo.title });
    };
    DocumentListItem.prototype.handleKeyDown = function (event) {
        alert("handling key down");
    };
    DocumentListItem.prototype.handleChange = function (event) {
        var input = event.target;
        this.setState({ editText: input.value });
    };
    DocumentListItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (nextProps.todo !== this.props.todo ||
            nextState.editText !== this.state.editText);
    };
    DocumentListItem.prototype.componentDidUpdate = function (prevProps) {
    };
    DocumentListItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("li", {className: classNames({
            completed: this.props.todo.completed,
        })}, 
            React.createElement("div", {className: "view"}, 
                React.createElement("input", {className: "toggle", type: "checkbox", checked: this.props.todo.completed}), 
                React.createElement("label", {onDoubleClick: function (e) { return _this.handleEdit(); }}, this.props.todo.title)), 
            React.createElement("input", {ref: "editField", className: "edit", value: this.state.editText, onBlur: function (e) { return _this.handleSubmit(e); }, onChange: function (e) { return _this.handleChange(e); }, onKeyDown: function (e) { return _this.handleKeyDown(e); }})));
    };
    return DocumentListItem;
}(React.Component));
exports.DocumentListItem = DocumentListItem;
