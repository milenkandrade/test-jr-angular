import { createReducer, on } from "@ngrx/store";
import { Breed } from "../models/breed";
import { loadTotalBreeds, loadPageableBreeds, loadTotalBreedsSuccess, loadTotalBreedsFailure, loadPagebleFailure, loadPageableSuccess } from "./breeds.actions";
import { Page } from "../models/page";

export interface BreedState {
  listBreeds: Breed[];
  page: Page
  loading: boolean;
  error: string;
}

export const initialState: BreedState = {
  listBreeds: [],
  page: {
    total: 0,
    limit: 9,
    page: 0
  },
  loading: false,
  error: ''
}

export const breedReducer = createReducer(
  initialState,

  on(loadTotalBreeds, state => ({...state, loading:true, error: ''})),
  on(loadTotalBreedsSuccess, (state, {page}) => ({...state,loading:false,page})),
  on(loadTotalBreedsFailure, (state, {error})=> ({...state,loading:false,error})),

  on(loadPageableBreeds, (state, { page }) => ({...state, page, loading:true, error: ''})),
  on(loadPageableSuccess, (state, {breeds}) => ({...state,loading:false,listBreeds:breeds})),
  on(loadPagebleFailure, (state, {error})=> ({...state,loading:false,error}))
)
