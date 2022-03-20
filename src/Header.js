import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css";

const Header = () => {

    const clickStyl = (isActive) => {
        return {
            color: isActive? "red" : "black"
        }
    }

        return(
            <>
            <div className="header">
                <NavLink  style={({isActive})=>clickStyl(isActive)} to="/home" className="header1">Home</NavLink>
                <NavLink style={({isActive})=>clickStyl(isActive)} to="/category/tourism" className="header1">Tourism</NavLink>
                <NavLink style={({isActive})=>clickStyl(isActive)} to="/category/fitness" className="header1">Fitness</NavLink>
                <NavLink style={({isActive})=>clickStyl(isActive)} to="/category/food" className="header1">Food</NavLink>
                <NavLink style={({isActive})=>clickStyl(isActive)} to="/category/technology" className="header1">Technology</NavLink>
            </div>
            <hr/>
            </>
        )
    }

export default Header;