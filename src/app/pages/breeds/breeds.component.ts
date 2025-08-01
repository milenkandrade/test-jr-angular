import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPageableBreeds, loadTotalBreeds } from '../../store/breeds.actions';
import { selectBreedsList, selectLoading, selectPage } from '../../store/breed.selector';
import { AsyncPipe } from '@angular/common';
import { BreedCardComponent } from "../../components/breed-card/breed-card.component";

@Component({
  selector: 'app-breeds',
  imports: [AsyncPipe, BreedCardComponent],
  template: `
    <div class="p-10 mx-auto flex flex-col items-center">
      <h1 class="text-3xl">Cat Breeds Viewer</h1>
      <h3 class="text-xl py-5">Page: {{page().page+1}}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        @if(!(isLoading | async)){
          @for (breed of breeds | async; track breed.id) {
            <app-breed-card [breed$]="breed"/>
          }
        }@else {
          <div class="skeleton w-80 h-100"></div>
          <div class="skeleton w-80 h-100"></div>
          <div class="skeleton w-80 h-100"></div>
          <div class="skeleton w-80 h-100"></div>
          <div class="skeleton w-80 h-100"></div>
          <div class="skeleton w-80 h-100"></div>
        }
      </div>
      <div class="mx-auto">
        <button (click)="onPrev()" class="btn btn-soft btn-primary w-20 {{ page().page > 0 && !(isLoading | async) ? '':'btn-disabled' }}">
          @if ((isLoading | async)) {
            <span class="loading loading-dots loading-sm"></span>
          }@else {
            Previus
          }
        </button>
        <span class="kbd kbd-lg mx-2"> {{page().page+1}} </span>
        <button (click)="onNext()" class="btn btn-soft btn-primary w-20 {{ page().page < page().total-1 && !(isLoading | async) ? '':'btn-disabled' }}">
          @if ((isLoading | async)) {
            <span class="loading loading-dots loading-sm"></span>
          }@else {
            Next
          }
        </button>
      </div>
    </div>
  `,
  styles: ``
})
export default class BreedsComponent {
  store = inject(Store);
  breeds = this.store.select(selectBreedsList);
  isLoading = this.store.select(selectLoading);
  page = this.store.selectSignal(selectPage);

  ngOnInit(){
    this.store.dispatch(loadTotalBreeds( { page:this.page() } ));
    this.store.dispatch(loadPageableBreeds( { page:this.page() } ));
  }

  onNext(){
    this.store.dispatch(loadPageableBreeds( { page:{ ...this.page(), page:this.page().page + 1 } } ));
  }

  onPrev(){
    this.store.dispatch(loadPageableBreeds( { page:{ ...this.page(), page:this.page().page - 1 } } ));
  }

}
