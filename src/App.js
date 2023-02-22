import React from "react";
class App extends React.Component{

    render(){
        return(<div id="text1" >
        <text onClick={ () => alert("You clicked")} >Кто такой Пушкин?</text>
        </div>
       )
    }
}
export default App
