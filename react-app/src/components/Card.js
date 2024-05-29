import React from 'react'
import './Card.scss'
const Card = ({ eventsInfo, cardStyles }) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return (
    <div class="event-card">
      <div class="card-content">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ">
        <div class="card-text">
          <h1>{`${months[parseInt(eventsInfo?.event_date.substr(3, 2))]} ${eventsInfo?.event_date.substr(0, 2)}`}</h1>
          <p>
            {eventsInfo?.event_location}
          </p>
          <p>
            {eventsInfo?.event_state}
          </p>
          <h3>{eventsInfo?.event_time}</h3>
        </div>
        <div class="hr-line"></div>
        <a href={eventsInfo?.learn_more_link} class="more-btn">Learn More</a>
      </div>


      <div class="cutout left"></div>
      <div class="cutout right"></div>
    </div>
  )
}

export default Card