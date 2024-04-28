import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-demo',
  templateUrl: './custom-pipe-demo.component.html',
  styleUrls: ['./custom-pipe-demo.component.scss']
})
export class CustomPipeDemoComponent {

  public name: string = '';
  public type: string = '';
  public filterType: string = '';
  public arrayData: { name: string, type: string }[] = [];

  ngOnInit(): void {
    this.arrayData = [
      { name: 'Name', type: 'string' },
      { name: 'Age', type: 'number' },
      { name: 'SubjectList', type: 'array' },
      { name: 'MarksList', type: 'array' },
      { name: 'ContactNo', type: 'number' },
      { name: 'Address', type: 'string' },
    ];
  }

  public onAddData(): void {
    this.arrayData.push({ name: this.name, type: this.type });
    this.name = '';
    this.type = '';
  }
}
