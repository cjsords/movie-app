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
  selectedGenres: any ={};

  constructor(private movieService: MovieService) {}

  // parameter to recieve data from form
  // doSearch(topic: string) {
  //   this.movieService.getMovie(topic).subscribe(data => {
  //     this.movies = data.movie_results;
  //   });
  // }

  onSubmit(form) {
    let genreIDs =[];
    for (let key in this.selectedGenres){
      if (this.selectedGenres[key]=== true) {
        genreIDs.push(key)}
      }


    console.log("form submitted");
    console.log(form);
    console.log(form.value);
    console.log(genreIDs);


  }

  ngOnInit() {
    this.movieService.getMovie().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
    this.movieService.getGenre().subscribe(data => {
      this.genres = data.genres;
      console.log(this.genres);
    });
  }
}
