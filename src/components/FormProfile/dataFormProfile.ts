import { RolUser } from "src/gql/graphql"

export type DataFormProfile = {
    id: number,
    username: string,
    pwd: string,
    mailpw: string,
    mail: string[],
    name: string,
    mobile: string,
    phone: string,
    lastname: string,
    rol: RolUser,
    student: string //Student?
    reviewer: string //Reviewer?
    titleReviewer: string
    cv_pathReviewer: string
}


export const dataFormProfileEmpty: DataFormProfile = {
    id: NaN,
    username: "",
    mailpw: "",
    pwd: "",
    mail: [],
    name: "",
    mobile: "",
    phone: "",
    lastname: "",
    rol: RolUser.Otros,
    student: "",
    reviewer: "",
    titleReviewer: "",
    cv_pathReviewer: "",
}


type FormProfileDataProvider = {
    dataForm: any //Tipo que devuelva la query al backend
}


export default function inicializarDataFormProfile(dataForm?: FormProfileDataProvider) {

    if (!dataForm) {
        return dataFormProfileEmpty
    }
    else {

        const dataQuery: DataFormProfile = {
            ...dataForm.dataForm,
            id: dataForm.dataForm.id,
            username: dataForm.dataForm.username,
            mailpw: dataForm.dataForm.mailpw,
            pwd: dataForm.dataForm.pwd,
            mail: dataForm.dataForm.mail,
            name: dataForm.dataForm.name,
            mobile: dataForm.dataForm.mobile,
            phone: dataForm.dataForm.phone,
            lastname: dataForm.dataForm.lastname,
            rol: dataForm.dataForm.rol,
            student: dataForm.dataForm.student,
            reviewer: dataForm.dataForm.reviewer,
            titleReviewer: dataForm.dataForm.titleReviewer,
            cv_pathReviewer: dataForm.dataForm.cv_pathReviewer,
        }

        return dataQuery



    }
}


