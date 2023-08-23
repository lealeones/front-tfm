import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Box, Button, Card, CardContent, CardHeader, Chip, Grid, ListItem, Paper, Step, StepLabel, Stepper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSendProjectContext } from '../context/sendProjectContext';
import { ButtonForm } from "../util/ButtonForm";

export const FormSendTP = () => {
  const { activeStep, steps, dataForms, keyWords, setActiveStep, setKeyWords, handleSetDataForms, handleClickNext, handleClickBack } = useSendProjectContext()
  const [currWord, setCurrWord] = useState<string>('');
 

  const handleDeleteKey = (keyDeleted: string) => () => {
    setKeyWords(keyWords.filter((key) => key !== keyDeleted));
  };
  const handleChangeTitle = (e: { target: { value: any; }; }) => {
    handleSetDataForms({
      ...dataForms,
      title: e.target.value,
    });
  };
  const handleChangeDescription = (e: { target: { value: any; }; }) => {
    handleSetDataForms({
      ...dataForms,
      descr: e.target.value,
    });
  };
  const handleChangeCurrWord = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCurrWord(e.target.value);
  };
  const handleKeyUpCurrWord = (e: { keyCode: number; }) => {
    if (e.keyCode == 32) {
      const newKeyWord: string[] = [...keyWords, currWord]
      setKeyWords(newKeyWord);
      setCurrWord('');
    }
  };
  return (
    <Box>
      {/* INICIO FORMULARIO */}
      <Card>
        <CardHeader title={'PASO PARA ENVIAR ' + activeStep} titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <form onSubmit={e => e.preventDefault()}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={dataForms.title ? dataForms.title : ''}
                  type='text'
                  label='Titulo'
                  helperText='Titulo del proyecto'
                  onChange={handleChangeTitle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={dataForms.descr ? dataForms.descr : ''}
                  type='text'
                  label='Resumen'
                  helperText='Descripcion del proyecto'
                  onChange={handleChangeDescription}
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
                        key={'listKeys' + data} >
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
      <ButtonForm
        handleNextStep={false}
        handleClickAtras={handleClickBack}
        handleClickGuardar={handleClickNext}
        activeStep={activeStep}
        id={dataForms.id}
      />

    </Box>

  )
}
