import { Component, OnInit, Input } from "@angular/core";
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
  languages: any;

  constructor(private movieService: MovieService) {}

  //on submit takes ID of movie genre into a single string and compareing to API call
  onSubmit(form) {
    let genreIDs = [];

    for (let key in this.selectedGenres) {
      if (this.selectedGenres[key] === true) {
        genreIDs.push(key);
      }
    }

    // API call
    this.movieService
      .getMovie(form.value.language, form.value.year, genreIDs.join())
      .subscribe(data => {
        this.movies = data;
        // console.log(genreIDs.join());
        // console.log(this.movies);
      });

    console.log(this.movies);
    console.log("test");
    console.log(form.value.language);
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
      // console.log(this.genres);
    });
    // this.movieService.getLanguages().subscribe(data => {
    //   this.languages = data.languages;
    // });
  }
}
