import React from "react";
import {
    BrowserRouter,
    Outlet,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Events from "../Events/Events";
import Component1 from "../Component1/component1";
import "./Component3.css";
class Component3 extends React.Component{

    render()
    {
        return(
            <>
                <svg id="fonforcompon3"></svg>
                <Link id="link1compon3" to='student'>Хочешь поступить?</Link>
                <Link id="link2compon3"  to='visiter'>Главное меню</Link>
                <Outlet/>
            </>
        )
    }
}
export default Component3