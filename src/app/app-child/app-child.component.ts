import { Component, OnInit,Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {

  constructor() { }

  username:string;
 	@Input("heading") headingChild:string;

 	@Input("namefromparent") nameChild:string;
 	@Input("agefromParent") ageChild:string;


 	@Output('addStudentEvent')  addStdEvent = new EventEmitter<string>();

 	onSubmit(username){
  		this.addStdEvent.emit(this.username);
  	}

 // 	@Input() 
	// ctMsg : string; 
	
	// @Input('ctArray')
	// myctArray : Array<string>

 //        @Input('studentAddMsg') 
	// addMsg : string; 



  ngOnInit() {
  }

}
