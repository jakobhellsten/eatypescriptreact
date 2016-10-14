/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>


import React = require('react');

import { DocumentListItem } from "./DocumentListItem";

//Stateless component
class DocumentList extends React.Component<IDocumentListProps, IDocumentListState> {
  //public state : ITodoItemState;

  constructor(props : IDocumentListProps){
    super(props);
    //this.state = { editText: this.props.document.title };
  }

  /**
   * This is a completely optional performance enhancement that you can
   * implement on any React component. If you were to delete this method
   * the app would still work correctly (and still be very performant!), we
   * just use it as an example of how little code it takes to get an order
   * of magnitude performance improvement.
   */
  /*public shouldComponentUpdate(nextProps : IDocumentProps, nextState : ITodoItemState) {
    return (
      nextProps.document !== this.props.document ||
      //nextProps.editing !== this.props.editing ||
      nextState.editText !== this.state.editText
    );
  }*/

  /**
   * Safely manipulate the DOM after updating the state when invoking
   * `this.props.onEdit()` in the `handleEdit` method above.
   * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
   * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
   */
  public componentDidUpdate(prevProps : IDocumentListProps) {
    /*if (!prevProps.editing && this.props.editing) {
      var node = React.findDOMNode<HTMLInputElement>(this.refs["editField"]);
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }*/
  }

  public handleListItemClick(event) {
    var link : any = event.target;
  }

  public render() {
    
    //var documentListItem = <DocumentListItem document="test" />;

    return (
        <div>
            <ul>
              {this.props.documents.map(function(item, i){
                var boundClick = this.handleListItemClick.bind(this, i);
                return (
                  <DocumentListItem handleOnClick={boundClick} document={item} key={item.id} />
                )
              })}
            </ul>
        </div>        
    );
  }
}

export { DocumentList };
