export class graph {
    barChartLabels:string[];
    barChartData:datas[]
}    

export class datas{
    data :  any[];
    label : string;
}

export class options {
title : string;
series : data[];
}

export class data {    
    name : string;
    data : number[];
    allowPointSelect : boolean;
}