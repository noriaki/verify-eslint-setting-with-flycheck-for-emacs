import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state text',
    };
  }

  update (e) {
    this.setState({
      txt: e.target.value,
    })
  }

  render(){
    return(
      <div>
        <p>Text: {this.state.txt}</p>
        <input name="" type="text" onChange={this.update.bind(this)} />
      </div>
    )
  }
}

export const Person = (props) => <h4>{props.name}</h4>;

export default App;
