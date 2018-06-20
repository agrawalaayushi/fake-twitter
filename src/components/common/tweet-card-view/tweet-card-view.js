import React, { Component } from 'react';
import '../../../App.css';
import { Icon } from 'semantic-ui-react';

class TweetCardView extends Component {

	// On click re-tweet icon, open the retweet modal
	openRetweetModal(){
		const { tweetDetails } = this.props;
		this.props.openRetweetModalCallback(tweetDetails);
	}

  render() {
		const { tweetDetails } = this.props;
    return (
      <div className= "tweet-card">
				<div className="tweet-card-header">
					<h5>{tweetDetails.name}</h5>
					<Icon name="retweet" className= "retweet-icon" onClick = {() => this.openRetweetModal()} />
				</div>
				<div><p>{tweetDetails.description}</p></div>	
				{tweetDetails.selectedTweet !=="" &&
					<div className="selected-tweet-box">{tweetDetails.selectedTweet}</div>	
				}
      </div>
    );
  }
}

export default TweetCardView; 
