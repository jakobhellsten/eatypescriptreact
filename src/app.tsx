/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/modules/react-dom/index.d.ts" />
/// <reference path="../typings/globals/react-modal/index.d.ts" />
/// <reference path="../typings/globals/axios/index.d.ts" />
/// <reference path="../typings/globals/jquery/index.d.ts" />

//declare var Router;
//Uncaught ReferenceError: Router is not defined

import React = require('react');
import ReactDom = require('react-dom');
import axios = require('axios');

import { Menu } from "./Menu";
import { DocumentModel } from "./DocumentModel";
import { Utils } from "./Utils";
import { DocumentList } from "./DocumentList";
import { BreadCrumb } from "./BreadCrumb";
import { Modal } from "./Modal";

class EAApp extends React.Component<IAppProps, IAppState> {

  public state : IAppState;
  public axiosInstance;
  readonly endpoint = 'http://rsexternalaccessapiaspnet.azurewebsites.net/'; 

  constructor(props : IAppProps) {
    super(props);

    this.axiosInstance = axios.create({
        baseURL: this.endpoint
    });
    
    let startItems = new Array<IMenuItem>();
    let startBreadCrumbs = new Array<IMenuItem>();
    let startDocuments = new Array<IMenuItem>(); 
    this.state = {
      currentSpecialty : null,
      activeBreadCrumbs : startBreadCrumbs,
      updating: true,
      menuItems : startItems,
      documents : startDocuments,
      isModalOpen : false
    };
  }

  public componentDidMount() {
    console.log('did mount');
    let component = this;

    //Get specialties with first mount
    this.axiosInstance.get('/specialties')
    .then(function (response) {
      let returnType = response.data as ISpecialty;
      let breadCrumb = returnType as IMenuItem;
      component.setState({
        currentSpecialty : returnType,
        menuItems : returnType.children,
        activeBreadCrumbs : component.state.activeBreadCrumbs.concat(breadCrumb)
      });

    })
    .catch(function (error) {
      console.log('Something bad happened');
      console.log(error);
    });  
  }

  public fetchDocumentsPerSpecialty(specialtyId : string, callback : any) {
      console.log('clicked id in fetchDocumentsPerSpecialty = ' + specialtyId);
      let documents = new Array<IDocument>();
      let component = this;
      this.axiosInstance.get('/documents/search?specialtyid=' + specialtyId)
        .then(function (response) {
          documents = response.data as Array<IDocument>;
          console.log(response.data)
          console.log(documents);
          callback(component, documents);
        })
        .catch(function (error) {
          console.log('Something bad happened');
          component.setState({
            documents : documents
          });
          console.log(error);
        }); 
  }

  public fetchDocuments(component : any, documentArray : Array<IDocument>)
  {
    component.setState({
      documents : documentArray
    });
  }

  public handleMenuClick(clickedId : string){
      console.log('Bubble for menu in app!')
      let component = this;
      
      if(clickedId != null)
      {
        this.axiosInstance.get('/specialties/' + clickedId)
        .then(function (response) {
          let returnType = response.data as ISpecialty;
          let menuItem = returnType as IMenuItem;
          let handleDocuments = component.fetchDocuments.bind(this);
          component.fetchDocumentsPerSpecialty(clickedId, handleDocuments);
          component.setState({
            currentSpecialty : returnType,
            activeBreadCrumbs : component.state.activeBreadCrumbs.concat(menuItem),
            menuItems : returnType.children,
          });
        })
        .catch(function (error) {
          console.log('Something bad happened');
          console.log(error);
        });  
      }
      else
      {
        console.log('clickedId is null or empty');
      }

    console.log(clickedId);
  }

  public handleBreadCrumbClick(clickedId : string){
      console.log('Bubble for breadcrumb in app!')
      let component = this;
      let handleDocuments = this.fetchDocuments.bind(this);

      if(clickedId != null)
      {
        this.axiosInstance.get('/specialties/' + clickedId)
        .then(function (response) {
          let returnType = response.data as ISpecialty;
          let breadCrumb = returnType as IMenuItem;
          let breadCrumbItems = component.state.activeBreadCrumbs;
          component.fetchDocumentsPerSpecialty(clickedId, handleDocuments);
          if(breadCrumbItems.filter(x => x.id == clickedId).length > 0)
          {
            let index = breadCrumbItems.indexOf(breadCrumbItems.filter(x => x.id == clickedId)[0])
            breadCrumbItems.length = index + 1; //change length of breadCrumbs
          }
          component.setState({
            currentSpecialty : returnType,
            menuItems : returnType.children,
            activeBreadCrumbs : breadCrumbItems,
          });
        })
        .catch(function (error) {
          console.log('Something bad happened');
          console.log(error);
        });  
      }
      else
      {
        console.log('clickedId is null or empty');
      }

    console.log(clickedId);
  }

