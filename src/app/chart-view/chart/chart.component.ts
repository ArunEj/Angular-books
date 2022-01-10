import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
   // Doughnut
   public doughnutChartLabels: Label[] = ['Investment', 'Interest'];
   public doughnutChartData: MultiDataSet = [
     [350, 100]
   ];
   public doughnutChartType: ChartType = 'doughnut';
   constructor() { }

   ngOnInit() {
   }
}
