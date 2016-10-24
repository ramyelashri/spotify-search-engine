import {Component} from '@angular/core';
import {SpotifyService} from './services/spotify.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/main.html',
  providers: [SpotifyService]
})
export class MainComponent {}
