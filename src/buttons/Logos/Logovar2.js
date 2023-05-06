import React from "react";
import "./Logovar2.css";

class Logovar2 extends React.Component{

    render()
    {
        const viewBox2 =[0, 0, 1000, 1000]
        return(
            <>
                <svg id="fonforLogovar2"> </svg>
                <svg  id="Logovar2loc" width="1080" height="1000" viewBox={viewBox2} >
                <ellipse fill="#2c3370" cx="926.38" cy="156.88" rx="91.73" ry="96.25" transform={this.props.transform}/>
                <path fill="#fff" transform={this.props.transform}
                      d="M898.12,99.3l-13.84,40,15.64,46.31h-13l-13-41.7h-.52v51.8H863V107.08h10.34v29.38h.52L885.54,99.3Z"/>
                <path fill="#fff" transform={this.props.transform}
                      d="M918.25,185.62H897.5L895.79,99.3h20.66l1.71,8.85h-10.1v11.3h9.83v8.94h-9.83v38.32h10.19v18.91Z"/>
                <path fill="#fff" transform={this.props.transform}
                      d="M953.73,219.61H916.56V133.29h9.83v76.89h7.87V150.74h9.64v59.44l2.81.09a4.7,4.7,0,0,0,4.7-4.87V144.31L961.7,142l-.18,70.28C961.77,216.43,958,219.75,953.73,219.61Z"/>
                <path fill="#fff" transform={this.props.transform}
                      d="M970.63,195.73v-27.4h-8.9l-1.24,17-9,.28v-62.3a49,49,0,0,1,.59-8.55,9.47,9.47,0,0,1,2.25-5,8.09,8.09,0,0,1,4.46-2.26A39.2,39.2,0,0,1,966,107a40.53,40.53,0,0,1,7.58.58,8.93,8.93,0,0,1,4.68,2.31,9.46,9.46,0,0,1,2.34,4.92,44.57,44.57,0,0,1,.65,8.49v72.41H970.63Zm-4.49-78.6a9.09,9.09,0,0,0-2.25.24,2.6,2.6,0,0,0-1.38.89,3.7,3.7,0,0,0-.64,1.86,30.13,30.13,0,0,0-.14,3.19v28.32h8.9V123.32a22.82,22.82,0,0,0-.18-3.19,4.29,4.29,0,0,0-.64-1.86,2.46,2.46,0,0,0-1.38-.89A9.19,9.19,0,0,0,966.14,117.13Z"/>
                </svg>
            </>
        )
    }
}
export default Logovar2



