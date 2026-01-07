import React, { Component } from "react";
import "./App.css";
import { HomePage } from "./HomePage";

/** Describes set of website pages */
type Page = "home" | "resume" | "projects" | "aboutme";

type WebAppState = {
  page: Page; // stores state for current page
};

/** Displays UI for my website! */
export class WebApp extends Component<{}, WebAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      page: "home",
    };
  }

  render = (): JSX.Element => {
    if (this.state.page === "home") {
      return <HomePage onHomeClick={this.doHomeClick} />;
    } else {
      return <div></div>;
    }
  };

  doHomeClick = (): void => {
    this.setState({ page: "home" });
  };
}

export default WebApp;
