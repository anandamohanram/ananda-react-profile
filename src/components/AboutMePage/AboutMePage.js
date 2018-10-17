import React, {Component} from 'react'
import './AboutMePage.css'

class AboutMePage extends Component{
    render(){
        return(
            <div className="aboutMeWrapper">

            <div className="aboutMeWrapper__sidebox">
                <center><h2>Who Am I ?</h2>
                 Simple is beautiful.</center>
                 <p>
                     I am a 25 year old front-end web developer from India.
                     For the last four years, I have been converting designs to 
                     user experiences suited to the device they are using.  
                </p>
                <p>
                     I, like all human beings, prefer things to be simple. My mentor once told me <em>'Simplicity simply sells'. </em>
                     And I strongly believe in it. Hence I love removing the obvious and add things that actually matter.  
                </p>
                <p>
                     I am <i className="name">ananda mohanram.</i> 
                </p>
            </div>

            <div className="aboutMeWrapper__box">
                <h2>What I do ?</h2>
                <div className="skills">
                <div className="skillColumn">
                HTML5
                    <div className="bar">
                         <span style={{width: "95%"}}></span>
                    </div>
                
                CSS3
                    <div className="bar"> 
                         <span style={{width: "90%"}}></span>
                    </div>

                Bootstrap
                    <div className="bar"> 
                         <span style={{width: "90%"}}></span>
                    </div>    
                
                JavaScript
                    <div className="bar"> 
                         <span style={{width: "85%"}}></span>
                    </div>
                </div>

                <div className="skillColumn">
                React, Redux
                    <div className="bar">
                         <span style={{width: "75%"}}></span>
                    </div>
                
                Jest
                    <div className="bar"> 
                         <span style={{width: "60%"}}></span>
                    </div>
                
                Photoshop
                    <div className="bar"> 
                         <span style={{width: "70%"}}></span>
                    </div>

                Git/Svn
                    <div className="bar"> 
                         <span style={{width: "80%"}}></span>
                    </div>    
                </div>
                And, I do love travelling, riding, movies, music and  my camera ❤.  
                </div>
                </div>   
            </div>            
        );
    }
}

export default AboutMePage;