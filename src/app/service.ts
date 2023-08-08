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
    releases: async () => {
        try {
            const responseReleases: responseReleases = await axios.get("https://api.themoviedb.org/3/trending/all/day", optionsRequest)
            const releases = responseReleases?.data?.results;
            return releases
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
    //mais votado
    moviesPopulary: async () => {
        try {
            const response: responseReleases = await axios.get(`https://api.themoviedb.org/3/movie/top_rated `, optionsRequest)
            const data = response.data.results
           return data
        } catch (error) {
            console.log(error)
        }
    },
    //agora nos cinemas 
    nowPlaying: async () => {
        try {
            const response: responseReleases = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, optionsRequest)
            const data = response.data.results
           return data
        } catch (error) {
            console.log(error)
        }
    },

    //em breve nos cinemas
    upcoming:async () => {
        try {
            const response: responseReleases = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, optionsRequest)
            const data = response.data.results
            return data
        } catch (error) {
            console.log(error)
        }
    },

    genreMovies:async (genre_id: number) => {
        try {
            const response: responseReleases = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre_id}`, optionsRequest)
            const data = response.data.results
            console.log("genreMovies:", data)
            return data
        } catch (error) {
            console.log(error)
        }
    },

    movies:async (genre_id: number) => {
        if(genre_id){
            try {
                const response: responseReleases = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre_id}`, optionsRequest)
                const data = response.data.results
                console.log("genreMovies:", data)
                return data
            } catch (error) {
                console.log(error)
            }
        }else{
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