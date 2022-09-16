import React, {useState, useEffect} from "react";
import './App.css';



function App() {
  const CLIENT_ID = "5f1b01d172bd458493041aa374d43bf1";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if(!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
        setToken(token)
      }


  }, [])

  return (
    <div className="App">
      <h1>Spotify App</h1>
    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login Into Spotify</a>
    </div>
  );
}

export default App;
