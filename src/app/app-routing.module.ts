import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { TranslatorComponent } from './translator/translator.component';
import { NotesComponent } from './notes/notes.component';
import { AnimalsComponent } from './animals/animals.component';
import { NumbersComponent } from './numbers/numbers.component';

const routes: Routes = [
  {path: '', redirectTo: 'translator', pathMatch: 'full'},
  {path: 'translator', component: TranslatorComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'numbers', component: NumbersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
