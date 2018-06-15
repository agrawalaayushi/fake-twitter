import React, { Component } from 'react';
import '../../App.css';
import { Button, Icon, Modal, Input} from 'semantic-ui-react'

class RetweetModalView extends Component {
  constructor(props){
    super(props); 
    this.state={
			open: false,
      isError: false,
      tweet: "",
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

	showRetweetModal(tweet){
    // recieve previous tweet here
		this.setState({ 
      open: true,
      tweet: tweet,
		});
  }
  
  //-----------------------------------
  // Views
  //-----------------------------------
	addCommentView(){
    return(
      <Input placeholder="Add a comment"/>
    )
	}

	tweetDescription(data){
    return(
      <p>{data.description}</p>
    )
	}

	getModalView(){
    const { open, tweet } = this.state;
    return(
      <Modal className='retweet-modal' size='tiny' open={open} closeIcon onClose={this.close}>
        <Modal.Header>
					<div className='heading'>Retweet this to your followers? </div>
        </Modal.Header>
        <Modal.Content>
          <div className="modal-content-header">
						{this.addCommentView()}
            {this.tweetDescription(tweet)}
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
