import { Grid, Step, StepLabel, Stepper } from '@mui/material'
import { useProfileContext } from '../context/profileContext'
import { FormProfileStep0 } from './FormProfileStep0'
import { FormProfileStep1 } from './FormProfileStep1'
import { FormProfileStep2 } from './FormProfileStep2'
import { FormProfileStep3 } from './FormProfileStep3'

//Agregar a este objeto los componentes para renderizar segun el paso
const stepToComponent = {
  0: <FormProfileStep0 />,
  1: <FormProfileStep1 />,
  2: <FormProfileStep2 />,
  3: <FormProfileStep3 />,
}

export const FormProfile = () => {
  const { activeStep, steps } = useProfileContext()
  console.log("steps", activeStep)
  return (
    <Grid>
      {//Renderiza el stepper segun los datos que traiga del contexto
      }
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps && steps.map((label) => (
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
