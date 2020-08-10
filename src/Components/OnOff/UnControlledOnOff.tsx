import React, {useState} from "react";

function UncontrolledOnOff() {
    let [on, setOn] = useState(false);


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
        color: "black"
    }
    const offStile = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
        color: "black"
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }
    return <div>
        <div style={onStyle} onClick={() => {
            setOn(true)
        }}>On
        </div>
        <div style={offStile} onClick={() => {
            setOn(false)
        }}>Off
        </div>
        <div style={indicatorStyle}/>
    </div>
}

export default UncontrolledOnOff;