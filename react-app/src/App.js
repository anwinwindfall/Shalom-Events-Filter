import React, { useContext } from 'react';
import './App.scss';
import Container from './components/Container.js';
import CardStandalone from './components/CardStandalone.js';


function App({ moduleData }) {

  const regionFilterList = [{ region_name: "All", region_id: "all" }, ...moduleData.filter_settings.region_filter]

  return (
    <>
    {
      moduleData.module_type == "card" ? (<CardStandalone eventDetails={moduleData.event_details_card} cardStyles={moduleData.card_styles}/>) : (
        <Container eventDetails={moduleData.event_details} regionFilterList={regionFilterList} cardStyles={moduleData.card_styles} />
      )
    }
    </>
  );
}

export default App;
