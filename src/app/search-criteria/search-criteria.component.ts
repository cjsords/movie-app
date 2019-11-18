import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie-service.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  movies: any[];

  constructor(private movieService: MovieService) {}

  // parameter to recieve data from form
  // doSearch(topic: string) {
  //   this.movieService.getMovie(topic).subscribe(data => {
  //     this.movies = data.movie_results;
  //   });
  // }

  ngOnInit() {
    this.movieService.getMovie().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
}
