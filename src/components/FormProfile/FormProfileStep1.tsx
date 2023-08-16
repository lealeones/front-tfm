import { Box, Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useProfileContext } from '../context/profileContext';
import { ButtonForm } from '../util/ButtonForm';

export const FormProfileStep1 = () => {
    const { activeStep, dataForms, handleSetDataForms,setActiveStep } = useProfileContext()
    const { name, lastname, id } = dataForms

    const handleClickAtras = () => {
        setActiveStep(activeStep - 1);
    }
    const handleClickGuardar = () => {
        setActiveStep(activeStep + 1);
    }
    const handleChangeName = (e: { target: { value: any; }; }) => {
        // const reg = new RegExp("[a-z]");
        // setValid(reg.test(e.target.value));
        handleSetDataForms({
            ...dataForms,
            name: e.target.value,
          });
     }

    const handleChangeLastName = (e: { target: { value: any; }; }) => {
        handleSetDataForms({
            ...dataForms,
            lastname: e.target.value,
          });
     }
     const handleNextStep = !name || !lastname

return (
        <Box>


            {/* INICIO FORMULARIO */}

            <Card>
                <CardHeader title={'Formulario ' + activeStep} titleTypographyProps={{ variant: 'h6' }} />
                <CardContent>
                    <form onSubmit={e => e.preventDefault()}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={name ? name : ''}
                                    type='text'
                                    label='Nombre'
                                    helperText='Nombre'
                                    onChange={handleChangeName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={lastname ? lastname : ''}
                                    type='text'
                                    label='Apellido'
                                    helperText='Apellido'
                                    onChange={handleChangeLastName}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>


            {/* FIN FORMULARIO */}
            <ButtonForm 
                handleNextStep={handleNextStep}
                handleClickAtras={handleClickAtras}
                handleClickGuardar={handleClickGuardar}
                activeStep={activeStep}
                id={dataForms.id}
            />

        </Box>

    )
}
