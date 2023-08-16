import { Box, Card, CardContent, CardHeader, Chip, Grid, ListItem, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { useProfileContext } from 'src/components/context/profileContext';
import { ButtonForm } from 'src/components/util/ButtonForm';


export const FormContactReviewer = () => {
    const { activeStep, dataForms, handleSetDataForms, setActiveStep ,handleClickBack,handleClickNext } = useProfileContext()
    const { id, mobile, phone, mail } = dataForms

    const [currEmail, setCurrEmail] = useState<string>('');
    const [emails, setEmails] = useState<string[]>([]);
    const handleDeleteKey = (keyDeleted: string) => () => {
        setEmails(emails.filter((key) => key !== keyDeleted));
    };
    const handleKeyUpCurrWord = (e: { keyCode: number; }) => {
        if (e.keyCode == 32) {
            const newPhones: string[] = [...mail, currEmail]
            setEmails(newPhones);
            setCurrEmail('');
        }
    };
    const handleChangeCurrWord = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setCurrEmail(e.target.value);
    };


    const handleChangeMobile = (e: { target: { value: any; }; }) => {
        handleSetDataForms({
            ...dataForms,
            mobile: e.target.value,
        });
    }
    const handleNextStep = !emails 
    const handleChangePhone = (e: { target: { value: any; }; }) => {
        handleSetDataForms({
            ...dataForms,
            lastname: e.target.value,
        });
    }

    return (
        <Box>
            {/* INICIO FORMULARIO */}
            <Card>
                <CardHeader title={'Formulario revisor' + activeStep} titleTypographyProps={{ variant: 'h6' }} />
                <CardContent>
                    <form onSubmit={e => e.preventDefault()}>
                        <Grid container spacing={5}>
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


                                    {emails && emails.map((data) => {
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
                                        label='Correos electronicos'
                                        value={currEmail ? currEmail : ''}
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
                id={id}
            />
        </Box>

    )
}
