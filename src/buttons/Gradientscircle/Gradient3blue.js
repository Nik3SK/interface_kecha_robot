import React from "react";
import "./Gradient3blue.css";
class Gradient3 extends React.Component {
    render() {

        const viewBox1 =[0, 0, 1080, 1920]
        return(
            <>
                <svg id="Gradient3loc" viewBox={viewBox1}>
                    <defs ><radialGradient id="Gradient3" cx="0.5" cy="0.5" r="0.5" >
                        <stop offset="20%"  stopColor="skyblue "/>
                        <stop offset="100%" stopColor="white" stopOpacity="0%" /></radialGradient>
                    </defs>
                    <rect x="140" y="0" rx="10" ry="10" width="800" height="800" fill="url(#Gradient3)" transform={this.props.transform} />
                </svg>
            </>
        )
    }
}
export default Gradient3