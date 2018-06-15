import React, { Component } from 'react';
import '../../App.css';
import { Button, Icon, Modal } from 'semantic-ui-react'

class RetweetModalView extends Component {
  constructor(props){
    super(props); 
    this.state={
			open: false,
			isError: false,
		}
		this.close = this.close.bind(this);
	}

	//-----------------------------------
  // Methods
  //-----------------------------------

  close(){
    this.setState({
      open: false,
      isError: false
		});
	}

	showRetweetModal(){
    // recieve previous tweet here
		this.setState({ 
      open: true,
		});
  }
  
  //-----------------------------------
  // Views
  //-----------------------------------
	addCommentView(){

	}

	tweetDescription(){

	}

	getModalView(){
    const { open } = this.state;
    return(
      <Modal className='retweet-modal' size='tiny' open={open} onClose={this.close}>
        <Modal.Header>
					<div className='heading'>Retweet this to your followers? </div>
          <div className='icon-close close-btn' onClick={this.close}></div>
        </Modal.Header>
        <Modal.Content>
          <div className="modal-content-header">
						{this.addCommentView()}
            {this.tweetDescription()}
          </div>
        </Modal.Content>
				<Modal.Actions>
					<Button color='blue'>Retweet</Button>
				</Modal.Actions>
      </Modal>
    )
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  render() {
    return (
      <div className="App">
				{this.getModalView()}
      </div>
    );
  }
}

export default RetweetModalView; 
