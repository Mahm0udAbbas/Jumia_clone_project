import React, { useState } from 'react';
import styles from "@/styles/checkBoxColor.module.css";

export default function Checkbox({ name, id, value, text }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const checkboxStyle = {
        backgroundColor: isChecked ? 'orange' : 'initial',
    };

    return (
            <label htmlFor={id} className={styles.checkbox}>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    name={name}
                    id={id}
                    value={value}
                    checked={isChecked}
                    style={checkboxStyle}
                />
                <span style={{ paddingLeft:'5px' }}>
                {text}
                </span>
            </label>
    );
}
