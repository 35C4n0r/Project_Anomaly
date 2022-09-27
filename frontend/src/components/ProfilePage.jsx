import React from "react";
import {Link} from "react-router-dom";

export default function ProfilePage() {
    return (
        <div className={"ProfilePage"}>
            <span className={"Hello"} aria-label={"Greetings"}>Hello!</span>
            <br/>
            <span>John Doe</span>
            <br/><br/>
            <h1>Your Insights</h1>
            <div className={"ProfilePageInfo"}>
                Hey Emily ! You are on the home-screen of this application, if you wish to scan new currency, tap on the
                left side of the phone,
                and if you wish to go through your scan history, tap on the right side of the phone.
            </div>
            <div className={"Options"}>

                    <div className={"Scan Opt"} aria-label={"Scan"}>
                        <div className={"ScanLogo"}/>
                        <Link to={"/scan"}>
                        SCAN
                        </Link>
                    </div>

                <div className={"History Opt"}>
                    <div className={"HistLogo"}/>
                <Link to={"/history"}>
                    HISTORY
                </Link>
                </div>
            </div>
        </div>
    )
}
