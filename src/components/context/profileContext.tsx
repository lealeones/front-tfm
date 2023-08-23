import {
    createContext,
    useContext,
    useState
} from "react";
import inicializarDataFormProfile, { DataFormProfile } from "../FormProfile/dataFormProfile";
import { FetchResult, useMutation } from "@apollo/client";
import { CrearAlumno } from "src/backend-tfm/mutation/CrearAlumno";
import { CreateUserAlumno, CreateUserRevisorInput } from "src/gql/graphql";
import { CrearRevisor } from "src/backend-tfm/mutation/CrearRevisor";

// *TYPES*
export type ProfileContextType = {
    //Lo que devuelve el contesto, funciones y variables
    activeStep: number;
    steps: string[];
    dataForms: DataFormProfile;
    handleSetDataForms: (value: DataFormProfile) => void
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    handleClickNext: () => void
    handleClickBack: () => void
    handleCrear: () => Promise<FetchResult<any>>

};

// *TYPES*

export const ProfileContext = createContext<ProfileContextType>({} as ProfileContextType);
export const useProfileContext = () => useContext(ProfileContext);

export const ProfileContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Informacion de cuenta', 'Informacion personal', 'Informacion de contacto', 'Resumen'];

    const [dataForms, setDataForms] = useState(
        //Deberiamos pasar a la funcion lo que devuelva la query por si ya tiene algo cargado
        inicializarDataFormProfile()
    );


    // Declaraciones MUTATIONS
    const [CrearAlumnoMutation, { data: dataAlumno, loading: loadingAlumno, error: errorAlumno }] = useMutation(CrearAlumno)
    const [CrearRevisorMutation, { data: dataRevisor, loading: loadingRevisor, error: errorRevisor }] = useMutation(CrearRevisor)

    const handleClickNext = () => {
        setActiveStep(activeStep + 1);
    }
    console.log("querys", dataAlumno, dataRevisor)

    const crearAlumno = async () => {
        const dataAlumno: CreateUserAlumno = {
            lastname: dataForms.lastname,
            mail: dataForms.mailpw,
            mobile: dataForms.mobile,
            name: dataForms.name,
            phone: dataForms.phone,
            pwd: dataForms.pwd,
            rol: dataForms.rol,
            username: dataForms.username,
        }
        return await CrearAlumnoMutation({ variables: { data: dataAlumno } })
    }

    const crearRevisor = async () => {
        const dataRevisor: CreateUserRevisorInput = {
            cv_path: 'todaviafalta',
            lastname: dataForms.lastname,
            mail: dataForms.mailpw,
            name: dataForms.name,
            pwd: dataForms.pwd,
            rol: dataForms.rol,
            titulo: 'todaviafalta',
            username: dataForms.username
        }

        return await CrearRevisorMutation({ variables: { dataRevisor } })
    }

    // Administrador = 'ADMINISTRADOR',
    // Estudiante = 'ESTUDIANTE',
    // Otros = 'OTROS',
    // Revisor = 'REVISOR',
    // Secretaria = 'SECRETARIA'
    // Objecto que switchea mutation segun el rol



 

    const handleCrear =  () => {
    //     const createForRole = {
    //         'ADMINISTRADOR': crearAlumno(),
    //         'ESTUDIANTE': crearAlumno(),
    //         'REVISOR': crearRevisor(),
    //         'SECRETARIA': crearAlumno(),
    //         'OTROS': crearAlumno()
    //     }
    // return createForRole[dataForms.rol]  
switch (dataForms.rol) {
    case 'ADMINISTRADOR':
        return crearAlumno()
    case 'ESTUDIANTE':
        return crearAlumno()
    case 'REVISOR':
        return crearRevisor()
    case 'SECRETARIA':
        return crearAlumno()
    case 'OTROS':
        return crearAlumno()
    default:
        return crearAlumno()



        
    }
}


    const handleClickBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleSetDataForms = (value: DataFormProfile) => {
        setDataForms(value);
    };

    const initialValues = {
        activeStep,
        steps: steps,
        dataForms,
        setActiveStep,
        handleSetDataForms,
        handleClickNext,
        handleClickBack,
        handleCrear
    }
    return (
        <ProfileContext.Provider value={initialValues}>{children}</ProfileContext.Provider>
    );
}
