import React from 'react'
import './OrganisationCard.css'

const OrganisationCard = props => (
    <div>
        <div className="orgWrapper">
            <div>
              <h4>{props.title} </h4> <h6>{props.time}</h6>
              <h5>{props.subtitle}</h5>
            </div>
            <div>
              <img src={props.img} alt={props.alt} width="150px;"/>
            </div>
        </div>
    </div>
);

export default OrganisationCard;