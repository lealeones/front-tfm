export type DataSendProject = {
    id: string
    title: string
    descr: string
    keywords: string[]
    doc: any
    creationDate: Date | undefined
}


export const dataSendProjectEmpty: DataSendProject = {
    id: '',
    title: '',
    descr: '',
    keywords: [],
    doc: null,
    creationDate: undefined
}


type FormDataProviderSendProject = {
    dataForm: any //Tipo que devuelva la query al backend
}


export default function inicializarDataSendProject(dataForm?: FormDataProviderSendProject) {

    if (!dataForm) {
        return dataSendProjectEmpty
    }
    else {

        const dataQuery : DataSendProject = {
            ...dataForm.dataForm,
            id: dataForm.dataForm.id,
            title: dataForm.dataForm.title,
            descr: dataForm.dataForm.descr,
            keywords: dataForm.dataForm.keywords,
            doc: dataForm.dataForm.doc,
            creationDate: dataForm.dataForm.creationDate}

        return dataQuery

            

        } 
    }


