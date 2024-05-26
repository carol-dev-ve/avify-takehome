import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { fetchCarbonIntensity } from '../api/carbonintensity/carbonintensity'
import CardsLayout from '../components/Layout/CardsLayout'
import Loading from '../components/ui/Loading'
import ErrorComponent from '../components/ui/Error'
import { orderGenerationMix } from '../helpers/orderCarbonData'
import Accordion from '../components/Accordion/Accordion'
import PieChart from '../components/Graph/PieChart'
import BarChart from '../components/Graph/BarChart'

const Home = () => {

  const queryCarbonData = useQuery({
    queryKey: ['carbonIntensity'],
    queryFn: fetchCarbonIntensity
  })


  return (
    <Layout>
      {queryCarbonData.isLoading && <Loading />}
      {queryCarbonData.error && <ErrorComponent message="Error getting data" />}
      {!queryCarbonData.isLoading && !queryCarbonData.error &&
        <>
          <CardsLayout cardsData={orderGenerationMix(queryCarbonData?.data?.data?.generationmix || [])} />
          <Accordion title="Summary">
            <BarChart dataGraph={orderGenerationMix(queryCarbonData?.data?.data?.generationmix || [])} />
            <PieChart dataGraph={orderGenerationMix(queryCarbonData?.data?.data?.generationmix || [])} />
          </Accordion>
        </>
      }
    </Layout>
  )
}

export default Home