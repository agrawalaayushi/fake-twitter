import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import TweetCardView from '../common/tweet-card-view/tweet-card-view';
import RetweetModalView from '../modal/retweet-modal-view';
import { Icon } from 'semantic-ui-react';


class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweetsResponse: {
        count: 4,
        tweets:[
          {
            id : 1,
            name: 'Cessi',
            description: 'Sample tweet 1',
          },
          {
            id : 2,
            name: 'Messi',
            description: 'Sample tweet 2',
          },
          {
            id : 3,
            name: 'Monica',
            description: 'Sample tweet 3',
          },
          {
            id : 4,
            name: 'Mike',
            description: 'Sample tweet 4',
          },
        ]
      }
    }
  }

  componentDidMount(){
  }

  openRetweetModal(){
    this.retweetModal.showRetweetModal();
  }
  //-----------------------------------
  // Views
  //-----------------------------------

  getTweetCardView(card, index){
    return(
      <TweetCardView
        key={index}
        tweetDetails={card}
        openRetweetModalCallback = {() => this.openRetweetModal()}
      />
    )
  };

  getTweets(){
    const { tweetsResponse } = this.state;
    return(
      <div className="position-relative">
        {tweetsResponse.count > 0 ?
          <div className="tweet-card-wrp">
            { tweetsResponse.tweets.map((item, index) =>( this.getTweetCardView(item, index) )) }
          </div> :
          <div className= "data-not-available-wrp">
            <p className="data-not-available">Post your first tweet. </p>
          </div>
        }
      </div>
    )
  }


  
  render() {
    return (
      <div className="App">
        {this.getTweets()}
        <div className= "modal-wrapper">
          <RetweetModalView  onRef={ref => (this.retweetModal = ref)} />
        </div>
      </div>
    );
  }
}

export default HomePage; 
