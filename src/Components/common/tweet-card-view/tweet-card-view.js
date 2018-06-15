import React, { Component } from 'react';
import '../../../App.css';

class TweetCardView extends Component {
  constructor(props){
		super(props);
	}

  render() {
		const { tweetDetails } = this.props;
    return (
      <div className= "tweet-card-wrp">
				<div><span>{tweetDetails.name}</span></div>
				<div><p>{tweetDetails.description}</p></div>		
      </div>
    );
  }
}

export default TweetCardView; 
