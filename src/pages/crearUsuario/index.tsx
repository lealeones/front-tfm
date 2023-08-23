import React from 'react'
import { FormProfile } from 'src/components/FormProfile/FormProfile'
import { ProfileContextProvider } from 'src/components/context/profileContext'

const CrearUsuario = () => {
  return (
         <ProfileContextProvider>
          <FormProfile />
        </ProfileContextProvider>
  )
}

export default CrearUsuario
