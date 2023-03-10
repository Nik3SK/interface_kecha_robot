import React from "react";

class UpdateTile extends React.Component {
    render() {
        this.this.props.tile1.innerText = "";
        this.props.tile1.classList.value = ""; //clear the classList
        this.props.tile1.classList.add("tile");
        if (this.props.num1 > 0) {
            this.props.tile1.innerText = this.props.num1.toString();
            if ( this.props.num1<= 4096) {
                this.props.tile1.classList.add("x" + this.props.num1.toString());
            } else {
                this.props.tile1.classList.add("x8192");

            }
        }
        return
    }
}
export default UpdateTile