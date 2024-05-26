import { Generationmix } from "../interfaces/CarbonDataResponse";

export const orderGenerationMix = (data: Generationmix[]): Generationmix[] => {
  const sortedData = [...data].sort((a, b) => b.perc - a.perc);

  if (sortedData.length > 0) {
    sortedData[0].label = 'biggest';
    sortedData[sortedData.length - 1].label = 'lowest';
  }


  let maxPerc = sortedData[0].perc;
  let minPerc = sortedData[sortedData.length - 1].perc;

  // Find all items with the same maximum percentage and label them as "biggest"
  for (let i = 1; i < sortedData.length && sortedData[i].perc === maxPerc; i++) {
    sortedData[i].label = 'biggest';
  }

  // Find all items with the same minimum percentage and label them as "lowest"
  for (let i = sortedData.length - 2; i >= 0 && sortedData[i].perc === minPerc; i--) {
    sortedData[i].label = 'lowest';
  }

  return sortedData;
};