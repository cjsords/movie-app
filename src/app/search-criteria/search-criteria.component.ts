import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie-service.service";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  movies: any[];
  genres: any[];
  selectedGenres: any = {};

  constructor(private movieService: MovieService) {}

  onSubmit(form) {
    let genreIDs = [];
    for (let key in this.selectedGenres) {
      if (this.selectedGenres[key] === true) {
        genreIDs.push(key);
      }
    }

    this.movieService
      .getMovie(form.english, form.value.year, genreIDs.join())
      .subscribe(data => {
        this.movies = data;

        console.log(genreIDs.join());
        console.log(this.movies);
      });

    console.log("form submitted");
    console.log(form);
    console.log(form.value);
    console.log(genreIDs);
    console.log(form.value.year);
  }

  ngOnInit() {
    this.movieService.getMovie("", "", "").subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
    this.movieService.getGenre().subscribe(data => {
      this.genres = data.genres;
      console.log(this.genres);
    });
  }
}
