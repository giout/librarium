import { url } from "../config"

export const searchBooks = async (section, param) => {
    // http request
    const res = await fetch(url.searchBooks(section, param));

    // handle error
    if (!res.ok) {
        console.log(res.status);
    }

    // get data
    const data = await res.json();
    const books = [];
    let sample = {};
    
    // parse data
    for (const doc of data.docs) {
        sample = {}
        sample.cover = doc.isbn ? url.covers(doc.isbn[0]) : '';
        sample.name = doc.title ? doc.title : '';
        sample.author = doc.author_name ? doc.author_name[0] : '';
        sample.date = doc.first_publish_year ? doc.first_publish_year : 0;
        sample.rating = doc.ratings_average ? doc.ratings_average : 0;
        if (doc.subject) {
            sample.subjects = doc.subject.length > 5 ? doc.subject.slice(0,5) : doc.subject 
        }  
        if (doc.person) {
            sample.characters = doc.person.length > 3 ? doc.person.slice(0,3) : doc.person 
        }  
        books.push(sample)
    }
    return books;
}