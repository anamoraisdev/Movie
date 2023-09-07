import { Genre } from "./genre"
import { MovieApi, MovieSerie, SerieApi } from "./movieSerie"
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