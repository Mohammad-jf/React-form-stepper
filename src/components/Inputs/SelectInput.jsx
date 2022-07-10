import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { fetchData, convertDataFormat } from '../../utils/fetchData.';


const SelectInput = ({ InputData, stepData }) => {
  // states
  const [optionValue, setOptionValue] = useState('');

  // handelers
  const handleChange = (e) => setOptionValue(e.target.value);


  useEffect(() => {
    InputData.Options.forEach((option) => {
      if (optionValue === option.Value && InputData.OptionsDependency !== '') {
        InputData.OptionsDependency.map((optionDep) => getData(optionDep, option.Key))
      }
    });
  }, [optionValue]);


  async function getData(optionDep, optionKey) {
    const changeFormat = convertDataFormat(optionDep, optionKey);
    const fetchedData = await fetchData(changeFormat)

    if (fetchedData.messageItems[0].data.Options.length !== 0) {
      localStorage.setItem("options", JSON.stringify(fetchedData.messageItems[0].data))
    } else {
      localStorage.clear();
    }
  }

  useEffect(() => {
    localStorage.clear();
  }, []);



  function renderItems() {
    const lsData = localStorage.getItem('options');
    const data = JSON.parse(lsData);

    if (InputData.Options && InputData.Options.length !== 0) {
      return InputData.Options.map((option) => <MenuItem key={option.Key} value={option.Value}>{option.Value}</MenuItem>)
    }
    else if (data) {
      const options = data.Options.splice(0, 99);
      return options.map((option) => <MenuItem key={option.Key} value={option.Value}>{option.Value}</MenuItem>)
    }
  }



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
          {renderItems()}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectInput