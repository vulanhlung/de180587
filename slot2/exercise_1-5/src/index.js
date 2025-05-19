import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NamePerson from "./NamePerson";
import PeopleList from "./PeopleList";
import PersonDetails from "./PersonDetails";
import reportWebVitals from "./reportWebVitals";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortPeople from "./Sort";
import GroupByOccupation from "./GroupByOccupation";
import FindOldestYoungest from "./FindOldestYoungest";
import AverageAgeByOccupation from "./AverageAgeByOccupation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PeopleList />
    <PersonDetails />
    <FirstTeenager/>
    <AreAllTeenagers/>
    <SortPeople/>
    <GroupByOccupation/>\
    <FindOldestYoungest/>
    <AverageAgeByOccupation/>
  </React.StrictMode>
);

reportWebVitals();
