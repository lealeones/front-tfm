import { Grid, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { FormSendStep1 } from './FormSendStep1'
import { useSendProjectContext } from '../context/sendProjectContext'
import { FormSendStep2 } from './FormSendStep2'

//Agregar a este objeto los componentes para renderizar segun el paso
const stepToComponent = {
        0: <FormSendStep1 />,
        1: <FormSendStep2 />,
        2: <FormSendStep1 />,
 }

export const FormSendProject = () => {
const {steps,activeStep} = useSendProjectContext()
  return (
    <Grid>
    {//Renderiza el stepper segun los datos que traiga del contexto
    }
    <Stepper activeStep={activeStep} alternativeLabel>
    {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
    </Stepper>
    {
  //Renderiza el componente de formulario segun el paso     
  // @ts-ignore //Arreglar esto, puede ser con un switch
   stepToComponent[activeStep]  
}
</Grid>
  )
}
