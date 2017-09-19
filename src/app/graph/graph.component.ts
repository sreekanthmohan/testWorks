import { LoginComponent } from './../login/login.component';
import { data } from './../_services/check';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { GraphService } from './graph.service'
import { graph, options } from './graph'
import { ViewChild } from '@angular/core'
// import {ConfirmOptions} from 'angular2-bootstrap-confirm';
// import {Positioning} from 'angular2-bootstrap-confirm/position';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {

  public barChartLabels: Array<string> = [];
  public barChartData: any[];
  // private high: Array<series> = [];
  // private options = options
  private hShow: string = "0";

  //  private i : number;

  constructor(private graphService: GraphService) {

  }

  options: Object;
  chart: Object;
  saveChart(chart) {
    this.chart = chart;
  }
  // addPoint() {
  //   this.chart.series[0].addPoint(Math.random() * 10);
  //   this.chart.series[1].addPoint(Math.random() * -10);
  // }
  onPointSelect(point) {
    alert(`${point.y} is selected`);
  }
  onSeriesHide(series) {
    alert(`${series.name} is selected`);
  }

  ngOnInit() {
    this.show = "0"
    this.hShow = "0"
    // this.i = 0;
    this.getdata();
    this.getHigh();
    this.test.nativeElement.style.visibility = "hidden"
    // this.options = new Options;

    // setTimeout(() => {
    //   console.log("timed out")
    //   this.fileInput.nativeElement.click();
    // }, 5000);

  }



  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('test') test: ElementRef;
  // @ViewChild('exampleModal') public exampleModal:ModalDirective;

  private username: string = "test";
  private password: string = "data";

  counterValue :number = 5;
  s : number = 3;

  yes() {
    console.log("clicked yes")
    this.test.nativeElement.click();
  }

  no() {
    console.log("clicked no")
    this.test.nativeElement.click();
  }

  getHigh() {
    this.graphService.getHighData()
      .subscribe(
      resp => {
        this.options = resp;

        console.log("options", this.options)
        // console.log("series", series)
        this.hShow = "1";
      },
      err => {
        console.log("error", err)
      }
      )
  }

  //   this.options = {
  //   title: { text: 'angular2-highcharts example' },
  //   series: [{
  //     name: 's1',
  //     data: [2, 3, 5, 8, 0],
  //     allowPointSelect: true
  //   }, {
  //     name: 's2',
  //     data: [-2, -3, -5, -8, -13],
  //     allowPointSelect: true
  //   }]
  // };

  getdata() {


    this.graphService.getGraph()
      .subscribe(
      resp => {
        this.barChartData = resp.barChartData;
        this.show = "1";
        this.fn(resp.barChartLabels)
        console.log("data received", resp)
      },
      err => {
        console.log("error", err)
      }
      )
  }


  fn(data) {
    let i = 0;
    for (let val of data) {
      this.barChartLabels.push(data[i])
      i++;
    }
    console.log("label", this.barChartLabels)
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  private model: graph;
  public show: string;
  // public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  // public barChartData:any[] = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }



}
