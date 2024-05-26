import axios from "axios"
import { DataCarbonResponse } from "../../interfaces/CarbonDataResponse"

export const fetchCarbonIntensity = async (): Promise<DataCarbonResponse> => {
    console.log("aqui")
    try {
        console.log("entro")
        const response = await axios.get("https://api.carbonintensity.org.uk/generation")
        console.log(response)
        return response.data
    } catch(error) {
        throw error(error.message || 'Error getting carbon intensity information')
    }
}