import React, {Component} from 'react'
import './ContactPage.css'
import li from "../../assets/images/li.JPG"

class ContactPage extends Component{

    
    render(){
        return(
            <div className="contact">

                <div className="contact__column">
                <div>
                <a href='https://nz.linkedin.com/in/anandamohanram'><img src={li} alt="Ananda Mohanram" width="250px"/></a></div>
                </ div>

                <div className="contact__column" style={{textAlign:'right'}}>
                 ✆ 0224615592  <br /> 1A Donegal Street <br /> Avondale, Auckland <br />
                <br />  anandamohanram.com <br /> anandamohanram@gmail.com <br />
                <div><iframe title="map" width="250px" frameBorder="0" style={{marginTop:"15px"}}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBbA4QdBMFgXVxu1y_eM3YkAx6TpMAz4UU&q=Donegal+Street,Avondale" allowFullScreen>
                </iframe></div>
            </ div>
            </div>
        );
    }
}

export default ContactPage;