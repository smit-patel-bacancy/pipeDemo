import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes-demo',
  templateUrl: './built-in-pipes-demo.component.html',
  styleUrls: ['./built-in-pipes-demo.component.scss']
})
export class BuiltInPipesDemoComponent {

  public currentDate: Date = new Date();
  public randomSentence: string = 'The quick brown fox jumps over the lazy dog';

  public jsonVal: Object = {moo: 'foo', goo: {too: 'new'}};

}
