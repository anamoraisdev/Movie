import axios from "axios";
import { Details, Serie } from "../interfaces/serie";
import { Movie, MoviesDetails } from "../interfaces/movie";
import { Person } from "../interfaces/person";
import { Genre } from "../interfaces/genre";

export const optionsRequest = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_KEY
    }
}

export interface ResponseMovies {
    data: {
        page: number
        results: Movie[]
    }
}
export interface ResponseSeries {
    data: {
        page: number
        results: Serie[]
    }
}
export interface ResponsePerson{
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
}
export interface ResponseMovieDetails {
    data: MoviesDetails
}
export interface ResponseDetails {
    data: Details 
}

export interface ResponseSearch{
    data: {
        page: number
        results: Movie[] | Serie[]
    }
}

const apiService = {

    moviesPopulity: async () => {
        try {
            const responseAllDay: ResponseMovies = await axios.get("https://api.themoviedb.org/3/trending/all/day", optionsRequest)
            const allDay = responseAllDay?.data?.results;

            const responseTopRated: ResponseMovies = await axios.get(`https://api.themoviedb.org/3/movie/top_rated `, optionsRequest)
            const topRated = responseTopRated.data.results

            const responseNowPlaying: ResponseMovies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, optionsRequest)
            const nowPlaying = responseNowPlaying.data.results

            const responseUpcoming: ResponseMovies = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, optionsRequest)
            const upcoming = responseUpcoming.data.results
            
            const moviesPopulity = {
                moviesAllDay: allDay,
                upcoming: upcoming,
                topRated: topRated,
                nowPlaying: nowPlaying
            }

            return moviesPopulity

        } catch (error) {
            console.log(error)
        }
    },

    genres: async () => {
        try {
            const response: ResponseGenres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, optionsRequest)
            const data = response?.data?.genres;
            return data
        } catch (error) {
            console.log(error)
        }
    },

    movies: async ({ name, id, type }: PropsFilter) => {
        if (type === "filter") {
            try {
                const response: ResponseSearch = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`, optionsRequest)
                const data = response.data.results
                return data

            } catch (error) {
                console.log(error)
            }
        } else if (type === "search") {
            try {
                const response: ResponseSearch = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}&language=pt-BR`, optionsRequest)
                const data = response.data.results
                return data

            } catch (error) {
                console.log(error)
            }
        }else {
            return null
        }
    },

    seriesPopulity: async () => {

        try {
            const response: ResponseSeries = await axios.get(`https://api.themoviedb.org/3/tv/popular`, optionsRequest)
            const allDay = response.data.results

            const responseNowPlaying: ResponseSeries = await axios.get(`https://api.themoviedb.org/3/tv/airing_today`, optionsRequest)
            const nowPlaying = responseNowPlaying.data.results

            const responseTopRated: ResponseSeries = await axios.get(`https://api.themoviedb.org/3/tv/top_rated`, optionsRequest)
            const topRated = responseTopRated.data.results

            return {
                allDay: allDay,
                nowPlaying: nowPlaying,
                topRated: topRated
            }

        } catch (error) {
            console.log(error)
        }
    },

    person: async () => {
        try {
            const response: ResponsePerson = await axios.get(`https://api.themoviedb.org/3/person/popular`, optionsRequest)
            const data = response?.data?.results;
            return data
        } catch (error) {
            console.log(error)
        }
    }

}

export default apiService;