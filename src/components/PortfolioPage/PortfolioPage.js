import React, {Component} from 'react'
import './PortfolioPage.css'
import DisplayBox from '../DisplayBox/DisplayBox'

import game from "../../assets/images/game.JPG"
import searchBar from "../../assets/images/searchBar.jpg"
import brackets from "../../assets/images/brackets.JPG"
import tictac from "../../assets/images/tictac1.JPG"
import toDoReact from "../../assets/images/todorx.JPG"
import toDoRedux from "../../assets/images/todord.JPG"
import capapp from "../../assets/images/capapp.JPG"
import bspage from "../../assets/images/bspage.JPG"
import spa from "../../assets/images/spa.JPG"
import weather from "../../assets/images/weatherApi.JPG"


class PortfolioPage extends Component{
    render(){
        return(
            <div><h1>PortfolioPage</h1>
            <div className="portfolio">
                <DisplayBox src={tictac} alt="React Tic Tac Toe" tech="React" link="https://codesandbox.io/s/82v03ko598"> Tic Tac Toe</DisplayBox>
                <DisplayBox src={toDoRedux} alt="Redux ToDo with filters" tech="React, Redux" link="https://codesandbox.io/s/52646l897x"> To Do App - Redux </DisplayBox>
                <DisplayBox src={toDoReact} alt="React ToDo App" tech="React" link="https://codesandbox.io/s/64wnomq6n3"> To Do App - React</DisplayBox>                
                <DisplayBox src={bspage} alt="Bootstrap Responsive Page" tech="Bootstrap, RWD" link="https://anandamohanram.github.io">Responsive Bootstrap Page</DisplayBox>
                <DisplayBox src={game} alt="Mini Game" tech="HTML, CSS, jQuery" link="https://game-6b41a.firebaseapp.com/"> Mini Game </DisplayBox>
                <DisplayBox src={capapp} alt="ShoppingCart" tech="Bootstrap, jQuery" link="http://dochyper.unitec.ac.nz/mohana04/asp_application2">Shopping Cart</DisplayBox>
                <DisplayBox src={weather} alt="Weather App" tech="Restful API, React" link="http://weather-ananda.firebaseapp.com/">Weather App - Restful API</DisplayBox>
                <DisplayBox src={spa} alt="React SPA" tech="React, React-router, RWD" link="http://anandamohanram.com"> React SPA</DisplayBox>
                <DisplayBox src={searchBar} alt="Search bar toggle" tech="CSS3, jQuery" link="https://codepen.io/MAGuruparan/pen/XYGVEq"> Search Bar Toggle</DisplayBox>
                <DisplayBox src={brackets} alt="Balancing Brackets" tech="Javascript, REGEX" link="https://codepen.io/MAGuruparan/pen/dKWYwz"> Balancing Brackets</DisplayBox>
                
            </div>
            </div>
        );
    }
}

export default PortfolioPage;