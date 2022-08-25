import React, {Component} from 'React';
import eventBus form './EventBus';

class Provider extends Component {
  constructor(props) {
    super(props);
  }
  applyData = () => {
    eventBus.dispatch("chatData", { message: "User Clicked"});
  };
  render() {
    reurn(
         <button name='clickme' id='clickme' value='Click Me' onClick={this.applyData}/>
      );
  }
}
