const apiBooks = import.meta.env.VITE_API_BOOKS;
const apiCovers = import.meta.env.VITE_API_COVERS;

export const url = {
    searchBooks: (section, param) => {
        if (section.toLowerCase() == 'author'){
            return `${apiBooks}/search.json?author=${param}`;
        }
        if (section.toLowerCase() == 'name'){
            return `${apiBooks}/search.json?q=${param}`; 
        }
        if (section.toLowerCase() == 'subject'){
            return `${apiBooks}/subjects/${param}.json`;
        }
    },
    covers: (cover) => {
        return `${apiCovers}/${cover}-L.jpg`;
    }
}   