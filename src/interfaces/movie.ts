import { Genre } from "./genre"


export interface Movie {
    adult: boolean | undefined, 
    first_air_date: number| undefined,
    backdrop: string,
    genres: Genre[],
    id: number,
    media_type: string,
    overview: string,
    popularity: number,
    poster: string,
    release: string | undefined,
    name: string,
    original_name: string,
    average: number,
    count: number,
    isMovie: boolean,
    favorite: boolean
}

export interface MovieApi {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Genre[],
    id: number,
    media_type: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    original_title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}


export interface MoviesDetails{
    adult: boolean,
    budget: number,
    genres_ids: Genre[],
    homepage: string,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    production_companies: object[],
    production_countries: object[],
    release_date: string,
    spoken_languages: string,
    status: boolean,
    tagline: string,
    title: string,
    video: boolean,
}

export interface PropsMovie {
    item: Movie
}
export interface PropsMovies{
    itens: Movie[],
    title: string
}
