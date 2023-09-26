import axios from "axios";
import { MovieApi, MovieSerie, SerieApi } from "../interfaces/movieSerie";
import { PropsFilter, ResponseGenres, ResponseMovies, ResponsePerson, ResponseSearch, ResponseSeries } from "../interfaces/response";


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

const apiService = {
    
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
    get: async (urlTag: string, type: string) => {
        if (type === "serie") {
            const response: ResponseSeries = await axios.get(`https://api.themoviedb.org/3/tv/${urlTag}`, optionsRequest)
            const data = response?.data?.results
            const dataFormat = apiService.formatSeriePopulity(data)
            console.log("dataFormat:", dataFormat)
            return dataFormat
        } else {
            const response: ResponseMovies = await axios.get(`https://api.themoviedb.org/3/${urlTag}`, optionsRequest)
            const data = response?.data?.results
            const dataFormat = apiService.formatMoviesPopulity(data)
            console.log("dataFormat:", dataFormat)
            return dataFormat
        }
    },
    getPopulity: async () => {

        const allDaySerie =  await apiService.get("popular", "serie") 
        const nowPlayingSerie = await apiService.get("on_the_air", "serie")
        const topRatedSerie = await apiService.get("top_rated", "serie")
        const airingToday = await apiService.get("airing_today", "serie")

        // Movies Populity
        const allDay = await apiService.get("trending/all/day", "movie")
        const topRated = await apiService.get("movie/top_rated", "movie")
        const nowPlaying = await apiService.get("movie/now_playing", "movie")
        const upcoming = await apiService.get("movie/upcoming", "movie")
    
        const movies = {
            allDay: allDay,
            topRated: topRated,
            nowPlaying: nowPlaying,
            upcoming: upcoming
        }

        const series = {
            allDay: allDaySerie,
            topRated: topRatedSerie,
            nowPlaying: nowPlayingSerie,
            upcoming: airingToday
        }
        console.log("payload:", movies, series)
        return {movies: movies, series: series}
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
    getResultSearch: async ({ name, id, searchModel, isFiltering, pageCorrect, isMovieOrSerie }: PropsFilter): Promise<void> => {
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
        switch (isMovieOrSerie) {
            case 'person':
                try {
                    const response: ResponsePerson = await axios.get(`https://api.themoviedb.org/3/search/person?query=${name}&language=pt-BR`, options)
                    const result = apiService.formatResultSearch(response, undefined)
                    const payload = {
                        resultSearch: result,
                        pageAtual: response.data.page,
                        name: name,
                        searchModel: searchModel,
                        id: undefined,
                        isFiltering: false,
                        isMovieOrSerie: isMovieOrSerie,
                        totalPages: response.data.total_pages,
                        totalResults: response.data.total_results
                    }

                    return payload

                } catch (error) {
                    console.log(error)
                }
                break;
            case 'movie':
                if (name) {
                    try {
                        const response: ResponseSearch = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}&language=pt-BR`, options)
                        const data = response.data.results
                        const result = apiService.formatResultSearch(undefined, data)

                        const payload = {
                            resultSearch: result,
                            pageAtual: response.data.page,
                            name: name,
                            searchModel: searchModel,
                            id: undefined,
                            isFiltering: false,
                            isMovieOrSerie: isMovieOrSerie,
                            totalPages: response.data.total_pages,
                            totalResults: response.data.total_results
                        }

                        return payload

                    } catch (error) {
                        console.log(error)
                    }
                } else if (id !== undefined && isFiltering) {
                    try {
                        const response: ResponseSearch = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`, options)
                        const data = response.data.results
                        const result = apiService.formatResultSearch(undefined, data)

                        const payload = {
                            resultSearch: result,
                            pageAtual: response.data.page,
                            searchModel: searchModel,
                            isFiltering: isFiltering,
                            id: id,
                            name: undefined,
                            isMovieOrSerie: isMovieOrSerie,
                            totalPages: response.data.total_pages,
                            totalResults: response.data.total_results
                        }

                        return payload

                    } catch (error) {
                        console.log(error)
                    }
                }
                break;
            case 'serie':
                if (name) {
                    try {
                        const response: ResponseSearch = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${name}&language=pt-BR`, options)
                        const data = response.data.results
                        const result = apiService.formatResultSearch(undefined, data)

                        const payload = {
                            resultSearch: result,
                            pageAtual: response.data.page,
                            name: name,
                            searchModel: searchModel,
                            id: undefined,
                            isFiltering: false,
                            isMovieOrSerie: isMovieOrSerie,
                            totalPages: response.data.total_pages,
                            totalResults: response.data.total_results
                        }

                        return payload

                    } catch (error) {
                        console.log(error)
                    }
                } else if (id !== undefined && isFiltering) {
                    try {
                        const response: ResponseSearch = await axios.get(`https://api.themoviedb.org/3/discover/tv?with_genres=${id}`, options)
                        const data = response.data.results
                        const result = apiService.formatResultSearch(undefined, data)
                        const payload = {
                            resultSearch: result,
                            pageAtual: response.data.page,
                            searchModel: searchModel,
                            isFiltering: isFiltering,
                            id: id,
                            name: undefined,
                            isMovieOrSerie: isMovieOrSerie,
                            totalPages: response.data.total_pages,
                            totalResults: response.data.total_results
                        }

                        return payload

                    } catch (error) {
                        console.log(error)
                    }
                }
                break;
            default: return payloadDefault
        }
    },
    formatResultSearch: (dataPerson?: ResponsePerson, dataTitles?: MovieApi[]) => {
        const resultMovieSerie: MovieSerie[] = []
        if (dataTitles !== undefined) {
            dataTitles.map((movie) => {
                const dataFormat = {
                    adult: movie.adult,
                    first_air_date: undefined,
                    backdrop: movie.backdrop_path,
                    genres: movie.genre_ids,
                    id: movie.id,
                    media_type: "Movie",
                    overview: movie.overview,
                    popularity: movie.popularity,
                    poster: movie.poster_path,
                    release: movie.release_date,
                    name: movie.title,
                    original_name: movie.original_title,
                    average: movie.vote_average,
                    count: movie.vote_count,
                    isMovie: false,
                    favorite: false,
                }
                resultMovieSerie.push(dataFormat)
            })
            return resultMovieSerie
        } else if (dataPerson !== undefined) {
            return dataPerson.data.results
        }
    },
    person: async () => {
        try {
            const response: ResponsePerson = await axios.get(`https://api.themoviedb.org/3/person/popular`, optionsRequest)
            const data = response?.data?.results;
            console.log("caiu no person")
            const payload = {
                person: data,
                search: null,
            }
            return payload
        } catch (error) {
            console.log(error)
        }

    }
}

export default apiService;