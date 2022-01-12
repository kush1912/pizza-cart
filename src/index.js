import ReactDOM from "react-dom"; // Case-Sensetive While Importing libraries
import App from "./App";

/*The first file, which is loaded when the app starts
  render function takes 2 arguments, 
    1. what to render?
    2. where to render?
*/

var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;

var height = window.innerHeight|| document.documentElement.clientHeight || document.body.clientHeight;
console.log(height);
console.log(width);
if(height>width){
  window.confirm("Please open the Application in Desktop!");
}

ReactDOM.render(
  <App/>,   //Always needs to follow TitleCase, Each react Component will return a JSX element.
  document.getElementById("root")
)