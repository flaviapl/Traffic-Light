import React,{useState} from "react";

const TrafficLight = () => {

    const [color, setColor] = useState("");

    return (
        <>
            <div className="stick"></div>
            <div className="containerLight color">
                <div className={"lightRed " + (color == "red" ? "lightOn" : "")} onClick={() => { setColor("red") }}></div>
                <div className={"lightOrange " + (color == "orange" ? "lightOn" : "")} onClick={() => { setColor("orange") }}></div>
                <div className={"lightGreen " + (color == "green" ? "lightOn" : "")} onClick={() => { setColor("green") }}></div>
            </div>

        </>
    );
};

export default TrafficLight;

