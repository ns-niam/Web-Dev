import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housinglocation";
import { HousingService } from "../housing.service";
@Component({
  selector: "app-home",
  imports: [HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track housingLocation.id) {
      <app-housing-location
        [housingLocation]="housingLocation"
      ></app-housing-location>
      }
    </section>
  `,
  styles: `.results {
    display: grid;
    column-gap: 14px;
    row-gap: 14px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
    margin-top: 50px;
    justify-content: space-around;
  }
  input[type="text"] {
    border: solid 1px var(--primary-color);
    padding: 10px;
    border-radius: 8px;
    margin-right: 4px;
    display: inline-block;
    width: 30%;
  }
  button {
    padding: 10px;
    border: solid 1px var(--primary-color);
    background: var(--primary-color);
    color: white;
    border-radius: 8px;
  }
  @media (min-width: 500px) and (max-width: 768px) {
    .results {
        grid-template-columns: repeat(2, 1fr);
    }
    input[type="text"] {
        width: 70%;
    }   
  }
  @media (max-width: 499px) {
    .results {
        grid-template-columns: 1fr;
    }    
  }`,
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
