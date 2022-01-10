import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: any;
    submitted = false;
    investValue: any;
    // yearValue: any;
    interestValue: any;
    autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
    vertical = false;
    tickInterval = 1;
    Interestvalue = 0;
    yearValue = 0;
    InterestData: any;
    yearData: any;
    interestData: any;
    totalInvestment: any;
    investData: any;
    totalInterest: any;
    totalInterestValue: any;
    totalInvestmentValue: any;
    
    toppings = new FormControl();
    toppingList: string[] = ['Education', 'Car', 'House', 'Retirement'];
    
    getSliderTickInterval(): number | 'auto' {
      if (this.showTicks) {
        return this.autoTicks ? 'auto' : this.tickInterval;
      }
  
      return 0;
    }
       // Doughnut
    public doughnutChartLabels: Label[] = ['Total Investment','Total Interest'];
    public doughnutChartData: ChartDataSets[] = [];
    public doughnutChartType: ChartType = 'doughnut';
   
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        });
        
        this.doughnutChartData = [{ data: [this.totalInvestmentValue,this.totalInterestValue] ,backgroundColor: ['rgb(255, 99, 132)','rgb(54, 162, 235)'],borderColor: [
            'rgb(255, 99, 132)','rgb(54, 162, 235)']}];
    }
    
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log("data",this.registerForm.value);
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
    investRange(value: any){
        
        this.investData = value;
        console.log(this.investData);
    }
    yearRange(value: any){
        
        this.yearData = value;
        console.log(this.yearData);
    }
    interestRange(value: any){
       
        this.interestData = value;
        console.log(this.interestData);
    }

    totalInvest(){
        let n =12;
        var interestDecimal=this.interestData/100;
        this.totalInvestmentValue = this.investData * (Math.pow((1 + (interestDecimal / n)), (n * this.yearData)));
        console.log(this.totalInvestmentValue,"total");

    }

    totaInterest(){
        let n =12;
        var investDeci=this.investData/100;
        this.totalInterestValue = this.interestData * (Math.pow((1 + (investDeci / n)), (n * this.yearData)));
        console.log(this.totalInterestValue,"total Int");
        this.ngOnInit();
    }
}
