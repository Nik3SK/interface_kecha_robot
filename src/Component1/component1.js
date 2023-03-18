import React from "react";
import "./designforcomp1.css"
import Face from "../buttons/face";
import Landforinf1 from "../buttons/landforinf1";
import Landforinf2 from "../buttons/landforinf2";

class Component1 extends React.Component{

    render()
    {
        return(

            <div  id="fon">
                <Face/>
                <Landforinf1/>
                <Landforinf2/>
            </div>
        )
    }
}
export default Component1