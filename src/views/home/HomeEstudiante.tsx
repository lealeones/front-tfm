import { Button, Grid } from '@mui/material'
import { useSession } from 'next-auth/react'
import React from 'react'
import CardUser from '../cards/CardUser'

export const HomeEstudiante = () => {
    const { data } = useSession()
    return (
        <>
            {JSON.stringify(data)}
            <Grid item xs={12} sm={6} md={4}>
            <Button variant='contained'>Enviar proyecto</Button>
            </Grid>
            <div>HomeEstudiante</div>

        </>
    )
}
