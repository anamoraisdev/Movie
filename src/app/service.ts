import axios from "axios";

const optionsRequest = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_KEY
    }
}

export interface responseReleases {
    data: {
        page: number
        results: object[]
    }
}

export interface responseGenres {
    data: {
        genres: object[]
    }
}

const apiService = {
    //em destaque hoje
    populity: async () => {
        try {
            const responseAllDay: responseReleases = await axios.get("https://api.themoviedb.org/3/trending/all/day", optionsRequest)
            const allDay = responseAllDay?.data?.results;
            const responseTopRated: responseReleases = await axios.get(`https://api.themoviedb.org/3/movie/top_rated `, optionsRequest)
            const topRated = responseTopRated.data.results
            const responseNowPlaying: responseReleases = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, optionsRequest)
            const nowPlaying = responseNowPlaying.data.results
            const responseUpcoming: responseReleases = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, optionsRequest)
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
            const response: responseGenres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, optionsRequest)
            const data = response?.data?.genres;
            return data
        } catch (error) {
            console.log(error)
        }
    },

    movies: async (genre_id: number) => {
        if (genre_id) {
            try {
                const response: responseReleases = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre_id}`, optionsRequest)
                const data = response.data.results
                console.log("genreMovies:", data)
                return data
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const response: responseReleases = await axios.get(`https://api.themoviedb.org/3/discover/movie`, optionsRequest)
                const data = response.data.results
                return data

            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default apiService;