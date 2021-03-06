import React from "react";
import headBar from "./OverHeadBar.module.css";
import logo from '../assets/tangerinerye_logo.png';
import {ClickHeadBar} from "../Component/ClickButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function OverHeadBar(props) {
    return (
        <div className={headBar.center}>
            <img className={headBar.logo} src={logo} alt="Tangerine Rye logo" />
            <hr />
            <div className={headBar.bar}>
                <div className={headBar.side}></div>
                <div className={headBar.buttons}>
                    <ClickHeadBar path='' name='PORTAL' currentPage={props.currentPage}/>
                    <ClickHeadBar path='music' name='MUSIC' currentPage={props.currentPage}/>
                    <ClickHeadBar path='tour' name='TOUR' currentPage={props.currentPage}/>
                    <ClickHeadBar path='merch' name='SHOP' currentPage={props.currentPage}/>
                    <ClickHeadBar path='about' name='ABOUT' currentPage={props.currentPage}/>
                </div>
                <div className={headBar.side}>
                    <ClickHeadBar path='cart' name='cart' endIcon={<ShoppingCartOutlinedIcon />} currentPage={props.currentPage} />
                </div> 
            </div>
            <hr />
        </div>
    )
}

export default OverHeadBar;