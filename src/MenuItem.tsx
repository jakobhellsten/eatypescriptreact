/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import React = require('react');

class MenuItem extends React.Component<INavigationItemProps, any> {
    constructor(props: INavigationItemProps){
        super(props);
    }

    public handleOnClick(event) {
        var element : any = event.target;
        console.log('handle on click in MenuItem')
    }

    public render() {
        return (
            <li>
                <div>
                    In the menuitem   
                    {this.props.title}   
                    <a onClick={e => this.props.handleOnClick(this.props.key)}>{this.props.title}</a>
                </div>
            </li>
        );
    }

    

}

export { MenuItem };



      <li>
        <a onClick={e => this.props.handleOnClick(e)}
        />
      </li>