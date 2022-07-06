import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import TopContainer from "./containers/TopContainer/TopContainer";
import { ChildContainer } from "./containers/ChildContainer/ChildContainer";
import Dropbox from "./components/DropDown/Drop";
import { Footer } from "./containers/Footer/Footer.style";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TopContainer />
    <ChildContainer />
    <Dropbox/>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
