import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { useProfileContext } from '../context/profileContext';
import DialogCreate from '../util/DialogCreate';
export const FormProfileStep3 = () => {
    const { dataForms,handleCrear} = useProfileContext()

//const [addUser, { data, loading, error }] = useMutation(crearUsuario);

const  [ res , setRes ] = useState<any>(false)
    const handleEnviar = async () => {
        setRes(await handleCrear()) 
        console.log("dataform",dataForms) 
    }
    return (
        <Box>
           {res && <DialogCreate data={dataForms}/>} 
            <Card>
                <CardContent>
                    {JSON.stringify(dataForms)}
                </CardContent>
            </Card>

            <Button
            onClick={handleEnviar}
             variant="contained" 
            endIcon={<SendIcon />}>
                Crear
            </Button>

        </Box>

    )
}
