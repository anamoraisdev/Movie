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
        total_pages: number
        total_results: number
    }
}
export interface ResponseGenres {
    data: {
        genres: Genre[]
    }
}
export interface PropsFilter {
    name?: string | undefined,
    id?: number | undefined,
    searchModel: string | undefined | null
    isFiltering: boolean | undefined
    pageCorrect?: number
    isMovieOrSerie: string | undefined
    
}
export interface ResponseSearch {
    data: {
        page: number
        results: SerieApi[] 
        total_pages: number
        total_results: number
    }
}
export interface ResponseSearchMovies {
    data: {
        page: number
        results: MovieApi[] 
        total_pages: number
        total_results: number
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
