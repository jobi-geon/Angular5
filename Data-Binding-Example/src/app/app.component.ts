import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Data Binding in Angular';
  inter = 'This is Interpolation';
  invoke = 'Invoking method';
  color = '#000';
  count = 0;
  name: string='';

  getTitle(): string {
    return this.invoke
  }

  ClickPressed(): void {
    this.count = this.count+1;
  }
}
