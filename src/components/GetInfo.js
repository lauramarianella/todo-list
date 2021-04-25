import React, { useCallback } from 'react';
import { useState} from 'react'

import './CalcCSS.css';
const emptyResponse = {msg:false,info:['',0]};

export default function GetInfo() {
  const [stUsername, setStUsername] = useState("fedora");
  const [stResponse, setStResponse] = useState(emptyResponse);

  const [isSending, setIsSending] = useState(false);

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    setStResponse(await getInfo(`${stUsername}`));
    // once the request is sent, update state again
    setIsSending(false)
  }, [stUsername]) // update the callback if the state changes

    return (
      <div className="myPage">   
          <h1>Get Info from the server</h1>   
          <h2>Try with: Fedora, Pakita, Hopper..</h2> 
          <input type="text" placeholder="pet name" value={stUsername} onChange={(e)=>setStUsername(e.target.value)}/>
          <br/>
          <input type="submit" value="Get" disabled={isSending} onClick={sendRequest}/>
          <br/>
          <p>{(stResponse)? (stResponse.info.length>0)?`A ${stResponse.info[0]}, age: ${stResponse.info[1]}`:'':''}</p>
      </div>
  ); 
}
async function getInfo(username){
  username= username.toLowerCase();
  let objMessage=emptyResponse;
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  let qs = `?username=${username}`;
  let responseJson = fetch("http://localhost:8081/getInfo"+qs,{mode: 'cors'//Cross-Origin Resource Sharing
                ,method: 'get'
                });
  let objMessageTxt = await (await responseJson).text();
  objMessage = JSON.parse(objMessageTxt);
  return objMessage;
}


//export default GetInfo;