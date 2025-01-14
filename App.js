import React from "react";
import ReactDOM from "react-dom/client";



const Header =() => {
    return( 
        <div className="Header">
            
        <img className="Logo" src="https://media.istockphoto.com/id/1138234161/vector/delivery-illustration.jpg?s=612x612&w=0&k=20&c=BXRhh9OYBOEbpfUD9DrO-aOLoyoqyzVj6s2EQyXQYRQ=" alt="Food app logo" height="80" />
        
        <div className="Navitems">
            <ul>
                <li>
                    <link to="/" >Home </link>
                </li>
                <li>About</li>
                <li>Contact US</li>
                <li>Cart</li>
                <li>Login</li>
            </ul>

        </div>
        </div>
    )
}

const RestoContainer =() =>{
    return(
        <div className="ResCard">


        </div>
    )
}

const Body =() =>{
    return(
        <div className = "Body">
            <div className="Search">
                Search
            </div>
            <div className="RestoContainer">
                <RestoContainer />
            </div>
        </div>


    )

}

const AppLayout = () => {
  return (
    <div id="App">
        
      <Header/>
      <Body />
    </div>
  );
};


     
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)