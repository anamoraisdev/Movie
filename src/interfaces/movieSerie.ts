
import { Genre } from "./genre";
import { Person } from "./person";

export interface MovieSerie {
    adult: boolean | undefined, 
    id: number,
    name: string,
    original_name: string,
    first_air_date: number| undefined,
    backdrop: string,
    genres: Genre[],
    media_type: string,
    overview: string,
    popularity: number,
    poster: string,
    release: string | undefined,
    average: number,
    count: number,
    isMovie: boolean,
}

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
    name: string,
    original_name: string,
    original_title: string,
    first_air_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface PropsMovieSerie {
    item: MovieSerie 
}
export interface PropsMoviesSeries{
    itens?: MovieSerie[] | undefined,
    title: string,
    person?: Person[]
}