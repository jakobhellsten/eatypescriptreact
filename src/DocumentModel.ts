/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import { Utils } from "./utils";

// Generic "model" object. You can use whatever
// framework you want. For this application it
// may not even be worth separating this logic
// out, but we do this to demonstrate one way to
// separate out parts of your application.
class DocumentModel implements IDocumentModel {

  public key : string;
  public documents : Array<IDocument>;
  public menuItems : Array<IMenuItem>
  public onChanges : Array<any>;

  constructor(key) {
    this.key = key;
    this.documents = null; //Utils.store(key);
    this.onChanges = [];
  }

  public subscribe(onChange) {
    this.onChanges.push(onChange);
  }

  public inform() {
    Utils.store(this.key, this.documents);
    this.onChanges.forEach(function (cb) { cb(); });
  }

  public addTodo(title : string) {
    this.documents = this.documents.concat({
      id: Utils.uuid(),
      title: title,
      completed: false
    });

    this.inform();
  }

  public toggleAll(checked : Boolean) {
    // Note: It's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map(), filter() and reduce() everywhere instead of mutating the
    // array or todo items themselves.
    this.documents = this.documents.map<IDocument>((todo : IDocument) => {
      return Utils.extend({}, todo, {completed: checked});
    });

    this.inform();
  }

  public toggle(documentToggle : IDocument) {
    this.documents = this.documents.map<IDocument>((document : IDocument) => {
      return document !== documentToggle ?
        document :
        Utils.extend({}, document, {completed: !document.completed});
    });

    this.inform();
  }

  public destroy(todo : IDocument) {
    this.documents = this.documents.filter(function (candidate) {
      return candidate !== todo;
    });

    this.inform();
  }
}

export { DocumentModel };
