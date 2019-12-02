import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "../services/movie-service.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  summaryVisible: boolean = true;
  @Input()
  movies: any = [];
  watchList: any[] = [];
  index: number;
  addStuff: boolean = true;
  added: boolean = true;

  // baseImageUrl: "https://image.tmdb.org/t/p/w500";

  constructor(private movieService: MovieService) {}

  //sets clicked on movie into array in service
  // addToWatchList(movie: any) {
  //   console.log(movie);
  //   this.movieService.setToWatchList(movie);
  // }

  // addToWatchList(movie: any) {
  //   movie.added = !movie.added;
  //   if (movie.added === true) {
  //     this.watchList.push(movie);
  //   } else {
  //     this.watchList.splice(movie, 1);
  //   }
  //   this.movieService.setToWatchList(movie);
  // }

  addToWatchList(movie: any) {
    console.log("Watchlist start: ", this.watchList);
    if (movie.added === true) {
      let indexOfMovie = this.watchList.indexOf(movie);
      // this.watchList.splice(indexOfMovie, 1);
      this.movieService.setRemovedWatchList(indexOfMovie);
    } else {
      // this.watchList.push(movie);
      console.log("Watchlist push: ", this.watchList);
      this.movieService.setToWatchList(movie);
    }
    movie.added = !movie.added;
    console.log("Watchlist end: ", this.watchList);
  }

  toggleAdd() {
    this.addStuff = !this.addStuff;
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
      this.movies = data.results;
      console.log(this.movies);
    });
    this.watchList = this.movieService.getWatchList();
  }
}
