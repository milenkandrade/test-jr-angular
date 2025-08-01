import {createActionGroup, emptyProps, props} from '@ngrx/store';
import { Breed } from '../models/breed';
import { Page } from '../models/page';

const breedsAPIAction = createActionGroup({
  source: 'Breeds API',
  events: {
    loadTotalBreedsSuccess: props<{ page: Page}>(),
    loadTotalBreedsFailure: props<{error: string}>(),
    loadPageableSuccess: props<{breeds: Breed[]}>(),
    loadPagebleFailure: props<{error: string}>(),
  }
})

export const { loadTotalBreedsFailure, loadTotalBreedsSuccess, loadPageableSuccess, loadPagebleFailure } = breedsAPIAction

const breedsPageActions = createActionGroup({
  source: '',
  events: {
    loadTotalBreeds: props<{page:Page}>(),
    loadPageableBreeds: props<{page:Page}>()
  }
})

export const { loadTotalBreeds, loadPageableBreeds } = breedsPageActions
