import React from "react";
import "./Gradient1.css";
class Gradient1 extends React.Component {
    render() {

        const viewBox1 =[0, 0, 1080, 1920]
        return(
            <>
                <svg id="Gradient1loc" viewBox={viewBox1}>
                    <defs ><radialGradient id="Gradient1" cx="0.5" cy="0.5" r="0.5" >
                        <stop offset="20%"  stopColor="#A592C5"/>
                        <stop offset="100%" stopColor="white" stopOpacity="0%" /></radialGradient>
                    </defs>
                    <rect x="140" y="0" rx="10" ry="10" width="800" height="800" fill="url(#Gradient1)" transform={this.props.transform} />
                </svg>
            </>
        )
    }
}
export default Gradient1