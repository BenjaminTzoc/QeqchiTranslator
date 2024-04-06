import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { TranslatorComponent } from './translator/translator.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path: '', redirectTo: 'translator', pathMatch: 'full'},
  {path: 'translator', component: TranslatorComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'notes', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
