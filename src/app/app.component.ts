import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `<div>
			  <label>name: </label>
			  <input [(ngModel)]="hero.name" placeholder="name">
			</div>`,
})
export class AppComponent  {
	name = 'Angular';
	hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	}
	
}
