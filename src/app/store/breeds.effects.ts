import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatServiceService } from "../services/cat-service.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import { loadPageableBreeds, loadPageableSuccess, loadPagebleFailure, loadTotalBreeds, loadTotalBreedsFailure, loadTotalBreedsSuccess } from "./breeds.actions";
import { HttpErrorResponse } from "@angular/common/http";

export class BreedsEffects {
  private actions = inject(Actions);
  private breedsService = inject(CatServiceService);

  loadTotalBreedsEffect = createEffect(() =>
    this.actions.pipe(
      ofType(loadTotalBreeds),
      exhaustMap((({ page }) => this.breedsService.getAllBreeds()
    .pipe(
      map(breeds => (loadTotalBreedsSuccess({ page: { ...page, total: Math.ceil(breeds.length/page.limit) } } ))),
      catchError((error: HttpErrorResponse) => of(loadTotalBreedsFailure({error: error.message ?? 'Error with the API'})))
    )))
    )
  )

  loadPagebleBreedsEffect = createEffect(() =>
    this.actions.pipe(
      ofType(loadPageableBreeds),
      exhaustMap((({ page }) => this.breedsService.getPageableBreeds(page)
    .pipe(
      map(breeds => (loadPageableSuccess( { breeds } ))),
      catchError((error: HttpErrorResponse) => of(loadPagebleFailure({error: error.message ?? 'Error with the API'})))
    )))
    )
  )
}
