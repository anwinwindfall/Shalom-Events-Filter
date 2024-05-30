import React from 'react'
import './CardStandalone.scss';


const CardStandalone = ({eventDetails, cardStyles}) => {
    const primary=cardStyles.primary_color.rgba
  const secondary=cardStyles.secondary_color.rgba
  return (
    <div className='event-card-wrapper'>
    <div class="event-standalone-card">
      <div class="card-content">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        <div class="card-text">
          <h1 style={{color:primary}}>{eventDetails?.title}</h1>
          <p style={{color:secondary}}>
            {eventDetails?.location}
          </p>
        </div>
        <div class="hr-line"></div>
        <h3 style={{color:primary}}>{eventDetails?.time}</h3>
      </div>


      <div class="cutout left"></div>
      <div class="cutout right"></div>
    </div>
    <a href={eventDetails.reg_link} style={{backgroundColor:`${cardStyles.reg_button_color.rgba}`,color:`${cardStyles.reg_button_text_color.rgba}`}} className='reg-link'>Register Now</a>
    </div>
  )
}

export default CardStandalone