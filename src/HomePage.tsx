import React, { Component, MouseEvent } from "react";
import "./index.css";

type HomePageProps = {
  // Called to ask parent to go to home page
  onHomeClick: () => void;
};

export class HomePage extends Component<HomePageProps> {
  render = (): JSX.Element => {
    return (
      <body>
        <p>Hi</p>
      </body>
    );
  };

  doHomeClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.props.onHomeClick();
  };
}
