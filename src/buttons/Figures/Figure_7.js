import React from "react";
import "./ForFigure_7.css";
class Land5 extends React.Component {
    render() {
        const viewBox2 =[0, 0, 1080, 1920]
        return(
            <>
                <svg id="Land5loc" viewBox={viewBox2} width="1000" height="1900">
                    <path fill={this.props.fill} transform={this.props.transform}
                          d="M956.33,525.64c-38.33-60.24-196.94-67-345.61-73.28-154-6.54-326.83-13.88-430.95,57-18,12.26-77,56.2-68.27,113.08,10.76,69.82,117.76,120.6,209.07,136.1C458.59,782,604,732.17,649.12,716.7c27.76-9.51,58.89-22.44,115.2-36.64,77.21-19.47,96.75-14.84,128-28.79C949.67,625.69,982.2,566.3,956.33,525.64Z"/>
                </svg>

            </>
        )
    }
}
export default Land5










