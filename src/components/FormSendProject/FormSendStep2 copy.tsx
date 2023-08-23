import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { useSendProjectContext } from '../context/sendProjectContext';
import workerSrc from './pdf-worker';
import { ButtonForm } from "../util/ButtonForm";
import DialogCreate from "../util/DialogCreate";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;


export const FormSendStep2 = () => {
  const { activeStep, dataForms, setFileBlob, setActiveStep, setKeyWords, handleSetDataForms, upFileProject, handleClickBack, handleClickNext, } = useSendProjectContext()
  const [file, setFile] = useState<any>();
  const [values, setValues] = useState<InternalValues>({ file: false });



  // Respuesta de subir un archivo desde el contexto
  const [resFile, setResFile] = useState<any>(null);

  
  const handleClickGuardar = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setResFile(await upFileProject(file)) 
  }

  console.log("desdeformularioresFile",resFile)
  const handleDisableGuardar = () => {
    return false
  }
  const [numPages, setNumPages] = useState<number>(NaN);
  interface InternalValues {
    file: any;
  }

  const onFileChange = (fileChangeEvent: any) => {
    setValues({
      ...values,
      file: fileChangeEvent.target.files[0]
    })
    setFile(fileChangeEvent.target.files[0]);
  }
  //@ts-ignore
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  }
  return (
    <Box>
      {/* INICIO FORMULARIO */}
      {resFile && JSON.stringify(resFile)} 
      <Card>
        <CardHeader title={'PASO ' + activeStep} titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <form onSubmit={e => e.preventDefault()}>
            <div>
              <div>
                <input
                  id="inputFileServer"
                  onChange={onFileChange} type="file" />
              </div>
              <Grid>
                <Button
                  variant="contained"
                  onClick={handleClickGuardar}
                  endIcon={<SendIcon />}>

                  Subir
                </Button>
              </Grid>
              <div>
                {file &&
                  <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from({ length: numPages }, (_, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                      />
                    ))}
                  </Document>
                }
              </div>
            </div>
            {/* <Grid container spacing={5} direction="column">
              <Typography variant="h6" >
                Agregue un documento .PDF
              </Typography>
              <Button
                variant="contained"
                component="label"
              >
                Upload File
                <input
                  type="file"
                  hidden
                />
              </Button>
            </Grid> */}
          </form>
        </CardContent>
      </Card>
      {/* FIN FORMULARIO */}
      <ButtonForm
        handleNextStep={false}
        handleClickAtras={handleClickBack}
        handleClickGuardar={handleClickNext}
        activeStep={activeStep}
        id={dataForms.id}
      />
    </Box>
  )
}
