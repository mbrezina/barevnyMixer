import React, {useState} from 'react';
import './style.css';


const ColorSlider = ({baseColor, colorName, onValueChange}) => {

const classNameForColor = `slider slider--${baseColor}`;
const colorSliderId = `${baseColor}Slider`;

    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
        onValueChange(baseColor, value);
    }

    return (
        <>
            <label htmlFor="red">{colorName}</label>
            <input
                type="range"
                className={classNameForColor}
                id={colorSliderId}
                min="0"
                max="255"
                value={value}
                onChange={handleChange}
            />
        </>
    );
};

export default ColorSlider;