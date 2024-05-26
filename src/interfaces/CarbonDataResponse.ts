export interface DataCarbonResponse {
    data: Data;
}

export interface Data {
    from:          string;
    to:            string;
    generationmix: Generationmix[];
}

export interface Generationmix {
    fuel: string;
    perc: number;
    label?:string
}
