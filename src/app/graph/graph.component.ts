import { LoginComponent } from './../login/login.component';
import { data } from './../_services/check';
import { Component, OnInit, Input } from '@angular/core';
import { GraphService} from './graph.service'
import {graph} from './graph'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit   {
  
 public barChartLabels:Array<string> = [];
 public barChartData:any[];
//  private i : number;

  constructor(private graphService : GraphService) { }

  ngOnInit() {
    this.show = "0"
    // this.i = 0;
    this.getdata();

  }
    getdata() {
     
    this.graphService.getGraph()
    .subscribe(
      resp => {
        // this.model = resp;
        
        // this.barChartLabels = resp.barChartLabels;  
        // this.barChartLabels.push[resp.barChartLabels[0]]
          // this.barChartData = Object.assign({},resp.barChartData)
          // this.fns(resp.barChartData);
          // this.barChartData = new Array(resp.barChartData)
        this.barChartData = resp.barChartData;  
        // this.barChartData.push('');
         this.show = "1";
         this.fn(resp.barChartLabels)
        console.log("data received",resp)
      },
      err => {
        console.log("error", err)
      }
    )
  }

  // fns(data) {
  // let i = 0
  // for(let val of data) {
  // let j=0
  // for(let d of val.data) {
  //     this.barChartData[i].data[j].push(d[j])
  //     j = j+1;
  // }

  // this.barChartData[i].label = val.label
  // i = i+1;
  // }
  // }

  fn(data) {
    // console.log("fn called", data)
    let i = 0;
    for (let val of data) {
      // console.log("i",i,"value",val)
      this.barChartLabels.push(data[i])
      // console.log("barChartLabels",this.barChartLabels[i],"data",data[i])
      i++;
    }    
    console.log("label",this.barChartLabels)
  }
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   private model : graph;
  public show : string;
  // public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  // public barChartData:any[] = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
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
