import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "../services/movie-service.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  summaryVisible: boolean = true;
  @Input() movies: any[];
  watchList: any[];
  index: number;
  // baseImageUrl: "https://image.tmdb.org/t/p/w500";

  constructor(private movieService: MovieService) {}

  //sets clicked on movie into array in service
  addToWatchList(movie: any) {
    console.log(movie);
    this.movieService.setToWatchList(movie);
  }

  setIndex(i) {
    this.index = i;
    console.log(this.index);
  }

  toggleSummary() {
    this.summaryVisible = !this.summaryVisible;
  }

  //displays json info
  ngOnInit() {
    this.movieService.getMovie("", "", "").subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
}
