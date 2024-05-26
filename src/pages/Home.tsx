import React from 'react'
import Layout from '../components/Layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { fetchCarbonIntensity } from '../api/carbonintensity/carbonintensity'

const Home = () => {

    const queryCarbonData = useQuery({
        queryKey: ['carbonIntensity'],
        queryFn:()=>fetchCarbonIntensity()
    })

    console.log(queryCarbonData)

  return (
    <Layout>Home Test</Layout>
  )
}

export default Home