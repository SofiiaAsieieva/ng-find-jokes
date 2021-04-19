import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss'],
})
export class FfTestPageComponent {
  jokes: Joke[] = [];
  BASE_URL = 'https://api.chucknorris.io/jokes/search?query';
  input = '';

  constructor(private http: HttpClient) {}

  onSubmit(event: any) {
    event.preventDefault();
  }

  inputHandler(event: any) {
    this.input = event.target.value;
  }

  findJokes() {
    this.http.get<Jokes>(`${this.BASE_URL}=${this.input}`).subscribe((jokes) => {
      this.jokes = jokes.result;
      console.log(this.jokes);
    });
  }
}
