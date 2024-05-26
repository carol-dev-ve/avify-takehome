import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Layout from '../components/Layout/Layout'
import CardsLayout from '../components/Layout/CardsLayout'
import Loading from '../components/ui/Loading'
import ErrorComponent from '../components/ui/Error'
import Accordion from '../components/Accordion/Accordion'
import PieChart from '../components/Graph/PieChart'
import BarChart from '../components/Graph/BarChart'
import { fetchCarbonIntensity } from '../api/carbonintensity/carbonintensity'
import { orderGenerationMix } from '../helpers/orderCarbonData'
import { Generationmix } from '../interfaces/CarbonDataResponse'

const Home = () => {

  const [data, setData] = useState<Generationmix[]>([])

  const queryCarbonData = useQuery({
    queryKey: ['carbonIntensity'],
    queryFn: fetchCarbonIntensity
  })

  // Set Data Ordered and Mapping as Required
  useEffect(() => {
    if(!queryCarbonData.isLoading && !queryCarbonData.error && queryCarbonData.data) {
      setData(orderGenerationMix(queryCarbonData?.data?.data?.generationmix || []))
    }
  }, [queryCarbonData.data?.data])


  return (
    <Layout>
      {queryCarbonData.isLoading && <Loading />}
      {queryCarbonData.error && <ErrorComponent message="Error getting data" />}
      {!queryCarbonData.isLoading && !queryCarbonData.error &&
        <>
          <CardsLayout cardsData={data} />
          <Accordion title="Summary">
            <BarChart dataGraph={data} />
            <PieChart dataGraph={data} />
          </Accordion>
        </>
      }
    </Layout>
  )
}

export default Home