import React from "react";
import {Link} from "react-router-dom";

export default function BottomCard() {
    let synth = window.speechSynthesis;
    function ScanC() {
        let ScanCText = new SpeechSynthesisUtterance();
        ScanCText.text = "Taking you to the Scan Page";
        synth.speak(ScanCText);
    }


    return (
        <div className={"BottomCard"}>
            <div className={"CameraLogo"}/>
            <h2>MAKE US YOUR VISION</h2>
            <br/>
            "A APP THAT WOULD HELP YOU TO DETECT YOUR CURRENCY VALUE"
            <Link to={"/scan"}>
                <button onClick={ScanC} className={"NextPage Button"}>SCAN YOUR CURRENCY</button>
            </Link>
            <Link to={"/profile"}>
                <button className={"LoginPage Button"}>LOGIN</button>
            </Link>
        </div>
    )
}
