import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MainComponent} from './main';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
