import { Box, Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useProfileContext } from '../context/profileContext';
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { RolUser } from 'src/gql/graphql';
import { ButtonForm } from '../util/ButtonForm';

export const FormProfileStep0 = () => {
    const { activeStep, dataForms, handleSetDataForms, setActiveStep } = useProfileContext()
    const { username, pwd, rol, mailpw } = dataForms
    const [role, setRole] = useState(rol ? rol : RolUser.Otros);
    // obtain values of the "RolUser"
    const options = Object.values(RolUser);


    const handleChangeRole = (event: SelectChangeEvent) => {
        const rol: RolUser = event.target.value as RolUser
        setRole(rol);
        handleSetDataForms({
            ...dataForms,
            rol: rol,
        });
    };
    const handleClickAtras = () => {
        setActiveStep(activeStep - 1);
    }
    const handleClickGuardar = () => {
        setActiveStep(activeStep + 1);
    }
    const handleChangeUsername = (e: { target: { value: any; }; }) => {
        handleSetDataForms({
            ...dataForms,
            username: e.target.value,
        });
    }

    const handleNextStep = !username || !pwd || !role || !mailpw

    const handleChangePwd = (e: { target: { value: any; }; }) => {
        handleSetDataForms({
            ...dataForms,
            pwd: e.target.value,
        });
    }


    const handleChangeMailPw = (e: { target: { value: any; }; }) => {
        // const regex = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
        // if (!regex.test(e.target.value)) {
            console.log("asd")
        handleSetDataForms({
            ...dataForms,
            mailpw: e.target.value,
        });
   // }
    }

    return (
        <Box>
            {/* INICIO FORMULARIO */}
            <Card>
                <CardHeader title={'Formulario ' + activeStep} titleTypographyProps={{ variant: 'h6' }} />
                <CardContent>
                    <form onSubmit={e => e.preventDefault()}>
                        <Grid container spacing={5} >
                            <Grid item xs={12}>
                                <InputLabel id="input-select-rol">Rol usuario</InputLabel>
                                <Select
                                    id="select-rol"
                                    value={role}
                                    label="Rol"
                                    onChange={handleChangeRole}
                                >
                                    {options && options.map((option, index) => (<MenuItem value={option}>{option}</MenuItem>))}
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={username ? username : ''}
                                    type='text'
                                    label='Nombre usuario'
                                    helperText='Usuario para el sistema'
                                    onChange={handleChangeUsername}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={pwd ? pwd : ''}
                                    type='text'
                                    label='Contraseña'
                                    helperText='Contraseña'
                                    onChange={handleChangePwd}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={mailpw ? mailpw : ''}
                                    type='email'
                                    label='E-mail'
                                    helperText='Correo para recuperacion de contraseña'
                                    onChange={handleChangeMailPw}
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
