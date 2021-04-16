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
  input = '';

  constructor(private http: HttpClient) {}

  onSubmit(event: any) {
    event.preventDefault();
  }

  inputHandler(event: any) {
    this.input = event.target.value;
  }

  findJokes() {
    // @ts-ignore
    this.http.get<Joke[]>(`${environment.apiUrlJokes}=${this.input}`).subscribe((jokes) => {
      // @ts-ignore
      this.jokes = jokes.result;
      console.log(this.jokes);
    });
  }
}
