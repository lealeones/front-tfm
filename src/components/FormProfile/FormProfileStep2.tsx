import { Box, Card, CardContent } from '@mui/material';
import { RolUser } from 'src/gql/graphql';
import { useProfileContext } from '../context/profileContext';
import { ButtonForm } from '../util/ButtonForm';
import { FormContactDefault } from './formContact/FormContactDefault';
import { FormContactReviewer } from './formContact/FormContactReviewer';
import { FormContactStudent } from './formContact/FormContactStudent';


export const FormProfileStep2 = () => {
    const { dataForms, activeStep, handleClickBack, handleClickNext } = useProfileContext()
    const { rol, id } = dataForms
    return (
        <Box>
            <Card>
                <CardContent>
                    <form onSubmit={e => e.preventDefault()}>
                        {rol === RolUser.Estudiante && (<FormContactStudent />)}
                        {rol === RolUser.Revisor && (<FormContactReviewer />)}
                        {rol !== RolUser.Estudiante && rol !== RolUser.Revisor && (<FormContactDefault />)}
                    </form>
                </CardContent>
            </Card>
        </Box>

    )
}
