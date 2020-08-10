import React from "react";

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}


function OnOff(props: OnOffPropsType) {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
        color: "black"
    }
    const offStile = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red",
        color: "black"
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }
    return <div>
        <div style={onStyle} onClick={() => {
            props.setOn(true)
        }}>On
        </div>
        <div style={offStile} onClick={() => {
            props.setOn(false)
        }}>Off
        </div>
        <div style={indicatorStyle}/>
    </div>
}

export default OnOff;