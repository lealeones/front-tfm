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
  handleClickNext: () => void
  handleClickBack: () => void
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

  const handleClickNext = () => {
    setActiveStep(activeStep + 1);
  }

  const handleClickBack = () => {
    setActiveStep(activeStep - 1);
  }

  const upFileProject = async (file: Blob) => {
    let formData = new FormData();
    formData.append('application/pdf', file)
    const dateUploadFile = new Date();
    formData.append('dateUpload', 'dia ' + dateUploadFile.toDateString())
    //Sube el archivo por API rest
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_APP + '/file', {
      method: 'POST',
      body: formData,
    }).then(async response => response.json()).catch(error => console.log(error))
  }


  const initialValues = {
    keyWords: keyWords,
    steps: steps,
    dataForms: dataForms,
    activeStep: activeStep,
    setActiveStep: setActiveStep,
    setKeyWords: setKeyWords,
    handleSetDataForms: handleSetDataForms,
    upFileProject,
    setFileBlob: setFileBlob,
    handleClickNext,
    handleClickBack,
  }

  return (
    <SendProjectContext.Provider value={initialValues}>{children}</SendProjectContext.Provider>
  );
};
