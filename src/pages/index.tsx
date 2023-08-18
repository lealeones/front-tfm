// ** MUI Imports

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import

// ** Demo Components Imports
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormProfile } from 'src/components/FormProfile/FormProfile'
import { ProfileContextProvider } from 'src/components/context/profileContext'
import { SendProjectContextProvider } from 'src/components/context/sendProjectContext'
import { SessionTFM } from './api/auth/[...nextauth]'
import { HomeSecretaria } from 'src/views/home/HomeSecretaria'
import { HomeEstudiante } from 'src/views/home/HomeEstudiante'
import { HomeAdministrador } from 'src/views/home/HomeAdministrador'



const Dashboard = () => {
  const router = useRouter()
  const { data, status, update } = useSession()
  const session: SessionTFM = data as any


  // export enum RolUser {
  //   Administrador = 'ADMINISTRADOR',
  //   Estudiante = 'ESTUDIANTE',
  //   Otros = 'OTROS',
  //   Revisor = 'REVISOR',
  //   Secretaria = 'SECRETARIA'
  // }

  const homeToRole = {
    "ADMINISTRADOR": <HomeAdministrador />,
    "ESTUDIANTE": <HomeEstudiante />,
    // "OTROS": <Homead />,
    // "REVISOR": <FormProfileStep0 />,
    "SECRETARIA": <HomeSecretaria />,
  }

  console.log("session", session)

  useEffect(() => {
    if (!session && status == "unauthenticated") router.push('/pages/login')
  }, [status])
  if (status == "loading" || !session) return <div>recuperando session...</div>
  return (
    <>


{homeToRole[session.token.rol]}

        </>


      // <SendProjectContextProvider>
      //   {JSON.stringify(session)}
      //   {JSON.stringify(status)}
      //   <ProfileContextProvider>
      //     <FormProfile />
      //   </ProfileContextProvider>



      // </SendProjectContextProvider>


    /* <Box>
    <Stepper activeStep={0} alternativeLabel>
    {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
    </Stepper>
    
    
    
    
    <FormStep1 />
    
    
    
    </Box> */




    /*     <ApexChartWrapper>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Trophy />
            </Grid>
            <Grid item xs={12} md={8}>
              <StatisticsCard />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <WeeklyOverview />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TotalEarning />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <CardStatisticsVerticalComponent
                    stats='$25.6k'
                    icon={<Poll />}
                    color='success'
                    trendNumber='+42%'
                    title='Total Profit'
                    subtitle='Weekly Profit'
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatisticsVerticalComponent
                    stats='$78'
                    title='Refunds'
                    trend='negative'
                    color='secondary'
                    trendNumber='-15%'
                    subtitle='Past Month'
                    icon={<CurrencyUsd />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatisticsVerticalComponent
                    stats='862'
                    trend='negative'
                    trendNumber='-18%'
                    title='New Project'
                    subtitle='Yearly Project'
                    icon={<BriefcaseVariantOutline />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatisticsVerticalComponent
                    stats='15'
                    color='warning'
                    trend='negative'
                    trendNumber='-18%'
                    subtitle='Last Week'
                    title='Sales Queries'
                    icon={<HelpCircleOutline />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SalesByCountries />
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <DepositWithdraw />
            </Grid>
            <Grid item xs={12}>
              <Table />
            </Grid>
          </Grid>
        </ApexChartWrapper> */
  )
}

export default Dashboard
