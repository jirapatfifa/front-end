export async function getAllMovies() {

    try{
        //const response = await fetch('/api/users');
         const response = await fetch('http://localhost:3001/api/movie/all');
        //const response = await fetch('/api/movie/all');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

//---- ยังไม่เสร็จ ----
export async function createMovie(data) {
    const response = await fetch('http://localhost:4000/api/movie/insert', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data})
      })
    return await response.json();
}

// Example in MovieService.js
export async function getMovieSearch(search_text) {
    try {
        const response = await fetch(`http://localhost:4000/api/movie/search?search_text=${search_text}`);
        return await response.json();
    } catch (error) {
        return [];
    }
}

