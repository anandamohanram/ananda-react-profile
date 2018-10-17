import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
import HTMLLogo from '../../assets/images/html.png'
import CssLogo from '../../assets/images/css.png'
import JSLogo from '../../assets/images/js.png'
import ReactLogo from '../../assets/images/react.png'
import am from '../../assets/images/am_logo_trans.png'

class LandingPage extends Component{
    state={viewButtons:true,
            displayBox:false};

    componentDidUpdate(){
    }

    componentDidMount(){
        setTimeout(()=>{this.setState({displayBox:true})},50)
        setTimeout(()=>{this.setState({viewButtons:false})},3000)
    }
     
    render(){
                let displayBox = (this.state.displayBox ? "wrapper__box showWrapper__box": "wrapper__box");
                let buttonsClass, textClass, brandTitleClass;
                if(this.state.viewButtons){
                    buttonsClass = "wrapper__navButtons showButtons";
                    textClass = "blur";
                    brandTitleClass = "brandTitle showButtons"
                }
                else{
                    buttonsClass = "wrapper__navButtons";
                    textClass = "";
                    brandTitleClass = "brandTitle"
                }
 
            
        return(
            <div className="wrapper">
            
             <div className={displayBox} onMouseOver={()=>{this.setState({viewButtons:true})}} onMouseOut={()=>{this.setState({viewButtons:false})}}>       
            
            <div className={brandTitleClass}>
            <div><img src={am} alt="am" width="80px"/> </div> <div>ananda mohanram </div>
            </div>
            
            <div className={textClass}> <h2>ananda mohanram</h2>
            <h1>Front-end UI Developer</h1>
            <hr width='100%'/>
            <span />
            <div className="wrapper__icons">
                <img src={HTMLLogo} alt="HTML5"    />
                <img src={CssLogo} alt="CSS3"      />
                <img src={JSLogo} alt="JavaScript" />
                <img src={ReactLogo} alt="React"   />
            </div>
            <div>This site is built using React 16 </div> </div>
            <div className={buttonsClass}>
            <div><Link to="/aboutme" style={{"textDecoration": "none"}}><button>About&nbsp;Me</button></Link></div>
            <div><Link to="/contact" style={{"textDecoration": "none"}}><button>Contact</button></Link></div>
            <div><Link to="/resume" style={{"textDecoration": "none"}}><button>Resume</button></Link></div>
            <div><Link to="/portfolio" style={{"textDecoration": "none"}}><button>Portfolio</button></Link></div>
            </div>
            </div>

            
            </div>
        );
    }
}

export default LandingPage;