  public openModal(){
    console.log('Open modal');
    this.setState({isModalOpen: true});      
  }
 
  public closeModal() {
    this.setState({isModalOpen: false});
    console.log('Close modal');
  }

  public handleListItemModalProperties(item : IDocument){
    console.log('In handleListItemModalProperties');
    console.log(item);
    this.setState({isModalOpen: true});
  }

  public render() {
    var main;
    var menuClick = this.handleMenuClick.bind(this);
    var breadcrumbClick = this.handleBreadCrumbClick.bind(this);
    var menu = <Menu handleOnClick={menuClick} menuItems={this.state.menuItems} currentSpecialty={this.state.currentSpecialty} />;
    var modalCloseClick = this.closeModal.bind(this);    
    var modal = <Modal isOpen={this.state.isModalOpen} handleOnClose={modalCloseClick} />;
    var handleModalOpenClick = this.handleListItemModalProperties.bind(this);
    var documentList = <DocumentList documents={this.state.documents} handleDocumentProperties={handleModalOpenClick} />;

    if(this.state.currentSpecialty != null)
    {
      var breadCrumb = <BreadCrumb handleOnClick={breadcrumbClick} menuItems={this.state.activeBreadCrumbs} currentSpecialty={this.state.currentSpecialty}  />;
    }    

    return (
      <div>
        <header className="header">
          <h1>Dokument per ämnesområde</h1>
        </header>
        {breadCrumb}
        {menu}
        {documentList}
        {modal}
      </div>
    );
  }
}

var model = new DocumentModel('react-documents');
//var menuModel = new MenuModel('ea-menuitems');

function render() {
  React.render(
    <EAApp model={model}/>,
    document.getElementsByClassName('widget')[0]
  );
}

model.subscribe(render);
render();


  /*
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
      let navNodes = new Array<IMenuItem>();

      let specialties = {
        "parentId": "00000000-0000-0000-0000-000000000000",
        "id": "301b0941-a3c9-4e5a-9c84-9591a4739356",
        "title": "Ämnesområde",
        "isTermInUse": true,
        "hasUsedChildNodes": true,
        "children": [
          {
            "id": "test",
            "parentId": "301b0941-a3c9-4e5a-9c84-9591a4739356",            
            "title": "Administration",
            "isTermInUse": false,
            "hasUsedChildNodes": true,
            "children": [],
            "self": "http://localhost:12008/specialties/62014f30-6a14-4ab6-bbf9-241db6023f14"
          },
          {
            "id": "616af728-369f-4059-a408-9ee549d9d37e",
            "parentId": "301b0941-a3c9-4e5a-9c84-9591a4739356",            
            "title": "MeSH",
            "isTermInUse": false,
            "hasUsedChildNodes": true,
            "children": [],
            "self": "http://localhost:12008/specialties/616af728-369f-4059-a408-9ee549d9d37e"
          }
        ],
        "self": "http://localhost:12008"
      }

      let specialties = {
        parentId: "00000000-0000-0000-0000-000000000000",
        id: "301b0941-a3c9-4e5a-9c84-9591a4739356",
        title: "Ämnesområde",
        isTermInUse: true,
        hasUsedChildNodes: true,
        children: [
          {
            id: "test",
            parentId: "301b0941-a3c9-4e5a-9c84-9591a4739356",            
            title: "Administration",
            isTermInUse: false,
            hasUsedChildNodes: true,
            children: [],
            self: "http://localhost:12008/specialties/62014f30-6a14-4ab6-bbf9-241db6023f14"
          },
          {
            id: "test2",
            parentId: "301b0941-a3c9-4e5a-9c84-9591a4739356",            
            title: "MeSH",
            isTermInUse: false,
            hasUsedChildNodes: true,
            children: [],
            self: "http://localhost:12008/specialties/616af728-369f-4059-a408-9ee549d9d37e"
          }
        ],
        self: "http://localhost:12008"
      }

      let specialty = Utils.convertToSpecialty(specialties);

      for (let item in specialty.children) {
        navNodes.push(specialty.children[item]);
      }

      navNodes.push(specialty);
      console.log(specialty);
      //navNodes.push(specialties.children);

      //return navNodes

      var returnType = specialties as ISpecialty;
      console.log(returnType);

      return returnType;
  }*/