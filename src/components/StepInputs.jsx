import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import DatePikerInput from './Inputs/DatePikerInput';
import SelectInput from './Inputs/SelectInput';
import NumberInput from './Inputs/NumberInput';




const StepInputs = ({ stepData }) => {
    const [dependencyData, setDependencyData] = useState('');

    //choose input base on type
    const renderInput = (Input) => {
        switch (Input.Type) {
            case 2: return <DatePikerInput InputData={Input} />
            case 1: return <SelectInput InputData={Input} setDependencyData={setDependencyData} dependencyData={dependencyData} />
            case 4: return <NumberInput InputData={Input} />
            default:
        }
    }

    return (
        <Box sx={{ width: '100%', alignItems: "center" }}>

            {stepData.Inputs.map((Input) => (
                <Stack mt='20px' key={Input.Id}>
                    {renderInput(Input)}
                </Stack>
            ))}

        </Box>
    )
}

export default StepInputs