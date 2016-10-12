/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/globals/jquery/index.d.ts" />

//declare var Router;
//Uncaught ReferenceError: Router is not defined

import React = require('react');
import jQuery = require('jquery');

import { Menu } from "./Menu";
import { DocumentModel } from "./DocumentModel";
import { DocumentList } from "./DocumentList";
import { BreadCrumb } from "./BreadCrumb";
import { ALL_DOCUMENTS, ACTIVE_DCOUMENTS} from "./constants";

class EADocumentsApp extends React.Component<IAppProps, IAppState> {

  public state : IAppState;

  constructor(props : IAppProps) {
    super(props);
    this.state = {
      updating: true,
      menuItems: this.getNavNodes()
    };
  }

  private getDocuments(query) {
      const endpoint = 'http://rsexternalaccessapiaspnet.azurewebsites.net/specialties';
      return jQuery.getJSON(endpoint, cs => console.log(cs));
      /*return this.http
          .get(endpoint)//, {search: searchParams})
          .map(res => res.json().main)
          .subscribe(res => console.log('weather json response = ' + JSON.stringify(res))
          );*/ //superagent
  }

  private getNavNodes()
  {
    let navNodes = new Array<IMenuItem>();
    let navNode = {id:"testKey", title: "testTitle"};
    let navNode2 = {id:"testKey2", title: "testTitle2"};
    let navNode3 = {id:"testKey3", title: "testTitle3"};
    navNodes.push(navNode);
    navNodes.push(navNode2);
    navNodes.push(navNode3);

    return navNodes;
  }

  private getSpecialties()
  {
      var specialties = {
        "parentId": "00000000-0000-0000-0000-000000000000",
        "id": "301b0941-a3c9-4e5a-9c84-9591a4739356",
        "title": "Ämnesområde",
        "isTermInUse": true,
        "hasUsedChildNodes": true,
        "children": [
          {
            "parentId": "301b0941-a3c9-4e5a-9c84-9591a4739356",
            "id": "62014f30-6a14-4ab6-bbf9-241db6023f14",
            "title": "Administration",
            "isTermInUse": false,
            "hasUsedChildNodes": true,
            "children": [],
            "self": "http://localhost:12008/specialties/62014f30-6a14-4ab6-bbf9-241db6023f14"
          },
          {
            "parentId": "301b0941-a3c9-4e5a-9c84-9591a4739356",
            "id": "616af728-369f-4059-a408-9ee549d9d37e",
            "title": "MeSH",
            "isTermInUse": false,
            "hasUsedChildNodes": true,
            "children": [],
            "self": "http://localhost:12008/specialties/616af728-369f-4059-a408-9ee549d9d37e"
          }
        ],
        "self": "http://localhost:12008"
      }

      return specialties;
  }


  public componentDidMount() {
    console.log('did mount');
    var items = this.getNavNodes();
    console.log(items.length);
    this.setState({
        menuItems : items
      });
    //var setState = this.setState;
    //this.getDocuments(null);
  }

  public render() {
    var main;
    console.log('in render');
    console.log(this.state.menuItems);
    var menu = <Menu menuItems={this.state.menuItems} />;

    //if (documents.length) {
      /*main = (
        <section className="main">
          <ul className="document-list">
            {documentItems}
          </ul>
        </section>
      );*/

    return (
      <div>
        <header className="header">
          <h1>Dokument per ämnesområde</h1>
        </header>
        //{main}
        {menu}
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
