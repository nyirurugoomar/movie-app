import {useEffect} from "react";

//API
//a70d844c

const API_URL= 'http://www.omdbapi.com?apikey=a70d844c';

const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    Console.log(data)

}

const App = () =>{
    useEffect(()=>{

    },[]);
    return(
        <h1>App</h1>
    );
}
export default App;