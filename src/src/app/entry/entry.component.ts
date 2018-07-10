import { Component } from '@angular/core';

@Component({
  selector: 'entry-screen',
  templateUrl: './entry.component.html',
  styleUrls: ['entry.component.scss']
})
export class EntryComponent {
    model: any = {};
 
    onSubmit() {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }
}