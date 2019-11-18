import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "e2187bb9ffcef2876cf21eb5b5c4ac40";
const genreIndex = `https://api.themoviedb.org/3/genre/movie/list?api_key=e2187bb9ffcef2876cf21eb5b5c4ac40`;
const genreUrl = `with_genres=`; //add genre index
//e.g. http://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=e2187bb9ffcef2876cf21eb5b5c4ac40
const voteAverage = `sort_by=vote_average`;
//e.g. http://api.themoviedb.org/3/discover/movie?&sort_by=vote_average.desc&api_key=e2187bb9ffcef2876cf21eb5b5c4ac40
const releaseYear = `primary_release_year=`; //add release year
//e.g. http://api.themoviedb.org/3/discover/movie?primary_release_year=1999&sort_by=popularity.desc&api_key=e2187bb9ffcef2876cf21eb5b5c4ac40

@Injectable({
  providedIn: "root"
})
export class MovieService {
  //created array for watchlist movies
  watchMovies = [];

  constructor(private http: HttpClient) {}

  //putting movies into array "our use is from movie list into array"
  setToWatchList(movie) {
    this.watchMovies.push(movie);
    console.log(this.watchMovies);
  }

  //pulls from movies array in service "our use from array to watch page"
  getWatchList() {
    return this.watchMovies;
  }

  //removes items from movie array "our use from watch page into array"
  setRemovedWatchList(movie) {
    this.watchMovies.splice(movie, 1);
    console.log(this.watchMovies);
  }

  //gets API info from the web
  getMovie(): Observable<any> {
    return this.http.get(
      "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc",
      {
        params: {
          api_key: API_KEY
        }
      }
    );
  }
  getGenre(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list", {
      params: {
        api_key: API_KEY
      }
    });
  }
}
