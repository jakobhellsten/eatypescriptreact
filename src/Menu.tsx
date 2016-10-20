/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import { MenuItem } from "./MenuItem";

import React = require('react');

class Menu extends React.Component<INavigationProps, any> {
    constructor(props: INavigationProps){
        super(props);
    }


    /*public handleMenuItemClick(event) {
        var link : any = event.target;
    }*/

    public handleMenuItemClick(clickedId){
        //var link : any = event.target;
        console.log('Bubble in menu!')
        //console.log(link);
        console.log('event in menu' + event);
        this.props.handleOnClick(clickedId);
    }

    public render() {

        return (
                <div>
                    Menu
                    <ul>
                        {this.props.menuItems.map(function(item){
                            var boundClick = this.handleMenuItemClick.bind(this);
                            return (
                                <MenuItem handleOnClick={boundClick} key={item.id} id={item.id} title={item.title} />
                            )
                        }.bind(this))}
                    </ul>
                </div> 
        );
    }
}

export { Menu };