import axios from "axios"

export const fetchCarbonIntensity = async () => {
    try {
        const response = await axios.get("https://api.carbonintensity.org.uk/generation")
        return response.data
    } catch(error) {
        throw error(error.message || 'Error getting carbon intensity information')
    }
}