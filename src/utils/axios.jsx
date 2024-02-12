import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdhMTJiMTUzOWZlNjMxNGVlZGZjNTUzZGRmM2JmOCIsInN1YiI6IjY1YzU3YWY3NDFlZWUxMDE2MTk0ZDgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eBTEARfBpTS-qg30aTo8yQn4twAefqfqhZOqI1trcNY'
      }
});

export default instance;
