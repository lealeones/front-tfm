// ** Next Imports
import type { NextPage } from 'next'

// ** Component Imports
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import UserLayout from 'src/layouts/UserLayout'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'
import { useEffect, useState } from 'react'
import { ApolloClient } from '@apollo/client'
import { signIn, useSession } from 'next-auth/react'
import inicializarApollo from 'src/lib/apolloClient'
import { SessionTFM } from './api/auth/[...nextauth]'
import { useRouter } from 'next/router'
import LoginPage from './pages/login'
import LoadingPage from './Loading'

// ** Extend App Props with Emotion
export type RootAppProps = {
    Component: NextPage,
    pageProps: any
}

// ** Configure JSS & ClassName
const RootApp = (props: RootAppProps) => {
    const { Component, pageProps } = props
    const [client, setClient] = useState<ApolloClient<any>>();
    const { status, data } = useSession();
    const router = useRouter();
    const session: SessionTFM = data as any

    console.log("variables IF ", !session, status)
    console.log("session", session)
    useEffect(() => {
        if (status === 'unauthenticated') router.replace('/pages/login')

    }
        , [status])

    if (status === 'loading') if (status === 'loading') return <LoadingPage />
    const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)


    //<LoginPage/>

    return (
        <>

            (<SettingsProvider>
                <SettingsConsumer>
                    {({ settings }) => {
                        return <ThemeComponent settings={settings}>

                            {getLayout(<Component {...pageProps} />)}


                        </ThemeComponent>
                    }}
                </SettingsConsumer>
            </SettingsProvider>
            )


        </>
    )
}

export default RootApp
