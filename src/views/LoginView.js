import React, { Component } from "react";
import { AppContextConsumer } from "../AppContext";

export default class LoginView extends Component {
  state = {
    user: {
      name: undefined,
      password: undefined,
    },
  };

  render() {
    return (
      <AppContextConsumer>
        {(context) => (
          <div>
            Username:
            <input
              type="text"
              value={this.state.user.name || ""}
              onChange={(ev) =>
                this.setState({ user: { name: ev.target.value } })
              }
            />
            Password:
            <input
              type="password"
              value={this.state.user.password || ""}
              onChange={(ev) =>
                this.setState({ user: { password: ev.target.value } })
              }
            />
            <button
              onClick={() =>
                context.dispatch({
                  action: "login",
                  username: this.state.user.name,
                  password: this.state.user.password,
                })
              }
            >
              Login
            </button>
          </div>
        )}
      </AppContextConsumer>
    );
  }
}
