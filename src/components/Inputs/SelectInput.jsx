import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { fetchData, convertDataFormat } from '../../utils/fetchData.';




const SelectInput = ({ InputData, dependencyData, setDependencyData }) => {
  // states
  const [optionValue, setOptionValue] = useState('');



  //  get the option key and send a request 
  useEffect(() => {
    InputData.Options.forEach((option) => {
      if (optionValue === option.Value && InputData.OptionsDependency !== '') {
        InputData.OptionsDependency.map((optionDep) => getData(optionDep, option.Key))
      }
    });
  }, [optionValue]);




  // get option dependency data
  async function getData(optionDep, optionKey) {
    const changeFormat = convertDataFormat(optionDep, optionKey);
    const fetchedData = await fetchData(changeFormat)

    if (fetchedData.messageItems[0].data.Options.length !== 0) {
      setDependencyData(fetchedData.messageItems[0].data);
    } else {
      setDependencyData('');
    }
  }


  // render items
  const renderItems = () => {

    if (InputData.Options && InputData.Options.length !== 0) {
      return InputData.Options.map((option) => <MenuItem key={option.Key} value={option.Value}>{option.Value}</MenuItem>)

    } else if (dependencyData !== '' && InputData.Id === dependencyData.Id) {
      return dependencyData.Options.map((option) => <MenuItem key={option.Key} value={option.Value}>{option.Value}</MenuItem>)

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
          onChange={(e) => setOptionValue(e.target.value)}
        >
          {renderItems()}

        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectInput