// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChangeCount = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    //this.setState(prevState => ({count: prevState.count + randomNum}))
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="title"> Random Number </h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onChangeCount}>
            Generate
          </button>
          <p className="count"> {count} </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
