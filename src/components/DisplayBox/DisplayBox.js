import React , {Component} from 'react'
import './DisplayBox.css'
class DisplayBox extends Component{
    render(){
    return(
    <div className="displayBox">
        <img src={this.props.src} alt={this.props.alt} width="100%"></img>
        <div classname="displayBox__caption">
        <h3>{this.props.children}</h3>
        <em>{this.props.tech}</em>
        <div>
            <a href={this.props.link} target="_blank"><button>View</button></a>
        </div>
        </div>
    </div>
    )}
}

export default DisplayBox;