/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import React = require('react');

class BreadCrumbItem extends React.Component<INavigationItemProps, any> {

  constructor(props : INavigationItemProps){
    super(props);
  }


  public render() {
    return (
        <div>
            <a>{this.props.title}</a>
        </div>        
    );
  }
}

export { BreadCrumbItem };