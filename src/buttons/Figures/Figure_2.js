import React from "react";
import "./ForFigure_2.css";
class Figure_2 extends React.Component {
    render() {
        const viewBox2 =[0, 0, 2000, 2000]
        return(
            <>
                <svg id="featherloc" viewBox={viewBox2} width="1000" height="1900">
                    <path fill={this.props.fill} transform={this.props.transform} d="M260.65,188.58c131.94-123.79,379.92-246.34,521-156c118.5,75.88,115.82,272.66,113,381
	c-14.81,567.98-437.98,1202.79-663,1143C-13.39,1491.47-146.01,570.1,260.65,188.58z"/>
                </svg>

            </>
        )
    }
}
export default Figure_2