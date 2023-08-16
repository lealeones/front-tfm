import { Box, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { useProfileContext } from 'src/components/context/profileContext';
import { ButtonForm } from 'src/components/util/ButtonForm';


export const FormContactDefault = () => {
    const { activeStep, dataForms, handleSetDataForms, setActiveStep , handleClickBack , handleClickNext } = useProfileContext()
    const { id, mobile } = dataForms

    const handleClickGuardar = () => {
        setActiveStep(activeStep + 1);
    }

    const handleClickAtras = () => {
        setActiveStep(activeStep - 1);
    }

    const handleChangeMobile = (e: { target: { value: any; }; }) => {
        handleSetDataForms({
            ...dataForms,
            mobile: e.target.value,
        });
    }

    const handleNextStep = !mobile 


    return (
        <Box>
            {/* INICIO FORMULARIO */}
            <Card>
                <CardHeader title={'Formulario default ' + activeStep} titleTypographyProps={{ variant: 'h6' }} />
                <CardContent>
                    <form onSubmit={e => e.preventDefault()}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={mobile ? mobile : ''}
                                    type='text'
                                    label='Numero celular'
                                    helperText='Ejemplo 3435077510'
                                    onChange={handleChangeMobile}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
            {/* FIN FORMULARIO */}
            <ButtonForm
                handleNextStep={handleNextStep}
                handleClickAtras={handleClickBack}
                handleClickGuardar={handleClickNext}
                activeStep={activeStep}
                id={id}
            />
        </Box>

    )
}
