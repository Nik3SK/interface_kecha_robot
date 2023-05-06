import React from "react";
import "./Getmail.css"
import axios from "axios";
import Timetable from "./Timetable";
class Getmail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            Email:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
      axios.post('http://localhost:5000/data',{ml:this.state.Email})
    }
render() {
        return(
            <><svg id="fonforGetmail"></svg>
            <div id="fas">
            <p>{this.state.Email}</p>

            <input placeholder="напиши свою почту"
            onChange={event => this.setState({Email:event.target.value})}/>
            <button onClick={this.handleSubmit} > clickkkkk</button>
            </div>
                <Timetable/>
            </>
        )
};

}
export default Getmail