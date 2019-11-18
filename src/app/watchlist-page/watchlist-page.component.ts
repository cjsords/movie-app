import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie-service.service";

@Component({
  selector: "app-watchlist-page",
  templateUrl: "./watchlist-page.component.html",
  styleUrls: ["./watchlist-page.component.css"]
})
export class WatchlistPageComponent implements OnInit {
  watchList: any;

  constructor(private movieService: MovieService) {}

  //removes movie from the array that sends Set into service
  removeFromList(movie) {
    this.movieService.setRemovedWatchList(movie);
  }

  ngOnInit() {
    this.watchList = this.movieService.getWatchList();
  }
}
