/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>


import React = require('react');
import ReactDom = require('react-dom');
import { DocumentListItem } from "./DocumentListItem";
import { Modal } from "./Modal";

//Stateless component
class DocumentList extends React.Component<IDocumentListProps, IDocumentListState> {
  //public state : ITodoItemState;

  constructor(props : IDocumentListProps){
    super(props);
    this.state = {
      isModalOpen : false
    }

    
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

  public handleListItemClick(event) {
    var link : any = event.target;
    console.log(link);
    console.log('In handleListItemClick in DocumentList');
  }

  public openModal(){
    this.setState({isModalOpen: true});
  }
 
  public afterOpenModal() {
  }
 
  public closeModal() {
    this.setState({isModalOpen: false});
  }

  /*public handleListItemModalProperties(item : IDocument){
    console.log('In handleListItemModalProperties');
    console.log(item);
  }*/

  public render() {  

    //TODO: break out logic for popup window in own control

    return (
        <div>
          DocumentList
            <ul>
              {this.props.documents.map(function(item){
                var boundClick = this.handleListItemClick.bind(this);
                //var openModalClick = this.handleListItemModalProperties.bind(this);
                return (
                  <DocumentListItem handleOnClick={boundClick} document={item} key={item.id} handleModalOpen={this.props.handleDocumentProperties} />
                )
              }.bind(this))}
            </ul>            
        </div>          
    );
  }
}

export { DocumentList };
