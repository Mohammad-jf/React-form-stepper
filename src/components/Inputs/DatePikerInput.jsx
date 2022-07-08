import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/jalaali'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const DatePikerInput = ({ InputData }) => {
  const [value, setValue] = useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <label style={{ margin: '20px 10px' }}>{InputData.Label}</label>
      <DatePicker
        mask="____/__/__"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default DatePikerInput