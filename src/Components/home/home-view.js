import React, { Component } from 'react';
import '../../App.css';
import TweetCardView from '../common/tweet-card-view/tweet-card-view';
import RetweetModalView from '../modal/retweet-modal-view';
import HeaderView from '../header/header-view';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweetsResponse: {
        count: 4,
        tweets:[
          {
            id : 0,
            name: 'Cessi',
            description: 'Sample tweet 1',
            selectedTweet: ""
          },
          {
            id : 1,
            name: 'Messi',
            description: 'Sample tweet 2',
            selectedTweet: ""
          },
          {
            id : 2,
            name: 'Monica',
            description: 'Sample tweet 3',
            selectedTweet: ""
          },
          {
            id : 3,
            name: 'Mike',
            description: 'Sample tweet 4',
            selectedTweet: ""
          },
          {
            id : 4,
            name: 'Ron',
            description: 'Sample tweet 5',
            selectedTweet: ""
          },
        ]
      }
    }
  }

  init(){
    this.getTweets();
  }

  // To open the retweet modal
  openRetweetModal(data){
    this.retweetModal.showRetweetModal(data);
  }

  // To retweet the post on timline
  submitRetweet(data){
    const { tweetsResponse } = this.state;
    let count = this.state.tweetsResponse.count;
    let tweets  = this.state.tweetsResponse.tweets;
    let new_state = Object.assign({}, this.state); 
    let a = JSON.parse(JSON.stringify(new_state.tweetsResponse.tweets))
    a[tweetsResponse.count+1] = data[0];
    tweetsResponse['count'] = tweetsResponse.count+1;
    tweetsResponse['tweets'] = a;

    this.setState({
      tweetsResponse,
    });
    this.retweetModal.close();

    this.componentDidMount();
  }

  //-----------------------------------
  // Views
  //-----------------------------------

  // To display tweets cards | created as a common component
  getTweetCardView(card, index){
    let acountHolderDetails = this.props.acountHolderDetails;
    return(
      <TweetCardView
        key={index}
        tweetDetails={card}
        openRetweetModalCallback = {(data) => this.openRetweetModal(data)}
        accountHolderName = {acountHolderDetails}
      />
    )
  };

  // To display tweets
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

  componentDidMount(){
    this.init();
  }
  
  render() {
    let headerTitle = "Home Page"

    return (
      <div className="App">
      	<HeaderView headerTitle = {headerTitle}/>
        {this.getTweets()}
        <div className= "modal-wrapper">
          <RetweetModalView  onRef={ref => (this.retweetModal = ref)} 
          submitRetweetCallback = {(params) => this.submitRetweet(params)}
          />
        </div>
      </div>
    );
  }
}

export default HomePage; 
