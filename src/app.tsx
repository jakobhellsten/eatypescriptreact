/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/globals/jquery/index.d.ts" />

declare var Router;
//Uncaught ReferenceError: Router is not defined

import React = require('react');
import jQuery = require('jquery');
//import Superagent = require('superagent');
//import Router = require('react-router');

import { DocumentModel } from "./DocumentModel";
//import { MenuModel } from "./MenuModel";
import { DocumentListItem } from "./DocumentListItem";
import { ALL_DOCUMENTS, ACTIVE_DCOUMENTS} from "./constants";

class EADocumentsApp extends React.Component<IAppProps, IAppState> {

  public state : IAppState;

  constructor(props : IAppProps) {
    super(props);
    this.state = {
      nowShowing: ALL_DOCUMENTS,
      editing: null
    };
  }

  private getDocuments(query) {
      const endpoint = 'http://rsexternalaccessapiaspnet.azurewebsites.net/specialties';
      return jQuery.getJSON(endpoint, cs => console.log(cs));
      /*return this.http
          .get(endpoint)//, {search: searchParams})
          .map(res => res.json().main)
          .subscribe(res => console.log('weather json response = ' + JSON.stringify(res))
          );*/
  }



  public componentDidMount() {
    console.log('did mount');
    var setState = this.setState;
    /*var router = Router({
      '/': setState.bind(this, {nowShowing: ALL_DOCUMENTS}),
      '/active': setState.bind(this, {nowShowing: ACTIVE_DCOUMENTS}),
    });
    router.init('/');*/
    this.getDocuments(null);
  }

  public render() {
    var main;
    console.log('in render');
    const documents = this.props.model.documents;

    /*var shownDocuments = documents.filter((todo) => {
      switch (this.state.nowShowing) {
      case ACTIVE_DCOUMENTS:
        return !todo.completed;
      default:
        return true;
      }
    });*/

    var documentItems = null;
    /*var documentItems = shownDocuments.map((todo) => {
      return (
        <DocumentListItem
          key={todo.id}
          todo={todo}
        />
      );
    });*/

    // Note: It's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map(), filter() and reduce() everywhere instead of mutating the
    // array or todo items themselves.
    /*var activeTodoCount = documents.reduce(function (accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);*/

    //var completedCount = documents.length - activeTodoCount;
    var activeTodoCount = 0;

    //if (documents.length) {
      main = (
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            checked={activeTodoCount === 0}
          />
          <ul className="document-list">
            {documentItems}
          </ul>
        </section>
      );
    //}

    return (
      <div>
        <header className="header">
          <h1>Dokument per ämnesområde</h1>
          <input
            ref="newField"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
          />
        </header>
        {main}
      </div>
    );
  }
}

var model = new DocumentModel('react-documents');
//var menuModel = new MenuModel('ea-menuitems');

function render() {
  React.render(
    <EADocumentsApp model={model}/>,
    document.getElementsByClassName('widget')[0]
  );
}

model.subscribe(render);
render();
