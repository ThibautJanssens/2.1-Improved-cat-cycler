// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";
import Axios from "axios";

/*
  Put the JavaScript code you want below.
*/

setInterval(()=>{
  getCat();
}, 5000);

async function getCat(){
  let cat = await Axios.get("https://aws.random.cat/meow");
  document.querySelector('#imageHolder').innerHTML = "<img id='cats' src="+cat.data.file+">";
}
