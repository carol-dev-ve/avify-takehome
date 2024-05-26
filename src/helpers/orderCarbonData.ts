import { DataCarbonResponse, Generationmix } from "../interfaces/CarbonDataResponse";

  const orderGenerationMix(data: DataCarbonResponse): Generationmix[] => {
    const sortedData = data.data.generationmix.sort((a, b) => b.perc - a.perc);

    if (sortedData.length > 0) {
      sortedData[0].label = 'biggest';
      sortedData[sortedData.length - 1].label = 'lowest';
    }

    if (sortedData.length > 1) {
      sortedData[1].label = 'second biggest';
      sortedData[sortedData.length - 2].label = 'second lowest';
    }

    return sortedData;
  }
