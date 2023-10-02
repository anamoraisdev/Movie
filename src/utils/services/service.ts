import axios from "axios"
import { Credit, ResponseCredits, ResponseMovieDetails, ResponseMovies, ResponsePerson, ResponseSerieDetails, ResponseSeries } from "../../interfaces/response"
import { Details } from "../../interfaces/details"
import { optionsRequest } from "../../redux/service"
import { MovieApi, MovieSerie } from "../../interfaces/movieSerie"
import { Person, PersonDetails } from "../../interfaces/person"

export interface ResponseDetailsPerson {
    data: PersonDetails
}
export interface response {
    data: {
        cast: creditePerson[],
        craw: object[]
    }
}
export interface creditePerson extends MovieApi{
    character: string
}

const service = {

    searchDetails: async (tag: string, id_format: number, setItem: React.Dispatch<React.SetStateAction<Details | undefined>>) => {
        if (tag === "m") {
            try {
                const response: ResponseMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${id_format}`, optionsRequest)
                const item = response.data

                const itemFormat: Details = {
                    id: item.id,
                    name: item.title,
                    original_name: item.original_title,
                    genres: item.genres,
                    overview: item.overview,
                    popularity: item.popularity,
                    poster: item.poster_path,
                    production_companies: item.production_companies,
                    budget: item.budget,
                    homepage: item.homepage,
                    revenue: item.revenue,
                    average: item.vote_average,
                    count: item.vote_count,
                    runtime: item.runtime,
                    release: item.release_date,
                    status: item.status,
                    tagline: item.tagline,
                    seasons: undefined,
                    last_air_date: undefined,
                    number_of_episodes: undefined,
                    number_of_seasons: undefined,
                    last_episode_to_air: undefined
                }
                setItem(itemFormat)
            } catch (error) {
                console.log(error)
            }

        } else if (tag === "s") {
            try {
                const response: ResponseSerieDetails = await axios.get(`https://api.themoviedb.org/3/tv/${id_format}`, optionsRequest)
                const item = response.data

                const itemFormat: Details = {
                    id: item.id,
                    name: item.name,
                    original_name: item.original_name,
                    genres: item.genres,
                    overview: item.overview,
                    popularity: item.popularity,
                    poster: item.poster_path,
                    production_companies: item.production_companies,
                    budget: item.budget,
                    homepage: item.homepage,
                    revenue: undefined,
                    average: item.vote_average,
                    count: item.vote_count,
                    runtime: undefined,
                    release: undefined,
                    status: item.status,
                    tagline: item.tagline,
                    seasons: item.seasons,
                    last_air_date: item.last_air_date,
                    number_of_episodes: item.number_of_episodes,
                    number_of_seasons: item.number_of_seasons,
                    last_episode_to_air: item.last_episode_to_air,
                }

                setItem(itemFormat)

            } catch (error) {
                const idExternal = await axios.get(`https://api.themoviedb.org/3/movie/${id_format}/external_ids`)
                console.log("id external:", idExternal)
            }
        }


    },

    getCredits: async (tag: string, id_format: number, setCredits: React.Dispatch<React.SetStateAction<Credit[] | undefined>>): Promise<void> => {
        if (tag === "m") {
            try {
                const response: ResponseCredits = await axios.get(`https://api.themoviedb.org/3/movie/${id_format}/credits`, optionsRequest)
                const data = response.data.cast
                setCredits(data)
            } catch (error) {
                console.log(error)
            }

        } else if (tag === "s") {
            try {
                const response: ResponseCredits = await axios.get(`https://api.themoviedb.org/3/tv/${id_format}/credits`, optionsRequest)
                const data = response.data.cast
                setCredits(data)

            } catch (error) {
                console.log(error)
            }
        }
    },

    getRecommendations: async (tag: string, id_format: number, setRecommendations: React.Dispatch<React.SetStateAction<MovieSerie[] | undefined>>): Promise<void> => {

        if (tag === "m") {
            try {
                const response: ResponseMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id_format}/recommendations`, optionsRequest)
                const recommendations = response.data.results
                const recommendationsFormat: MovieSerie[] = []

                recommendations.map((item) => {
                    const itemFormat = {
                        adult: item.adult,
                        id: item.id,
                        name: item.title,
                        original_name: item.original_title,
                        first_air_date: undefined,
                        backdrop: item.backdrop_path,
                        genres: item.genre_ids,
                        media_type: "movie",
                        overview: item.overview,
                        popularity: item.popularity,
                        poster: item.poster_path,
                        release: item.release_date,
                        average: item.vote_average,
                        count: item.vote_count,
                        isMovie: true,
                        favorite: false,
                    }
                    recommendationsFormat.push(itemFormat)
                })
                setRecommendations(recommendationsFormat)

            } catch (error) {
                console.log(error)
            }
        } else if (tag === "s") {
            try {
                const response: ResponseSeries = await axios.get(`https://api.themoviedb.org/3/tv/${id_format}/recommendations`, optionsRequest)
                const recommendations = response.data.results
                const recommendationsFormat: MovieSerie[] = []

                recommendations.map((item) => {
                    const itemFormat = {
                        adult: undefined,
                        id: item.id,
                        name: item.name,
                        original_name: item.original_name,
                        first_air_date: undefined,
                        backdrop: item.backdrop_path,
                        genres: item.genre_ids,
                        media_type: "movie",
                        overview: item.overview,
                        popularity: item.popularity,
                        poster: item.poster_path,
                        release: undefined,
                        average: item.vote_average,
                        count: item.vote_count,
                        isMovie: true,
                        favorite: false,
                    }
                    recommendationsFormat.push(itemFormat)
                })
                setRecommendations(recommendationsFormat)

            } catch (error) {
                console.log(error)
            }
        }
    },

    getDetailsPerson: async (id: number, setPerson: React.Dispatch<React.SetStateAction<PersonDetails | undefined>>): Promise<void> => {
        try {
            const response: ResponseDetailsPerson = await axios.get(`https://api.themoviedb.org/3/person/${id}`, optionsRequest)
            const data = response?.data
            setPerson(data)

        } catch (error) {
            console.log(error)
        }
    },

    getCreditsPerson: async (id: number, setCredits: React.Dispatch<React.SetStateAction<MovieSerie[] | undefined>>): Promise<void> => {
        try {
            const response: response = await axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits`, optionsRequest)
            const data = response?.data.cast
            console.log("data", data)

            const allMoviesFormat: MovieSerie[] = []

            data.map((movie) => {
                let isMovie: boolean;
                let nameOrTitle: string
                let releaseOrFirst: string
                if (movie.media_type === "movie") {
                    isMovie = true
                    nameOrTitle = movie.title
                    releaseOrFirst = movie.release_date

                } else {

                    nameOrTitle = movie.name
                    releaseOrFirst = movie.first_air_date
                    isMovie = false
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
                    isMovie: isMovie,
                    favorite: false,
                    character: movie.character
                }

                allMoviesFormat.push(movieFormat)
            })





            setCredits(allMoviesFormat)

        } catch (error) {
            console.log(error)
        }
    },
}

export default service