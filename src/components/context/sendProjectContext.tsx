import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState
} from "react";
import inicializarDataSendProject, { DataSendProject, dataSendProjectEmpty } from "../FormSendProject/dataSendProject";



// *TYPES*
export type SendProjectContextType = {
    //Lo que devuelve el contesto, funciones y variables
    steps: string[];
    dataForms: DataSendProject
    activeStep: number;
    keyWords: string[];
    setActiveStep: (step: number) => void;
    setKeyWords: (keyWords: string[]) => void;
    handleSetDataForms: (value: DataSendProject) => void
    upFileProject: (file: Blob) => Promise<void>
    setFileBlob: Dispatch<SetStateAction<Blob | undefined>>
};



// *TYPES*

export const SendProjectContext = createContext<SendProjectContextType>({} as SendProjectContextType);
export const useSendProjectContext = () => useContext(SendProjectContext);

export const SendProjectContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [fileBlob, setFileBlob] = useState<Blob>()
    const [activeStep, setActiveStep] = useState<number>(0);
    const [keyWords, setKeyWords] = useState<string[]>([])
    const [dataForms, setDataForms] = useState(
        //Deberiamos pasar a la funcion lo que devuelva la query por si ya tiene algo cargado
        inicializarDataSendProject()
      );
    const steps = [
        'Detalle',
        'Subir archivo',
        'Descargar comprobante',
      ];
      const handleSetDataForms = (value: DataSendProject) => {
        setDataForms(value);
      };

    

      const upFileProject = async (file : Blob) => {
     console.log("file desde context", file)
        let formData = new FormData();
        formData.append('application/pdf', file)
        const dateUploadFile = new Date();
        formData.append('dateUpload', 'dia'+dateUploadFile.toDateString())
      //Sube el archivi por rest
      let responseOK : Response
        try {
         const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_APP+'/file', {
            method: 'POST',
            body: formData,
          });
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          responseOK = response;
        } catch (err) {
          console.log(err);
        }

        




        // const data = new FormData();
        // data.append("file", dataForms.file);
        // data.append("name", dataForms.name);
        // data.append("description", dataForms.description);
        // data.append("keywords", dataForms.keywords);
        // data.append("category", dataForms.category);
        // data.append("type", dataForms.type);
        // data.append("price", dataForms.price);
        // data.append("license", dataForms.license);
        // data.append("author", dataForms.author);
        // data.append("email", dataForms.email);
        // data.append("phone", dataForms.phone);
        // data.append("website", dataF

      }


    const initialValues = {
        keyWords: keyWords,
        steps: steps,
        dataForms: dataForms,
        activeStep: activeStep,
        setActiveStep: setActiveStep,
        setKeyWords: setKeyWords,
        handleSetDataForms: handleSetDataForms,
        upFileProject:upFileProject,
        setFileBlob: setFileBlob
    };

    return (
        <SendProjectContext.Provider value={initialValues}>{children}</SendProjectContext.Provider>
    );
};
