/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import React = require('react');

class DocumentListItem extends React.Component<IDocumentListItemProps, any> {

  constructor(props : IDocumentListItemProps){
    super(props);
  }


  public render() {    
    return (      
      <li>
        Klicka<a onClick={e => this.props.handleOnClick(e)}>document title = {this.props.document.title}</a>Öppna<a onClick={e => this.props.handleModalOpen(this.props.document)}>Open item properties</a>
      </li>
    );
  }
}

export { DocumentListItem };
