import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { fetchData,convertDataFormat } from '../utils/fetchData.';


const SelectInput = ({ InputData, stepData }) => {
  const [optionValue, setOptionValue] = useState('');
  const handleChange = (e) => setOptionValue(e.target.value);


  useEffect(() => {
    InputData.Options.forEach((option) => {
      if (optionValue === option.Value) {
        if (InputData.OptionsDependency !== '') {
          InputData.OptionsDependency?.map((optionDep) =>
            fetchData(convertDataFormat(optionDep,option.Key))
          )
        }
      }
    })
  }, [optionValue])



  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{InputData.Label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={optionValue}
          label={InputData.Label}
          onChange={handleChange}
        >
          {InputData.Options?.map((option) =>
            <MenuItem key={option.Key} value={option.Value}>{option.Value}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectInput