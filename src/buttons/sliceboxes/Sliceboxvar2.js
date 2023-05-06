import React from "react";
import "./forSliceBoxvar2.css";
class Buttom3d extends React.Component {
    render() {

        const viewBox1 =[0, 0, 1080, 1920]
        return(
            <>
                <svg id="but3dloc" viewBox={viewBox1}>
                    <path fill={this.props.fill1} transform={this.props.transform1}
                        d="M461.4,1821.7H176.9c-34.9,0-63.2-27.2-63.2-60.7v-79.9c0-33.5,28.3-60.7,63.2-60.7h284.5
	                c34.9,0,63.2,27.2,63.2,60.7v79.9C524.6,1794.5,496.3,1821.7,461.4,1821.7z"/>
                    <path  fill={this.props.fill2} transform={this.props.transform2}
                        d="M550.2,1821.7H265.7c-34.9,0-63.2-27.2-63.2-60.7v-79.9c0-33.5,28.3-60.7,63.2-60.7h284.5
	                c34.9,0,63.2,27.2,63.2,60.7v79.9C613.4,1794.5,585.1,1821.7,550.2,1821.7z"/>
                    <path fill={this.props.fill3} transform={this.props.transform3}
                        d="M638.9,1821.7H354.5c-34.9,0-63.2-27.2-63.2-60.7v-79.9c0-33.5,28.3-60.7,63.2-60.7h284.5
	                c34.9,0,63.2,27.2,63.2,60.7v79.9C702.2,1794.5,673.8,1821.7,638.9,1821.7z"/>
                    <path fill={this.props.fill4} transform={this.props.transform4}
                        d="M727.7,1821.7H443.2c-34.9,0-63.2-27.2-63.2-60.7v-79.9c0-33.5,28.3-60.7,63.2-60.7h284.5
	                c34.9,0,63.2,27.2,63.2,60.7v79.9C790.9,1794.5,762.6,1821.7,727.7,1821.7z"/>
                    <path fill={this.props.fill5} transform={this.props.transform5}
                        d="M816.5,1821.7H532c-34.9,0-63.2-27.2-63.2-60.7v-79.9c0-33.5,28.3-60.7,63.2-60.7h284.5
	                c34.9,0,63.2,27.2,63.2,60.7v79.9C879.7,1794.5,851.4,1821.7,816.5,1821.7z"/>
                    <path fill={this.props.fill6} transform={this.props.transform6}
                        d="M905.2,1821.7H620.8c-34.9,0-63.2-27.2-63.2-60.7v-79.9c0-33.5,28.3-60.7,63.2-60.7h284.5
	                c34.9,0,63.2,27.2,63.2,60.7v79.9C968.5,1794.5,940.1,1821.7,905.2,1821.7z"/>
                </svg>

            </>
        )
    }
}
export default Buttom3d