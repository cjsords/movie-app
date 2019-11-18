import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie-service.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: any[];
  // baseImageUrl: "https://image.tmdb.org/t/p/w500";

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovie().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
}
