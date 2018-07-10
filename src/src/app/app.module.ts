import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { QuestionService } from '../app/services/question.service';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    QuestionsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    FormsModule, AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap:  [AppComponent]
})
export class AppModule { }