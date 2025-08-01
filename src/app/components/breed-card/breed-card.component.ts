import { Component, input } from '@angular/core';
import { Breed } from '../../models/breed';

@Component({
  selector: 'app-breed-card',
  imports: [],
  template: `
    @let breed = breed$();
    @if (breed) {
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            class="size-80 object-cover"
            src="https://cdn2.thecatapi.com/images/{{breed.reference_image_id}}.jpg"
            alt="{{breed.name}}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{breed.name}}</h2>
          <p>{{breed.description}}</p>

        </div>
      </div>
    } @else {

    }
  `,
  styles: ``
})
export class BreedCardComponent {
  breed$ = input<Breed | null>(null) ;

}
