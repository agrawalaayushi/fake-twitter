import React, { Component } from 'react';
import '../../../App.css';
import retweet from '../../../assets/image-icon/retweet-icon.png';
import { Icon } from 'semantic-ui-react';

class TweetCardView extends Component {
  constructor(props){
		super(props);
	}

  render() {
		const { tweetDetails } = this.props;
    return (
      <div className= "tweet-card fas fa-retweet">
				<div className="tweet-card-header fas fa-retweet">
					<span>{tweetDetails.name}</span>
					<img src={retweet} className="retweet-icon" alt="retweet" />
				</div>
				<div><p>{tweetDetails.description}</p></div>		
      </div>
    );
  }
}

export default TweetCardView; 
