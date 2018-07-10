import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  //private URL: string = '/questionList.json';

  private questionSet = {
    "questions": [
      {
        "id": 1,
        "name": "Which is the largest country in the world by population?",
        "options": [
          {
            "name": "India",
            "value": 0
          },
          {
            "name": "USA",
            "value": 0
          },
          {
            "name": "China",
            "value": 1
          },
          {
            "name": "Russia",
            "value": 0
          }
        ]
      },
      {
        "id": 2,
        "name": "When did the second world war end?",
        "options": [
          {
            "name": "1945",
            "value": 1
          },
          {
            "name": "1939",
            "value": 0
          },
          {
            "name": "1944",
            "value": 0
          },
          {
            "name": "1942",
            "value": 0
          }
        ]
      },
      {
        "id": 3,
        "name": "Which was the first country to issue paper currency?",
        "options": [
          {
            "name": "USA",
            "value": 0
          },
          {
            "name": "France",
            "value": 0
          },
          {
            "name": "Italy",
            "value": 0
          },
          {
            "name": "China",
            "value": 1
          }

        ]
      },
      {
        "id": 4,
        "name": "Which city hosted the 1996 Summer Olympics?",
        "options": [
          {
            "name": "Atlanta",
            "value": 1
          },
          {
            "name": "Sydney",
            "value": 0
          },
          {
            "name": "Athens",
            "value": 0
          },
          {
            "name": "Beijing",
            "value": 0
          },

        ]
      },
      {
        "id": 5,
        "name": "Who invented telephone?",
        "options": [
          {
            "name": "Albert Einstein",
            "value": 0
          },
          {
            "name": "Alexander Graham Bell",
            "value": 1
          },
          {
            "name": "Isaac Newton",
            "value": 0
          },
          {
            "name": "Marie Curie",
            "value": 0
          }
        ]
      }
    ]
  }


  private lastQuestion = {
    "id": 4,
    "name": "This is last Question?",
    "options": [
      {
        "name": "Submit",
        "value": 1
      },
      {
        "name": "Cancel",
        "value": 2
      }
    ]
  };


  constructor(private http: Http) {  }

  getQuestions() {
    return this.questionSet.questions;
  }

  getQuestion(no) {
    if (no < this.questionSet.questions.length) {
      return this.questionSet.questions[no];
    }
    else {
      return this.lastQuestion;
    }
  }



}