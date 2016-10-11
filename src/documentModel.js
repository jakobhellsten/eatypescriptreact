"use strict";
var utils_1 = require("./utils");
var DocumentModel = (function () {
    function DocumentModel(key) {
        this.key = key;
        this.documents = null;
        this.onChanges = [];
    }
    DocumentModel.prototype.subscribe = function (onChange) {
        this.onChanges.push(onChange);
    };
    DocumentModel.prototype.inform = function () {
        utils_1.Utils.store(this.key, this.documents);
        this.onChanges.forEach(function (cb) { cb(); });
    };
    DocumentModel.prototype.addTodo = function (title) {
        this.documents = this.documents.concat({
            id: utils_1.Utils.uuid(),
            title: title,
            completed: false
        });
        this.inform();
    };
    DocumentModel.prototype.toggleAll = function (checked) {
        this.documents = this.documents.map(function (todo) {
            return utils_1.Utils.extend({}, todo, { completed: checked });
        });
        this.inform();
    };
    DocumentModel.prototype.toggle = function (documentToggle) {
        this.documents = this.documents.map(function (document) {
            return document !== documentToggle ?
                document :
                utils_1.Utils.extend({}, document, { completed: !document.completed });
        });
        this.inform();
    };
    DocumentModel.prototype.destroy = function (todo) {
        this.documents = this.documents.filter(function (candidate) {
            return candidate !== todo;
        });
        this.inform();
    };
    return DocumentModel;
}());
exports.DocumentModel = DocumentModel;
