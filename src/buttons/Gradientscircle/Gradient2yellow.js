import React from "react";
import "./Gradient2.css";
class Gradient2 extends React.Component {
    render() {

        const viewBox1 =[0, 0, 1080, 1920]
        return(
            <>
                <svg id="Gradient2loc" viewBox={viewBox1}>
                    <defs ><radialGradient id="Gradient2" cx="0.5" cy="0.5" r="0.5" >
                        <stop offset="20%"  stopColor="#EBC200"/>
                        <stop offset="100%" stopColor="white" stopOpacity="0%" /></radialGradient>
                    </defs>
                    <rect x="140" y="0" rx="10" ry="10" width="800" height="800" fill="url(#Gradient2)" transform={this.props.transform} />
                </svg>
            </>
        )
    }
}
export default Gradient2