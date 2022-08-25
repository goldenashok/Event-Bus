import React, {Component} from 'React';
import eventBus from './EventBus';

class Consumer extends Components {
  construction(props) {
    super(props)
    this.state={
      message: ''
    }
  }
  componentDidMount() {
    eventBus.on('chatData', (data) => 
      this.setState('message', data.message);
  }
  componentWillUnMount(){
    eventBus.remove('chatData');
  }
  
  render(){
    return(
      <div>{this.state.messge}</div>
      )
  }
}
