import React from "react";
import "./ForFigure_1.css";
class Buttonmain1 extends React.Component {
    render() {

        const viewBox2 =[0, 0, 666.14, 345.83]
        return(
            <>
                <svg className="Buttonmain1loc" viewBox={viewBox2} width="1000"
                height="1900">
                    <path fill={this.props.fill} transform={this.props.transform}
                          d="M659.73,211.49c28.56-73.94-55.41-202.22-138-211c-114.61-12.19-192.07,209.44-308,187
	                c-62.86-12.17-82.08-85.46-134-77c-45,7.33-89.03,71.91-77,113C38.52,345.72,600.76,364.18,659.73,211.49z"/>
                </svg>

            </>
        )
    }
}
export default Buttonmain1