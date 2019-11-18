import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "e2187bb9ffcef2876cf21eb5b5c4ac40";
const genreIndex = `https://api.themoviedb.org/3/genre/movie/list?api_key=e2187bb9ffcef2876cf21eb5b5c4ac40`;
const genreUrl = `with_genres=`; //add genre index
const voteAverage = `sort_by=vote_average`;
const releaseYear = `primary_release_year=`; //add release year

@Injectable({
  providedIn: "root"
})
export class MovieService {
  genreId = [
    {
      id: 28,
      name: "Action"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 10402,
      name: "Music"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 10770,
      name: "TV Movie"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "War"
    },
    {
      id: 37,
      name: "Western"
    }
  ];

  constructor(private http: HttpClient) {}

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
}
