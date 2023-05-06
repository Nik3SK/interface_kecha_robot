import React from "react";
import "./face_var2.css";
class Facevar2 extends React.Component {
    render() {

        const viewBox1 =[0, 0, 1080, 1920]
        return(
            <>
                <svg className="face_var2loc" viewBox={viewBox1} transform={this.props.transform}>
                    <ellipse className="desclas1" cx="446.99" cy="157.11" rx="48.88" ry="96.17"/>
                    <ellipse className="desclas1" cx="643.08" cy="157.11" rx="48.88" ry="96.17"/>
                    <ellipse className="desclas2" cx="456.36" cy="157.11" rx="26.08" ry="50.87"/>
                    <ellipse className="desclas2" cx="655.64" cy="157.11" rx="26.08" ry="50.87"/>
                    <ellipse className="desclas3" cx="547.83" cy="253.28" rx="42.04" ry="63.4"/>
                    <path className="desclas4" d="M547.83,189.88c-23.22,0-42,28.38-42,63.4h84.08C589.86,218.26,571,189.88,547.83,189.88Z"/>
                    <ellipse className="desclas5" cx="446.99" cy="130.03" rx="16.71" ry="20.75"/>
                    <ellipse className="desclas5" cx="646.27" cy="133.82" rx="16.71" ry="20.75"/>
                    </svg>

            </>
        )
    }
}
export default Facevar2