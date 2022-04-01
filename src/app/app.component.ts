// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'basics';
// }

// decorator
import { Component } from '@angular/core';

// applying the decorator
@Component({
  // our app's tag that would be passed to index.html at the root dir
  selector: 'app-root',
  // template that would be rendered; pass url to render the file
  // inline template
  // template: `<p>Hello angular</p>`,
  // inline style
  // styles: [''],
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`],
})
// app component
export class AppComponent {
  quote = 'choose your destiny';
  imgUrl =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.background-pictures.com%2Fwp-content%2Fuploads%2F2021%2F08%2Fhogwarts-castle-background-001-1479x1536.jpg&f=1&nofb=1';

  images = [
    '../assets/Gryffindor.png',
    '../assets/Hufflepuff.png',
    '../assets/Ravenclaw.png',
    '../assets/Slytherin.png',
  ];

  currentDate = new Date();

  cost = 3999;

  testResult = 42;

  characters = {
    names: ['Hermione', 'Luna', 'Draco', 'Cederic'],
    houses: ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'],
  };

  ptsToGrif = false;

  fontSize = 24;

  getQuote() {
    return this.quote;
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
