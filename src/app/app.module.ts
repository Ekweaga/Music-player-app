import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ArtistComponent } from './artist/artist.component';
import {HttpClientModule} from "@angular/common/http";
import { WelcomeComponent } from './welcome/welcome.component';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component'


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PlaylistsComponent,
    ArtistComponent,
    WelcomeComponent,
    AlbumComponent,
    SearchComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignUPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
