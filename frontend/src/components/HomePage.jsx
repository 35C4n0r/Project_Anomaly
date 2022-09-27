import React, {useEffect} from "react";
import BottomCard from "./BottomCard";

export default function HomePage() {

    let synth = window.speechSynthesis;
    let introText = new SpeechSynthesisUtterance();
    introText.text = "Welcome to the Homepage of Project Anomaly. This is a currency detection web application.";
    useEffect(() => {
        synth.speak(introText);
    }, [])


    return(

        <div className={"HomePage"}>
            <BottomCard/>
        </div>
    )
}
