import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StepInputs from './StepInputs';
import data from '../utils/data';



const Steppers = () => {
    // app data
    const [steps, setSteps] = useState(data);

    // current step
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Box sx={{ width: '100%', }} mt='40px'>

            {/* steppers */}
            <Stepper activeStep={activeStep}>
                {steps.map((step) => (
                    <Step key={step.StepNo}>
                        <StepLabel>{step.Title}</StepLabel>
                    </Step>
                ))}
            </Stepper>


            {/* rendering Inputs */}
            <Box>
                <StepInputs stepData={steps[activeStep]} />
            </Box>


            {/* buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }} justifyContent='center'>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    مرحله قبل
                </Button>

                <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
                    {activeStep === steps.length - 1 ? 'پایان' : 'مرحله بعد'}
                </Button>
            </Box>

        </Box>
    );
}



export default Steppers