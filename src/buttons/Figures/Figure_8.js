import React from "react";
import "./ForFigure_8.css";
class Landforinf1 extends React.Component {
    render() {

        const viewBox =[0, 0, 595.28, 289.13]
        return(
            <>
                <svg id="landforinf1" >
                     viewBox={viewBox}
                    <path fill={this.props.fill} transform={this.props.transform} d="M5.55,163.12c-20.35-60.22,26.85-155.08,74-162c31.57-4.63,63.78,30.07,73,40c17.49,18.84,24.64,36.89,52,102
	                 l0,0l0,0l0,0l0,0c29.41-2.56,44.11-3.84,45-4c46.51-8.16,50.16-55.68,81-57c41.22-1.77,81.26,81.09,85,89
	                 c13.25,28.02,10.86,38.4,25,49c22.92,17.2,46.09,2.59,89,12c30.19,6.62,66.27,24.27,65,33C589.85,297.37,58.62,320.14,5.55,163.12z"
                    />
                </svg>

            </>
        )
    }
}
export default Landforinf1