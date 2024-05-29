import React from 'react';
import './App.scss';
import Container from './components/Container.js';


function App({ moduleData }) {


  const regionFilterList=[{region_name:"All", region_id:"all"}, ...moduleData.filter_settings.region_filter]
 
  return (
    <Container eventDetails={moduleData.event_details} regionFilterList={regionFilterList} cardStyles={moduleData.card_styles}/>
  );
}
   
export default App;
