import React from 'react';
import './App.scss';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  const regionFilterList=[{region_name:"All", region_id:"all"}, ...moduleData.filter_settings.region_filter]
  return (
    
    <div className="sw-events-filter__container">
      
    </div>
  );
}
   
export default App;
