import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Box, Button, Card, CardContent, CardHeader, Chip, Grid, ListItem, Paper, Step, StepLabel, Stepper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSendProjectContext } from '../context/sendProjectContext';

export const FormSendProject = () => {
const {activeStep,steps,data,keyWords,setActiveStep,setKeyWords} = useSendProjectContext()

const [currWord, setCurrWord] = useState<string>('');

const handleClickGuardar = () => {
    setActiveStep(activeStep + 1);
}

const handleClickAtras = () => {
    setActiveStep(activeStep - 1);
}

const handleDeleteKey = (keyDeleted: string) => () => {
    setKeyWords(keyWords.filter((key) => key !== keyDeleted));
};

const handleDisableGuardar = () => {
  return false
}

const handleChangeCurrWord = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCurrWord(e.target.value);
};
const handleKeyUpCurrWord = (e: { keyCode: number; }) => {
    console.log(e.keyCode);
    if (e.keyCode == 32) {
        const newKeyWord : string[] = [...keyWords, currWord]
        setKeyWords(newKeyWord);
        setCurrWord('');
    }
};

  return (

    <Box>
    <Stepper activeStep={activeStep} alternativeLabel>
    {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
    </Stepper>

    {/* INICIO FORMULARIO */}
    
    <Card>
        <CardHeader title={'PASO ' + activeStep} titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
            <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            //value={data.title }
                            type='text'
                            label='Titulo'
                            helperText='Titulo del proyecto'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            value={data.descr}
                            type='text'
                            label='Resumen'
                            helperText='Descripcion del proyecto'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                listStyle: 'none',
                                p: 0.5,
                                m: 0,
                            }}
                            component="ul"
                        >


                            {keyWords && keyWords.map((data) => {
                                return (
                                  
                                        <ListItem
                                            alignItems="flex-start"
                                            key={'listKeys'+data} >
                                            <Chip
                                                label={data}
                                                onDelete={handleDeleteKey(data)}
                                            />
                                        </ListItem>
                            
                                );
                            })}
                            <TextField
                                fullWidth
                                type='text'
                                label='Anadir palabra claves'
                                value={currWord}
                                onChange={handleChangeCurrWord}
                                onKeyDown={handleKeyUpCurrWord}
                            />

                        </Paper>

                    </Grid>


                </Grid>
            </form>
        </CardContent>
    </Card>
    
   
      {/* FIN FORMULARIO */}
<Grid 
textAlign={'end'}>
<Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              marginLeft: "0.5rem", 
              padding: '0.5em 1em 0.5em 1em',
              fontSize: "0.8125rem"
            }}

            disabled={activeStep === 0}
            onClick={handleClickAtras}

            //startIcon={data.id ? <EditIcon /> : <SaveAltIcon />}
          >
            {"Atras"}
          </Button>
    <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              marginLeft: "0.5rem", 
              padding: '0.5em 1em 0.5em 1em',
              fontSize: "0.8125rem"
            }}

           // disabled={handleDisableGuardar}
            onClick={handleClickGuardar}
            startIcon={data.id ? <EditIcon /> : <SaveAltIcon />}
          >
            {data.id ? "Editar" : "Guardar"}
          </Button>



</Grid>
        
    </Box>

  )
}
