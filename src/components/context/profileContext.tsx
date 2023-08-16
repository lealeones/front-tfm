import {
    createContext,
    useContext,
    useState
} from "react";
import inicializarDataFormProfile, { DataFormProfile } from "../FormProfile/dataFormProfile";

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
    const steps = ['Informacion de cuenta','Informacion personal', 'Informacion de contacto', 'Resumen'];

    const [dataForms, setDataForms] = useState(
        //Deberiamos pasar a la funcion lo que devuelva la query por si ya tiene algo cargado
        inicializarDataFormProfile()
      );

      const handleClickNext = () => {
        setActiveStep(activeStep + 1);
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
        handleClickBack
    }
    return (
        <ProfileContext.Provider value={initialValues}>{children}</ProfileContext.Provider>
    );
}
