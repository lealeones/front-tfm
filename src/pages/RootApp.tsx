// ** Next Imports
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
// ** Loader Import
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev"
import NProgress from 'nprogress'


// ** Emotion Imports
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import UserLayout from 'src/layouts/UserLayout'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import '../../styles/globals.css'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
    Component: NextPage
    emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
    Router.events.on('routeChangeStart', () => {
        NProgress.start()
    })
    Router.events.on('routeChangeError', () => {
        NProgress.done()
    })
    Router.events.on('routeChangeComplete', () => {
        NProgress.done()
    })
}


loadDevMessages();
loadErrorMessages();


// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps } } = props
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_BACKEND_APP + '/graphql',
        cache: new InMemoryCache(),
    });


    // Variables
    const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

    return (
        <>
            {client && (
                <ApolloProvider client={client}>
                    <SettingsProvider>
                        <SettingsConsumer>
                            {({ settings }) => {
                                return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
                            }}
                        </SettingsConsumer>
                    </SettingsProvider>
                </ApolloProvider>
            )}


        </>
    )
}

export default App
