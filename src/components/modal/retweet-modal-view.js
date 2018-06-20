import React, { Component } from 'react';
import '../../App.css';
import { Button, Modal, Input} from 'semantic-ui-react'

class RetweetModalView extends Component {
  constructor(props){
    super(props); 
    this.state={
			open: false,
      selectedTweet: "",
      retweetComment: "",
    }
    this.close = this.close.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
	}

	//-----------------------------------
  // Methods
  //-----------------------------------

  // To close the modal
  close(){
    this.setState({
      open: false,
      retweetComment: ""
		});
	}

  // To open the modal
	showRetweetModal(tweet){
		this.setState({ 
      open: true,
      selectedTweet: tweet,     // recieve selected tweet here
    });
  }
  
  handleInputChange(e) {
    this.setState({retweetComment: e.target.value});
  }

  // On click retweet button, send the required fields to Parent class 
  handleRetweet(e){
    e.preventDefault();    
    const { retweetComment, selectedTweet } = this.state;
      let params =[
        {
          id: 5,
          name : selectedTweet.name,
          description : retweetComment,
          selectedTweet : selectedTweet.description
        }
      ] 
      this.props.submitRetweetCallback(params);
  }

  //-----------------------------------
  // Views
  //-----------------------------------
  
	addCommentView(){
    return(
      <div className="retweet-comment-box">
        <Input placeholder="Add a comment.." value={this.state.retweetComment} 
        onChange={this.handleInputChange}/>
      </div>
    )
	}

	tweetDescription(data){
    return(
      <div className="retweet-description-box" >
        <h5 className="user-name">@{data.name}</h5>
        <p>{data.description}</p>
      </div>
    )
	}

	getModalView(){
    const { open, selectedTweet } = this.state;
    return(
      <Modal className='retweet-modal' size='tiny' open={open} closeIcon onClose={this.close}>
        <Modal.Header>
					<div className='heading'>Retweet this to your followers? </div>
        </Modal.Header>
        <Modal.Content>
          <div className="modal-content-header">
						{this.addCommentView()}
            {this.tweetDescription(selectedTweet)}
          </div>
        </Modal.Content>
				<Modal.Actions>
					<Button color='blue' onClick= {(e) => this.handleRetweet(e)}>Retweet</Button>
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
