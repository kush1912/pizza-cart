import ReactDOM from "react-dom"; // Case-Sensetive While Importing libraries
import App from "./App";

/*The first file, which is loaded when the app starts
  render function takes 2 arguments, 
    1. what to render?
    2. where to render?
*/
ReactDOM.render(
  <App/>,   //Always needs to follow TitleCase, Each react Component will return a JSX element.
  document.getElementById("root")
)