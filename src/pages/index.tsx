// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'
import FormStep1 from 'src/views/form-proj/FormStep1'
import { FormSendStep1 } from 'src/components/FormSendProject/FormSendStep1'
import { SendProjectContextProvider } from 'src/components/context/sendProjectContext'
import { FormSendProject } from 'src/components/FormSendProject/FormSendProject'
import { FormProfile } from 'src/components/FormProfile/FormProfile'
import { ProfileContextProvider } from 'src/components/context/profileContext'
import { useSession } from 'next-auth/react'
import { Router, useRouter } from 'next/router'
import Link from 'next/link'



const Dashboard = () => {
const router = useRouter()
  const { data: session , status , update } = useSession()

  
  
  
  // useEffect(() => {
    //   if (!session) 
    //     rout.push('/pages/login')
    // }, [])
    
  useEffect(() => {
    console.log("asdasd",session,status)
    // Always do navigations after the first render
    if(status == "unauthenticated") router.push('/pages/login', undefined, { shallow: true })
  }, [status])




  return (
    <>
    
    <SendProjectContextProvider>
{JSON.stringify(session )}
{JSON.stringify(status )}
      <ProfileContextProvider>
        <FormProfile />
      </ProfileContextProvider>

      {/* 
<FormSendProject/> */}

    </SendProjectContextProvider>

    </>

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
