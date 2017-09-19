import { Component } from '@angular/core';
import { Student } from './user';
@Component({
	selector: 'input-output',
	template: `
			<h1>{{parentTitle}}</h1>
			<child-one
				[ctMsg]="cityMsg" 				
				[ctArray]="cityArray"	
				[studentAddMsg]="stdAddMsg" 						
				(addStudentEvent) = "saveData($event)"
				(sendMsgEvent) = "printMsg($event)" >
			</child-one>

			
			<p>Name: {{stdFullName}}</p>				
			<p>Message: {{msg}}</p>	
			<child-two
				[studentMsg] = "stdMsg"				
				[stdLeader] = "stdLeaderObj" 	
				(addNumberEvent) = "printSum($event)" >
			</child-two>
			<p>Sum: {{sum}}</p>							
	       `
})
export class ParentComponent {
	parentTitle = 'Parent Component';

	//Property for child component one
	cityMsg = 'Indian City Names';
	cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
	stdAddMsg = 'Add Student';

	//Property for child component two
	stdMsg = 'Student Leader Detail';
	stdLeaderObj = new Student('Narendra', 'Modi');

	//Property used in parent
	stdFullName = '';
	sum = '';
	msg = '';

	saveData(std) {
		this.stdFullName = std.fname + ' ' + std.lname;
	}
	printSum(res) {
		this.sum = res;
	}
	printMsg(msg) {
		this.msg = msg;
	}
} 