import React from "react";
import "./ForFigure_4.css";
class Land2 extends React.Component {
    render() {
        const viewBox2 =[0, 0, 880, 1520]
        return(
            <>
                <svg id="Land2loc" viewBox={viewBox2} width ="1080"  height="1920">
                    <path fill={this.props.fill} transform={this.props.transform} d="M231.7,479c-64.9,22.7-86.4,54.9-91.2,62.5c-27.7,43.9-26.3,105.7,7,148
	                c34.9,44.3,92.5,51.3,129.8,55.9c37.7,4.6,52.4-1.6,140.3-6.6c56.2-3.2,51.6-0.9,94.7-3.3c116.2-6.4,121.4-14.2,196.4-19.7
	                c76.7-5.6,96.5,17.4,143.8,3.3c12.9-3.9,89.5-26.7,112.2-95.4c16.9-51-6.6-94.8-10.5-101.9c-3.1-5.6-28.1-48.9-80.7-65.8
	                c-49-15.7-86.6,3-143.8,16.5c-60.2,14.2-112.6,12.7-217.5,9.9C359.2,478,318.1,448.8,231.7,479z"/>
                </svg>

            </>
        )
    }
}
export default Land2