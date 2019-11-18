import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { WatchlistPageComponent } from "./watchlist-page/watchlist-page.component";

const routes: Routes = [
  { path: "list", component: MovieListComponent },
  { path: "search", component: SearchCriteriaComponent },
  { path: "watch", component: WatchlistPageComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
