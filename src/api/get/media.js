import { url } from "../config"

export const searchForMedia = async (section, param) => {
    console.log(section)
    // http request
    const res = await fetch(url.search(section, param));

    // handle error
    if (!res.ok) {
        console.log(res.status);
    }

    // get data
    const data = await res.json();
    const media = [];
    let sample = {};
    
    // parse data
    for (const result of data.results) {
        sample = {}
        sample.cover = url.poster(result.poster_path);
        sample.name = result.title || result.name;
        sample.date = result.release_date || result.first_air_date;
        sample.rating = result.vote_average;
        sample.language = result.original_language;
        sample.overview = result.overview;
        media.push(sample);
    }
    return {
        media,
        results: data.total_results
    };
}