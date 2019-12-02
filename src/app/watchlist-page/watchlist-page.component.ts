import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie-service.service";

@Component({
  selector: "app-watchlist-page",
  templateUrl: "./watchlist-page.component.html",
  styleUrls: ["./watchlist-page.component.css"]
})
export class WatchlistPageComponent implements OnInit {
  summaryVisible: boolean = true;
  watchList: any;
  index: any;

  constructor(private movieService: MovieService) {}

  //removes movie from the array that sends Set into service
  removeFromList(movie:number) {
    this.movieService.setRemovedWatchList(movie);
  }

  toggleSummary() {
    this.summaryVisible = !this.summaryVisible;
  }


  setIndex(i) {
    this.index = i;
    console.log(this.index);
  }
  //pulls in
  ngOnInit() {
    this.watchList = this.movieService.getWatchList();
  }
}
