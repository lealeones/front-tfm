import { Button, Grid } from '@mui/material'
import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

type ButtonFormProps = {
    activeStep: number
    handleNextStep: boolean
    handleClickAtras: () => void
    handleClickGuardar: () => void
    id: any
}

export const ButtonForm = (props : ButtonFormProps) => {
    const {activeStep, handleNextStep, handleClickAtras, handleClickGuardar, id} = props
  return (
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

        disabled={handleNextStep}
        onClick={handleClickGuardar}
        startIcon={id ? <EditIcon /> : <SaveAltIcon />}
    >
        {id ? "Editar" : "Guardar"}
    </Button>



</Grid>
  )
}
