import { createContext, Component } from "react";
import dispatch from "./Dispatcher";

const AppContext = createContext();
const AppContextConsumer = AppContext.Consumer;

class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dispatch: this.onDispatch,
      subscribe: this.onSubscribe,
      user: { username: undefined, token: undefined },
      meters: [],
    };
  }

  onDispatch = (action) => {
    const stateUpdate = dispatch(this.props.api, action);
    if (stateUpdate) {
      this.setState(stateUpdate);
    }
  };

  onSubscribe = (source) => {
    return this.props.api.subscribe(source, (values) => this.setState(values));
  };

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    );
  }
}

export { AppContextConsumer, AppContextProvider };
export default AppContext;
