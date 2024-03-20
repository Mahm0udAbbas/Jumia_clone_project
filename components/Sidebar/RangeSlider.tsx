import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import styles from '../../styles/RangeSlider.module.css';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    const updatedValue = [...value];
    updatedValue[index] = newValue;
    setValue(updatedValue);
  };

  return (
    <Box className="px-10">
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="warning"
      />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Input
          className={`${styles.Input}`}
          type="number"
          value={value[0]}
          onChange={handleInputChange(0)}
          inputProps={{
            'aria-label': 'Start Point',
            style: { textAlign: 'center' }
          }}
        />
        <p>_</p>
        <Input
          className={`${styles.Input}`}
          type="number"
          value={value[1]}
          onChange={handleInputChange(1)}
          inputProps={{
            'aria-label': 'End Point',
            style: { textAlign: 'center' }
          }}
        />
      </Box>
    </Box>
  );
}








