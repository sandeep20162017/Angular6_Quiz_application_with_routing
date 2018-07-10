import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
{path: 'entry' ,  component:EntryComponent},
{path: 'questions' ,  component:QuestionsComponent},
{path: '**', redirectTo:'',component:EntryComponent}

];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
    
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule {  

}
//export const exportomponet = [LoginComponent,RegisterUserComponent]