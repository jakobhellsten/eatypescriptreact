/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import React = require('react');

class Modal extends React.Component<IModalProps, any> {

  constructor(props : IModalProps){
    super(props);
  }


  public render() {    
      const { isOpen, bg } = this.props;

    const styles = {
        modal: {
            display: (isOpen) ? 'block' : 'none', 
            backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',       
        }
    };

    return (      
        <div className="modal-wrapper" style={styles.modal}>
            { /* Close Button: invoke callback */ }
            <span onClick={this.props.handleOnClose}>Stäng</span>
            { /* Content */ }
            <div className="modal-item">
                Testar lite!!
            </div>
      </div>
    );
  }
}

export { Modal };
