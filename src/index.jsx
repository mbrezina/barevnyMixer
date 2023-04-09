import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import ColorSlider from "./components/ColorSlider";

const App = () => {
    const [redValue, setRedValue] = useState(0);
    const [greenValue, setGreenValue] = useState(0);
    const [blueValue, setBlueValue] = useState(0);

    let rgbColorValues = [redValue, greenValue, blueValue];
    var styles = {
        backgroundColor: `rgb(${rgbColorValues})`,
    };

    const handleValueChange = (colorNameForValue, colorValue) => {
        if (colorNameForValue === "red") {
            setRedValue(colorValue);
        } else if (colorNameForValue === "green") {
            setGreenValue(colorValue);
        } else {
            setBlueValue(colorValue);
        }
    }

    return (
        <div className="container">
            <header>
                <div className="logo"/>
                <h1>React webová aplikace</h1>
            </header>
            <main>
                <div className="color-panel">
                    <h2>Mixér barev</h2>
                    <div className="sliders">
                        <ColorSlider
                            baseColor="red"
                            colorName="Červená"
                            onValueChange={handleValueChange}/>
                        <ColorSlider
                            baseColor="green"
                            colorName="Zelená"
                            onValueChange={handleValueChange}/>
                        <ColorSlider
                            baseColor="blue"
                            colorName="Modrá"
                            onValueChange={handleValueChange}/>
                    </div>
                    <div className="color-box" id="color-box" style={styles}></div>

                </div>
            </main>
            <footer>
                <p>Czechitas, Digitální akademie: Web</p>
            </footer>
        </div>
    );
};

createRoot(
    document.querySelector('#app'),
).render(<App/>);
