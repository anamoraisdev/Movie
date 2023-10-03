import axios from "axios";
import { MovieApi, MovieSerie, SerieApi } from "../interfaces/movieSerie";
import { PropsFilter, ResponseGenres, ResponsePerson, ResponseSearch, ResponseSearchMovies} from "../interfaces/response";
import { Person } from "../interfaces/person";

export const optionsRequest = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_KEY
    }
}
export interface PropsPerson {
    name: string,
    searchModel: string,
}
const payloadDefault = {
    resultSearch: null,
    pageAtual: 1,
    name: undefined,
    searchModel: null,
    id: undefined,
    isFiltering: false,
    isMovieOrSerie: "",
    totalPages: 0,
    totalResults: 0
}

export interface ResponseGet {
    data: Person[] | MovieSerie[]
    response: ResponseSearch | ResponsePerson
}

const apiService = {

    get: async (urlPage: string, type: string, pageCorrect?: number) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: import.meta.env.VITE_API_KEY
            },
            params: {
                page: pageCorrect
            }
        }
        if (type === "serie") {
            try {
                const response: ResponseSearch = await axios.get(`https://api.themoviedb.org/3/${urlPage}`, options) 
                const data = response?.data?.results
                const dataFormat = apiService.formatSeriePopulity(data)
                const payload = {
                    data: dataFormat,
                    response: response
                }
                return payload

            } catch (error) {
                console.log(error)
            }
        } else if (type === "movie") {
            try {
                const response: ResponseSearchMovies = await axios.get(`https://api.themoviedb.org/3/${urlPage}`, options)
                const data = response?.data?.results
                const dataFormat = apiService.formatMoviesPopulity(data)
           
                const payload = {
                    data: dataFormat,
                    response: response
                }
                return payload

            } catch (error) {
                console.log(error)
            }
        } else if (type === "person") {
            try {
                const response: ResponsePerson = await axios.get(`https://api.themoviedb.org/3/${urlPage}`, options)
                const dataFormat = response.data.results
            
                const payload = {
                    data: dataFormat,
                    response: response
                }
                return payload


            } catch (error) {
                console.log(error)
            }
        }
    },
    
    formatMoviesPopulity: (data: MovieApi[]) => {
        const allMoviesFormat: MovieSerie[] = []

        data.map((movie) => {
            let nameOrTitle: string
            let releaseOrFirst: string

            if (movie.title === undefined && movie.release_date === undefined) {
                nameOrTitle = movie.name
                releaseOrFirst = movie.first_air_date
            } else {
                nameOrTitle = movie.title
                releaseOrFirst = movie.release_date
            }

            const movieFormat = {
                adult: movie.adult,
                first_air_date: undefined,
                backdrop: movie.backdrop_path,
                genres: movie.genre_ids,
                id: movie.id,
                media_type: movie.media_type,
                overview: movie.overview,
                popularity: movie.popularity,
                poster: movie.poster_path,
                release: releaseOrFirst,
                name: nameOrTitle,
                original_name: movie.original_title,
                average: movie.vote_average,
                count: movie.vote_count,
                isMovie: true,
                favorite: false,
            }

            allMoviesFormat.push(movieFormat)
        })
        return allMoviesFormat


    },

    formatSeriePopulity: (data: SerieApi[]) => {
        const allSeriesFormat: MovieSerie[] = []
        data.map((item) => {
            const serieFormat = {
                adult: undefined,
                first_air_date: item.first_air_date,
                backdrop: item.backdrop_path,
                genres: item.genre_ids,
                id: item.id,
                original_name: item.original_name,
                media_type: "Serie",
                overview: item.overview,
                popularity: item.popularity,
                poster: item.poster_path,
                release: undefined,
                name: item.name,
                average: item.vote_average,
                count: item.vote_count,
                isMovie: false,
                favorite: false
            }

            allSeriesFormat.push(serieFormat)

        })
        return allSeriesFormat
    },

    formatPayloadSearch: (response: ResponseSearch | ResponsePerson, data: Person[] | MovieSerie[], params: PropsFilter) => {
        
        const payload = {
            resultSearch: data,
            pageAtual: response?.data.page,
            name: params.name,
            searchModel: params.searchModel,
            id: params.id,
            isFiltering: params.isFiltering,
            isMovieOrSerie: params.isMovieOrSerie,
            totalPages: response?.data?.total_pages,
            totalResults: response?.data?.total_results
        }
        return payload
    },

    getPopulity: async () => {

        const allDaySerie = await apiService.get("tv/popular", "serie",1) 
        const nowPlayingSerie = await apiService.get("tv/on_the_air", "serie", 1)
        const topRatedSerie = await apiService.get("tv/top_rated", "serie", 1)
        const airingToday = await apiService.get("tv/airing_today", "serie", 1)

        const allDay = await apiService.get("trending/all/day", "movie", 1)
        const topRated = await apiService.get("movie/top_rated", "movie", 1)
        const nowPlaying = await apiService.get("movie/now_playing", "movie", 1)
        const upcoming = await apiService.get("movie/upcoming", "movie", 1)
        
        const movies = {
            allDay: allDay?.data as MovieSerie[],
            topRated: topRated?.data as MovieSerie[],
            nowPlaying: nowPlaying?.data as MovieSerie[],
            upcoming: upcoming?.data as MovieSerie[]
        }

        const series = {
            allDay: allDaySerie?.data as MovieSerie[],
            topRated: topRatedSerie?.data as MovieSerie[],
            nowPlaying: nowPlayingSerie?.data as MovieSerie[],
            upcoming: airingToday?.data as MovieSerie[]
        }
        return { movies: movies, series: series }
    },

    getResultSearch: async ({ name, id, searchModel, isFiltering, pageCorrect, isMovieOrSerie }: PropsFilter) => {
        const params = { name, id, searchModel, isFiltering, pageCorrect, isMovieOrSerie }
        switch (isMovieOrSerie) {

            case 'person':
                if(name){
                    try {
                        const response = await apiService.get(`search/person?query=${name}&language=pt-BR`, "person", pageCorrect) as ResponseGet
                        const payload = apiService.formatPayloadSearch(response.response, response.data, params)
                        return payload
                    } catch (error) {
                        console.log(error)
                    }

                }
                break;
            case 'movie':
                if (name) {
                    try {
                        const response = await apiService.get(`search/movie?query=${name}&language=pt-BR`, "movie", pageCorrect) as ResponseGet
                        const payload = apiService.formatPayloadSearch(response.response, response.data, params)
                        return payload

                    } catch (error) {
                        console.log(error)
                    }
                } else if (id !== undefined && isFiltering) {
                    try {
                        const response = await apiService.get(`discover/movie?with_genres=${id}`, "movie", pageCorrect) as ResponseGet
                        const payload = apiService.formatPayloadSearch(response?.response, response.data, params)

                        return payload
                    } catch (error) {
                        console.log(error)
                    }
                }
                break;
            case 'serie':
                if (name) {
                    try {
                        const response = await apiService.get(`search/tv?query=${name}&language=pt-BR`, "serie", pageCorrect) as ResponseGet
                        const payload = apiService.formatPayloadSearch(response.response, response.data, params)
                        return payload
                    } catch (error) {
                        console.log(error)
                    }
                } else if (id !== undefined && isFiltering) {
                    try {
                        const response = await apiService.get(`discover/tv?with_genres=${id}`, "serie", pageCorrect) as ResponseGet
                        const payload = apiService.formatPayloadSearch(response.response, response.data, params)
                        return payload
                    } catch (error) {
                        console.log(error)
                    }
                }
                break;
            default: return payloadDefault
        }
    },

    person: async () => {
        try {
            const response: ResponsePerson = await axios.get(`https://api.themoviedb.org/3/person/popular`, optionsRequest)
            const data = response?.data?.results
            
            return data
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
}
export default apiService;