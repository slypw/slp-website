import React from "react";
import Butterfly from "../components/Butterfly";
import { Page } from "../blogsData"; // adjust path if needed

type PageProps = {
  goToPage: (page: Page) => void;
};

const Home: React.FC<PageProps> = ({ goToPage }) => (
  <div className="page home-page">
    <Butterfly />
    <h1 className="name">Saan Lily Popović</h1>
    <p className="tagline">Сан Лили Поповић</p>
  </div>
);

export default Home;
