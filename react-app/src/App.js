import React from 'react';
import './App.scss';
import './components/Card'
import Card from './components/Card';
import Input from './components/Input.js';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  const regionFilterList=[{region_name:"All", region_id:"all"}, ...moduleData.filter_settings.region_filter]      

  return (
    <div className="sw-events-class">
       <ul className='sw-switch-container'>
          <li>Current</li>
          <li>Past</li>
        </ul>
      <div className='sw-events-filter-header'>
        <ul class="sw-menu">
          <li>ALL</li>
          <li class="active">USA</li>
          <li>CANADA</li>
          <li>IRELAND</li>
          <li>UK</li>
          <li>AUSTRALIA</li>
        </ul>
        <Input/>
      </div>
      <div className="sw-events-filter__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>

  );
}
   
export default App;
