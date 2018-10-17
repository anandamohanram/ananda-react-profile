import React from 'react'
import './Main.css'
import {Switch, Route} from 'react-router-dom'
import Landing from '../LandingPage/LandingPage'
import AboutMe from '../AboutMePage/AboutMePage'
import Contact from '../ContactPage/ContactPage'
import Resume from '../ResumePage/ResumePage'
import Portfolio from '../PortfolioPage/PortfolioPage'


const Main = () => {
    return(
        <main className='Main'>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        </main>
    );
}

export default Main;