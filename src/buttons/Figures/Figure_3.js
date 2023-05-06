import React from "react";
import "./ForFigure_3.css";
class Land1 extends React.Component {
    render() {
        const viewBox2 =[0, 0, 1080, 1920]
        return(
            <>
                <svg id="Land1loc" viewBox={viewBox2}   width="1080" height="1920">
                    <path fill={this.props.fill} transform={this.props.transform}
                    d="M325.4,1355.5H68.9c-12,0-21.8-15.2-21.8-33.9v-7.2c0-18.7,9.7-33.9,21.8-33.9h256.5
	                c12,0,21.8,15.2,21.8,33.9v7.2C347.2,1340.3,337.4,1355.5,325.4,1355.5z"/>
                </svg>

            </>
        )
    }
}
export default Land1