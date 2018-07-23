import { Component, OnInit } from '@angular/core';

export class Data {
  day: string;
  oranges: number;
}

const data: Data[] = [{
  day: 'Monday',
  oranges: 3
}, {
  day: 'Tuesday',
  oranges: 2
}, {
  day: 'Wednesday',
  oranges: 3
}, {
  day: 'Thursday',
  oranges: 4
}, {
  day: 'Friday',
  oranges: 6
}, {
  day: 'Saturday',
  oranges: 11
}, {
  day: 'Sunday',
  oranges: 4
}];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  dataSource: any;

  constructor() {
  }

  ngOnInit() {
    this.dataSource = data;
  }

  customizeTooltip(arg: any) {
    return {
      text: arg.argumentText + '<br>' + arg.valueText
    };
  }

}
