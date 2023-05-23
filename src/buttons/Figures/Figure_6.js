import React from "react";
import "./ForFigure_6.css";
class Land4 extends React.Component {
    render() {
        const viewBox2 =[0, 0,1000, 1960]
        return(
            <>
                <svg id="Land4loc" viewBox={viewBox2}   width="1000px" height="1900px">
                    <path fill={this.props.fill} transform={this.props.transform} d="M611.8,759.2c-86.2-37.2-236.1,13.5-253.3,106.6c-12,65.2,44.6,130.9,91.8,161.6
		            c44.9,29.1,100.2,28.4,209,25.8c132.5-3.1,199.5-5.5,234.3-45.2c46.9-53.5,52.1-152.6,13.6-184.2c-45.1-37.1-121.5,42.1-213.1,0
		            C648.8,803,654.1,777.5,611.8,759.2z"/>
                </svg>

            </>
        )
    }
}
export default Land4