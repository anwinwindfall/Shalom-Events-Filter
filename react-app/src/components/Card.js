import React, { useContext } from 'react'
import './Card.scss'
const Card = ({ eventsInfo, cardStyles }) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const primary=cardStyles.primary_color.rgba
  const secondary=cardStyles.secondary_color.rgba
  return (
    <div class="event-card">
      <div class="card-content">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ">
        <div class="card-text">
          <h1 style={{color:primary}}>{`${months[parseInt(eventsInfo?.event_date.substr(3, 2))-1]} ${eventsInfo?.event_date.substr(0, 2)}`}</h1>
          <p style={{color:secondary}}>
            {eventsInfo?.event_location}
          </p>
          <p style={{color:secondary}}>
            {eventsInfo?.event_state}
          </p>
          <h3 style={{color:primary}}>{eventsInfo?.event_time}</h3>
        </div>
        <div class="hr-line"></div>
        <a style={{color:primary, borderColor:primary}} href={eventsInfo?.learn_more_link} class="more-btn">Learn More</a>
      </div>


      <div class="cutout left"></div>
      <div class="cutout right"></div>
    </div>
  )
}

export default Card