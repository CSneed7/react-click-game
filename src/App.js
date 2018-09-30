import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";


function random(array){
  for(let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  return array
  
  }
}


class App extends Component {
  state = {
    friends: friends,
    score: 0,
    topScore: 0,
    friendClicked: []
  };

  componentDidMount(){
    this.setState({
      friends: random(this.state.friends)
    })
  }


  Countclick = id => {
    let friendClicked = this.state.friendClicked;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if(friendClicked.indexOf(id) === -1){
      friendClicked.push(id);
      console.log(friendClicked);

      this.handleIncrement();

      this.handleRandom();

    }
    else if(this.state.score === 12){
      alert("You win");
      this.setState({
        score: 0,
        friendClicked: [],
        message: "You win"
      });
    }
    else {
      this.setState({
        score: 0,
        friendClicked: [],
        message: "You lose, try again"
      });
      console.log("same friend clicked");
      alert("you lose, try again");
    }
    if(score > topScore){
      this.setState({
        topScore: score
      })
    }
  }

    handleIncrement = () => {
      this.setState({ score: this.state.score + 1 });
    };
    handleRandom = () => {
      this.setState({ friends: random(this.state.friends) })
    }

  render() {
    return (
      <div>

      <Navbar score={this.state.score} topScore={this.state.topScore}/>
      <Header/>
      <Wrapper>

        
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            Countclick={this.Countclick}
          />
        ))}
      </Wrapper>

      </div>
    )
  }
}

export default App;
