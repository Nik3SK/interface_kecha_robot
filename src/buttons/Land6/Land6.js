import React from "react";
import "./Land6.css";
class Land6 extends React.Component {
    render() {
        const viewBox2 =[0, 0, 1000, 1600]
        return(
            <>
                <svg id="Land6loc" viewBox={viewBox2} width="1000" height="1800" >
                    <path
                        fill={this.props.fill} transform={this.props.transform}
                          d="M908.11,1391.89H168.32c-34.66,0-62.76-27.18-62.76-60.71v-12.92c0-33.53,28.1-60.71,62.76-60.71H908.11c34.67,0,62.77,27.18,62.77,60.71v12.92C970.89,1364.71,942.79,1391.89,908.11,1391.89Z"/>
                </svg>

            </>
        )
    }
}
export default Land6