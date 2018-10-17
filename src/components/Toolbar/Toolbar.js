import React, {Component} from 'react'

import Navbar from '../Navbar/Navbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import logo from '../../assets/images/am_logo_trans.png'
import Backdrop from '../Backdrop/Backdrop'

class Toolbar extends Component{

    state={
        sideDrawerShow : false
    }

    toggleSidebar = () => {
        this.setState((prevState)=>{
          return({sideDrawerShow : !prevState.sideDrawerShow});
        });
    }

    render(){
        let backdrop;

    if(this.state.sideDrawerShow){
      backdrop = <Backdrop clicked={this.toggleSidebar}/>;
    }
    else{
      backdrop = null;
    }
        return(
            <React.Fragment>
            <Navbar logo={logo} title="ananda mohanram" hamBurgerClicked={this.toggleSidebar}/>
            <SideDrawer show={this.state.sideDrawerShow} clicked={this.toggleSidebar}/>
            {backdrop}
            </React.Fragment>
        );
    }
}

export default Toolbar;