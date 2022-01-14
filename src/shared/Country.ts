export interface Country {
    region: string, 
    name: string,
    maps: {openStreetMaps: string, googleMaps: string},
    population: string,
    languages: string,
    capital: string,
    latlng: string[],
    flags: {png: string, svg: string}
}