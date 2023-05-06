import React from "react";
import "./ForFigure_5.css";
class Land3 extends React.Component {
    render() {
        const viewBox2 =[0, 0, 680, 1320]
        return(
            <>
                <svg id="Land3loc" viewBox={viewBox2} width="980"  height= "1420" >
                    <path fill={this.props.fill} transform={this.props.transform} d="M186.1,505.9c-47.3,19.9-70.9,29.9-77.8,49.7c-14.2,40.7,28.9,110.4,83.8,129.2
	c68.5,23.5,161.6-30,164.6-99.4c1.9-43.9-32.5-90.5-71.8-102.7C259.8,474.9,235.2,485.2,186.1,505.9z"/>
                </svg>

            </>
        )
    }
}
export default Land3