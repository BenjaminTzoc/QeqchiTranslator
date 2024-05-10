import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { TranslatorComponent } from './translator/translator.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { NotesComponent } from './notes/notes.component';
import { CardComponent } from './card/card.component';
import { AnimalsComponent } from './animals/animals.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DictionaryModule } from './dictionary/dictionary.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    TranslatorComponent,
    DictionaryComponent,
    NotesComponent,
    CardComponent,
    AnimalsComponent,
    NumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DictionaryModule,
    MatIconModule,
    SlickCarouselModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
