import { Component } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.css'],
})
export class JokesPageComponent {
  daJoke = 'This is the only place you can type chuck norris';
  categoriesArray = [];

  constructor(private jokeS: JokesService) {}
  // when the component is initialised
  async ngOnInit() {
    const response = await this.jokeS.getRndJoke();
    console.log(response);
    this.daJoke = response.value;
    this.categoriesArray = await this.jokeS.getCategories();
  }
  // the function that trigger on click
  async clickGenerate() {
    // this.ngOnInit();
    const response = await this.jokeS.getRndJoke();
    console.log(response);
    this.daJoke = response.value;
  }
  async selectCat(c: string) {
    alert(c);
  }
}
