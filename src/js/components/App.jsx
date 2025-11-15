import { useState, useEffect } from "react";
import "../../styles/index.css";
import Light from "./Light";

export const RED = "red";
export const YELLOW = "yellow";
export const GREEN = "green";

function App() {
    const [currentLight, setCurrentLight] = useState("red");

    const traffic = () => {
        if (currentLight === RED) {
            setCurrentLight(GREEN);
            return;
        }

        if (currentLight === GREEN) {
            setCurrentLight(YELLOW);
            return;
        }

        setCurrentLight(RED);

    };

    useEffect(() => {
        setTimeout(() => {
            traffic();

        }, 3000);

    }, [currentLight]);


    return (
        <>
            <div className="Traffic-Light-Box">
                <div id="container">
                    <Light
                        currentLight={currentLight}
                        identifier="red"
                        ligthState={RED}
                    />
                    <Light
                        currentLight={currentLight}
                        identifier="yellow"
                        ligthState={YELLOW}
                    />
                    <Light
                        currentLight={currentLight}
                        identifier="green"
                        ligthState={GREEN}
                    />


                </div>
            </div>

        </>
    )
}
export default App;