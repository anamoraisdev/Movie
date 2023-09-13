import { MovieDetailsApi, SerieDetailsApi } from "./details"
import { Genre } from "./genre"
import { MovieApi,SerieApi } from "./movieSerie"
import { Person } from "./person"

export interface ResponseMovies {
    data: {
        page: number
        results: MovieApi[]
    }
}
export interface ResponseSeries {
    data: {
        page: number
        results: SerieApi[]
    }
}
export interface ResponsePerson {
    data: {
        page: number
        results: Person[]
    }
}
export interface ResponseGenres {
    data: {
        genres: Genre[]
    }
}
export interface PropsFilter {
    name?: string,
    id?: number,
    type: string
    isFiltering: boolean | undefined
    
}
export interface ResponseSearch {
    data: {
        page: number
        results: MovieApi[]
    }
}

export interface ResponseMovieDetails {
    data: MovieDetailsApi
}

export interface ResponseSerieDetails {
    data: SerieDetailsApi
}

export interface ResponseCredits{
    data: { cast: Credit[]}
}

export interface Credit{
    profile_path: string
    name: string
    character: string,
    id: number
}
