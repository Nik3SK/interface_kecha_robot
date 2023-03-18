import React from "react";
import "./plyamWeather.css";
class PlyamWeather extends React.Component {
    render() {
        const viewBox2 =[0, 0, 668.98, 297.64]
        return(
            <>
                <svg id="plyamweatherloc">
                    viewBox={viewBox2}
                    <path id="plyamweather" d="M633.32,158.9c-57.21-101.46-85.81-152.2-126-158c-74.54-10.77-160.34,96.88-170,109
	c-23.44,29.41-26.19,43.36-45,49c-58.07,17.43-115.05-90.52-162-73c-29.67,11.07-16.31,57.7-65,106c-35.13,34.85-65.52,33.82-65,48
	c0.98,26.99,111.97,56.53,220,49c59.03-4.11,57.68-15.15,113-16c79.33-1.22,94.21,21.29,174,24c36.36,1.24,138.82,4.72,159-41
	C670.75,245.87,673.04,229.34,633.32,158.9z"/>
                </svg>

            </>
        )
    }
}
export default PlyamWeather