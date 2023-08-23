import React from 'react'
import { FormSendProject } from 'src/components/FormSendProject/FormSendProject'
import { FormSendTP } from 'src/components/FormSendProject/FormSendTP'
import { SendProjectContextProvider } from 'src/components/context/sendProjectContext'

const TrabajoFinal = () => {
    return (
        <SendProjectContextProvider>
            <FormSendTP />
        </SendProjectContextProvider>
    )
}

export default TrabajoFinal