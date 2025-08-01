import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BreedState } from "./breed.reducer"

export const selectBreedState = createFeatureSelector<BreedState>('breeds');
export const selectBreedsList = createSelector(selectBreedState, state => state.listBreeds );
export const selectPage = createSelector(selectBreedState, state => state.page );
export const selectLoading  = createSelector(selectBreedState, state => state.loading);
export const selectError = createSelector(selectBreedState, state => state.error);
