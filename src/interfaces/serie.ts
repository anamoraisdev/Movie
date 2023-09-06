import { Genre } from "./genre"

export interface SerieApi {
    backdrop_path: string,
    first_air_date: number,
    genre_ids: Genre[]
    id: number,
    name: string,
    origin_country: string,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number,
}


export interface SerieDetails {
    name: string,
    backdrop_path: string,
    genres:object[],
    homepage: string,
    id: number,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: object[]
}