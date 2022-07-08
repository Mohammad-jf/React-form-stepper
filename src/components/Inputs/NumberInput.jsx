import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NumberInput = ({InputData}) => {
  return (
    <Box>
      <TextField
        id="outlined-number"
        label={InputData.Label}
        type="number"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  )
}

export default NumberInput