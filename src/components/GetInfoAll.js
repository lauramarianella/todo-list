import React, { useCallback } from 'react';
import { useState, useEffect} from 'react'

import './CalcCSS.css';
const emptyResponse = {msg:false,info:['',0]};

export default function GetInfoAll() {
  const [stUsername, setStUsername] = useState("hopper");
  const [stResponse, setStResponse] = useState(emptyResponse);

  useEffect(() => {
    async function getInfo() {
      let objMessage=emptyResponse;
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      let qs = `?username=${stUsername}`;
      let responseJson = fetch("http://localhost:8081/getInfo"+qs,{mode: 'cors'//Cross-Origin Resource Sharing
                ,method: 'get'
                });
      let objMessageTxt = await (await responseJson).text();
      objMessage = JSON.parse(objMessageTxt);
      setStResponse(objMessage);
    }
    getInfo();
  }, []);

    return (
      <div className="myPage">   
          <h2>Get Info from the server</h2>   
          <h3>Get Info after the page is loaded - "onLoad" event</h3>   
          <h3>React has a lifecicle, using classes there is the function componentDidMount() is equals to OnLoad</h3>   
          <h4>"{stUsername.toUpperCase()}" {(stResponse)?` is a ${stResponse.info[0]}, age: ${stResponse.info[1]}`:''}</h4>
      </div>
  );
    
}

//export default GetInfoAll;