import React, { Component } from 'react';
import '../../../App.css';
import retweet from '../../../assets/image-icon/retweet-icon.png';
import { Icon } from 'semantic-ui-react';

class TweetCardView extends Component {
  constructor(props){
		super(props);
	}

	openRetweetModal(){
		const { tweetDetails } = this.props;
		this.props.openRetweetModalCallback(tweetDetails);
	}

  render() {
		const { tweetDetails } = this.props;
		let description = tweetDetails.description;
    return (
      <div className= "tweet-card">
				<div className="tweet-card-header">
					<span>{tweetDetails.name}</span>
					<Icon name="retweet"	onClick = {() => this.openRetweetModal()} />
				</div>
				<div><p>{tweetDetails.description}</p></div>		
      </div>
    );
  }
}

export default TweetCardView; 
