import {
    createContext,
    useContext,
    useState
} from "react";
import { DataSendProject, dataSendProjectEmpty } from "../FormSendProject/dataSendProject";



// *TYPES*
export type SendProjectContextType = {

    //Lo que devuelve el contesto, funciones y variables
    steps: string[];
    data: DataSendProject
    activeStep: number;
    keyWords: string[];
    setActiveStep: (step: number) => void;
    setKeyWords: (keyWords: string[]) => void;
};



// *TYPES*

export const SendProjectContext = createContext<SendProjectContextType>({} as SendProjectContextType);
export const useSendProjectContext = () => useContext(SendProjectContext);

export const SendProjectContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    const [keyWords, setKeyWords] = useState<string[]>([])

    const steps = [
        'Detalle',
        'Subir archivo',
        'Descargar comprobante',
      ];


    const [activeStep, setActiveStep] = useState<number>(0);


    const initialValues = {
        keyWords: keyWords,
        steps: steps,
        data: { ...dataSendProjectEmpty },
        activeStep: activeStep,
        setActiveStep: setActiveStep,
        setKeyWords: setKeyWords
    };

    return (
        <SendProjectContext.Provider value={initialValues}>{children}</SendProjectContext.Provider>
    );
};
