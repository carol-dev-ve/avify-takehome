import axios from "axios"
import { DataCarbonResponse } from "../../interfaces/CarbonDataResponse"

export const fetchCarbonIntensity = async (): Promise<DataCarbonResponse> => {
    try {
        const response = await axios.get("https://api.carbonintensity.org.uk/generation")
        return response.data
    } catch(error) {
        throw error(error.message || 'Error getting carbon intensity information')
    }
}