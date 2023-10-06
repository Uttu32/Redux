import React, { useEffect, useState } from "react";
import { data } from "./Utilities/Data";

export default function App() {
  
  const [isOneClick, setIsOneClick] = useState(false);
  const [isTwoClick, setIsTwoClick] = useState(false);
  const [isOneWaiting, setIsOneWaiting] = useState(false);
  const [isTwoWaiting, setIsTwoWaiting] = useState(false);

  

  function handleOneClick(ele){
    setIsOneClick(true);
    setIsTwoClick(false);
    ele.isOneClicked = isOneClick;
    ele.isTwoClicked = isTwoClick;
    setIsOneWaiting(false);
    new Audio("https://assets.mixkit.co/active_storage/sfx/792/792-preview.mp3").play();
  }

  function handleTwoClick(ele){
    setIsOneClick(false);
    setIsTwoClick(true);
    ele.isOneClicked = isOneClick;
    ele.isTwoClicked = isTwoClick;
    setIsTwoWaiting(false);
    new Audio("https://assets.mixkit.co/active_storage/sfx/677/677-preview.mp3").play();
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOneWaiting(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOneWaiting]);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTwoWaiting(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isTwoWaiting]);

  return (
    <div>
      App
      {data.map((ele, index) => {
        return (
          <div key={index} style={{ display: "flex", gap: "10px" }}>
            {/* left side  */}
            {!isOneClick ? (
              <div onClick={(ele)=>handleOneClick(ele)} style={{ border: "1px solid", height: "500px" }}>
                <img
                  style={{
                    width: "300px",
                    height: "500px",
                    border: "1px solid red",
                  }}
                  src={ele.thumbnailOne}
                />
              </div>
            ) : !isOneWaiting ? (
              <div style={{ border: "1px solid", height: "500px" }}>
                <img
                  style={{
                    width: "300px",
                    height: "500px",
                    border: "1px solid red",
                  }}
                  src={ele.pressedOne}
                />
              </div>
            ) :(
              <div style={{ border: "1px solid", height: "500px" }}>
                <img
                  style={{
                    width: "300px",
                    height: "500px",
                    border: "1px solid red",
                  }}
                  src={ele.waitingOne}
                />
              </div>
            )
            }

            {/* Right Side  */}
            {!isTwoClick ? (
              <div onClick={(ele)=>handleTwoClick(ele)} style={{ border: "1px solid", height: "500px" }}>
                <img
                  style={{
                    width: "300px",
                    height: "500px",
                    border: "1px solid red",
                  }}
                  src={ele.thumbnailTwo}
                />
              </div>
            ) : !isTwoWaiting ? (
              <div style={{ border: "1px solid", height: "500px" }}>
                <img
                  style={{
                    width: "300px",
                    height: "500px",
                    border: "1px solid red",
                  }}
                  src={ele.pressedTwo}
                />
              </div>
            ):(
              <div style={{ border: "1px solid", height: "500px" }}>
                <img
                  style={{
                    width: "300px",
                    height: "500px",
                    border: "1px solid red",
                  }}
                  src={ele.waitingTwo}
                />
              </div>
            )
          }
          </div>
        );
      })}
    </div>
  );
}
