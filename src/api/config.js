const api = import.meta.env.VITE_API_URL;
const apiPoster = import.meta.env.VITE_API_POSTER;
const apiKey = import.meta.env.VITE_API_KEY;

export const url = {
    search: (section, param, page=1) => {
        if (section.toLowerCase() == 'films'){
            return `${api}/search/movie?api_key=${apiKey}&query=${param}&page=${page}`;
        }
        if (section.toLowerCase() == 'tv'){
            return `${api}/search/tv?api_key=${apiKey}&query=${param}&page=${page}`;
        }
    },
    discover: (section, page=1) => {
        if (section.toLowerCase() == 'films'){
            return `${api}/discover/movie?api_key=${apiKey}&page=${page}`;
        }
        if (section.toLowerCase() == 'tv'){
            return `${api}/discover/tv?api_key=${apiKey}&page=${page}`;
        }
    },
    poster: (poster) => {
        return `${apiPoster}/${poster}`;
    }
}   