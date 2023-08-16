import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Card, CardContent } from '@mui/material';
import { useProfileContext } from '../context/profileContext';
import { useMutation, useQuery } from '@apollo/client';
import { crearUsuario } from 'src/backend-tfm/mutation/crearUsuario';
import { CreateUserInput } from 'src/gql/graphql';
export const FormProfileStep3 = () => {
    const { dataForms } = useProfileContext()
 
// action mutation "crearUsuario" apollo query

const [addUser, { data, loading, error }] = useMutation(crearUsuario);



    const handleEnviar = () => {

        const data : CreateUserInput = {
            lastname: dataForms.lastname,
            mail: dataForms.mailpw,
            name: dataForms.name,
            pwd: dataForms.pwd,
            rol: dataForms.rol,
            username: dataForms.username
        }
        addUser({  variables: {data} })
        console.log(dataForms)
    }
    return (
        <Box>
            <Card>
                <CardContent>
                    {JSON.stringify(dataForms)}
                </CardContent>
            </Card>

            <Button
            onClick={handleEnviar}
             variant="contained" 
            endIcon={<SendIcon />}>
                Enviar
            </Button>

        </Box>

    )
}
