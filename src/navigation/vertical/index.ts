// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { useSession } from 'next-auth/react'
import { RolUser } from 'src/gql/graphql'

const ItemsEstudiantes = [
  {
    title:'Inicio',
    icon: HomeOutline,
    path: '/'
  },
  {
    title: 'Configuración de cuenta',
    icon: AccountCogOutline,
    path: '/account-settings'
  },
  {
    sectionTitle: 'Acciones'
  },
  {
    title: 'Presentar proyecto',
    icon: AccountCogOutline,
    path: '/proyectos'
  },
]


const ItemsAdministrador = [
  {
    title:'Inicio',
    icon: HomeOutline,
    path: '/'
  },
  {
    title: 'Configuración de cuenta',
    icon: AccountCogOutline,
    path: '/account-settings'
  },
  {
    sectionTitle: 'Acciones'
  },
  {
    title: 'Crear usuario',
    icon: AccountCogOutline,
    path: '/proyectos'
  },
]

const ItemsDefault = [
  {
    title:'Inicio',
    icon: HomeOutline,
    path: '/'
  },
  {
    title: 'Configuración de cuenta',
    icon: AccountCogOutline,
    path: '/account-settings'
  },
]
 
export type NavigationProps = {
role : string
}

const ItemsFoRole = {
  "ADMINISTRADOR": ItemsAdministrador,
  "ESTUDIANTE": ItemsEstudiantes,
  // "OTROS": <Homead />,
  // "REVISOR": <FormProfileStep0 />,
  "SECRETARIA": ItemsAdministrador,
  "DEFAULT": ItemsDefault
} 

const navigation = (prop? : NavigationProps): VerticalNavItemsType => {
  return ItemsFoRole[prop.role || "DEFAULT"]
  //  return ItemsFoRole[prop?.role ? prop.role : "DEFAULT"]
}

export default navigation
