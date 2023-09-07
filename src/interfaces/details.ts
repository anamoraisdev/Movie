import { Genre } from "./genre"

export interface Details{
    id: number,
    name: string,
    original_name: string,
    genres:Genre[],
    overview: string,
    popularity: number,
    poster: string,
    production_companies: Company[]
    budget: number,
    homepage: string,
    average: number,
    count: number,
    tagline: string,
    status: string,
    revenue: number| undefined
    runtime: string | undefined
    release: string | undefined
    seasons: object[] | undefined
    last_air_date: number | undefined
    number_of_episodes: number | undefined
    number_of_seasons: number | undefined
    last_episode_to_air: object[] | undefined
}

export interface SerieDetailsApi{
    id: number,
    name: string,
    original_name: string,
    genres:Genre[],
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: Company[]
    budget: number,
    homepage: string,
    vote_average: number,
    vote_count: number,
    status: string,
    tagline: string,
    seasons: object[],
    last_air_date: number,
    number_of_episodes: number
    number_of_seasons: number
    last_episode_to_air: object[]
}


export interface MovieDetailsApi{
    id: number,
    title: string,
    genres: Genre[],
    poster_path: string,
    overview: string,
    homepage: string,
    budget: number,
    popularity: number,
    original_title: string,
    production_companies: Company[],
    release_date: string,
    status: string,
    tagline: string,
    runtime: string,
    revenue: number,
    vote_count: number,
    vote_average: number,
}

export interface Company{
    name: string,
    origin_country: string, 
}