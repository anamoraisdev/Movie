import { Serie } from "./serie"

export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface PropsMovie {
    item: Movie | Serie
}
export interface PropsMovies{
    itens: Movie[] | Serie[],
    title: string
}
