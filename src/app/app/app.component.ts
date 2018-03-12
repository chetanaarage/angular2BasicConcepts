import { Component, OnInit ,ContentChild,ElementRef,ViewChild,AfterContentInit} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ForgotComponent } from '../forgot/forgot.component';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterContentInit {
componentData = null;

createHelloWorldComponent(){
    this.componentData = {
      component: LoginComponent,
      inputs: {
        showNum: 9
      }
    };
  }

  createWorldHelloComponent(){
    this.componentData = {
      component: ForgotComponent,
      inputs: {
        showNum: 2
      }
    };
  }

	@ViewChild('checked') checked;
  //@ViewChild('hello')  el:ElementRef;
  @ContentChild('hello')  el:ElementRef;
  filteredStatus=' ';

	servers =[
    "hjk",
    "ghjk",
    "ghjkls"
  ];


  // constructor() { }

  	heading:string="Child component name passed from parent component";
 	name:string ="chetana";
 	age:number =25;
 	listname:string;
	lists:any;
	 

 // 	 parentTitle = 'Parent Component';

 // 	cityMsg = 'Indian City Names';
	// cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
 //    stdAddMsg = 'Add Student';

 	usernameof='';
  color: string;
  ngOnInit() {
    console.log(this.el);
  	//console.log(this.checked);
  	// this.listname='';
  	// this.lists=[];
  }
  ngAfterContentInit() {
     console.log(this.el);
  }

  // AddList(listname){
  // 	console.log(this.listname);
  // 	this.lists.push(this.listname);
  // 	this.listname='';
  // }

  //  newTodo: string;
   
  //  todoObj: any;

  //  AddList(listname) {
  //     this.todoObj = {
  //       newTodo: this.listname,
  //       completed: false
  //     }
  //     this.lists.push(this.todoObj);
  //     this.newTodo = '';
    
    
  //   }

  // onChecked(event,list){
  
  // 	console.log(list);

  // 		if(event.target.checked === true){
	 //  		//console.log(this.checked);
	 //  		this.checked.nativeElement.textContent.style.textDecoration="line-through";
  // 		}else{
  // 			this.checked.nativeElement.textContent.style.textDecoration="";
  // 		}

  	
  	

  	
  // }
 
  saveData(username){
  	this.usernameof=username;
  }

  


  // saveData(std) {
	 //    this.stdFullName = std.fname + ' ' + std.lname ;
  //       }	
  countries=[
    {
      name:"INDIA",
      cities:["Banglore","Belgaum"]
    },
    {name:"UK",
     cities:["Welwyn","London"]
    }
  ];

  cities=[];

  updateCountry(event){

    console.log(event);
    for(var i=0;i<this.countries.length;i++){
      if(event===this.countries[i].name){
        this.cities=this.countries[i].cities;
        console.log("in updateCountry",this.cities);
      }
    }
  }

   newTodo: string;
    todos: any;
    todoObj: any;

    constructor() {
      this.newTodo = '';
      this.todos = [];
    }

   //  addTodo(event) {
   //    this.todoObj = {
   //      newTodo: this.newTodo,
   //      completed: false
   //    }
   //    this.todos.push(this.todoObj);
   //    this.newTodo = '';
   //    event.preventDefault();
   //  }

   //  deleteTodo(index) {
   //    this.todos.splice(index, 1);
   //  }

   //  deleteSelectedTodos() {
   //    //need ES5 to reverse loop in order to splice by index
   //    for(var i=(this.todos.length -1); i > -1; i--) {
   //      if(this.todos[i].completed) {
   //        this.todos.splice(i, 1);
   //      }
   //    }
   //  }

   addTodoEvent(event){
    this.todoObj={
      newTodo:this.newTodo,
      completed:false
    }
    this.todos.push(this.todoObj);
    this.newTodo='';
    event.preventDefault();
  }

  deleteTodo(index){
    this.todos.splice(index,1);
  }

  deleteSelectedTodos(){
    for(let i=(this.todos.length-1);i>-1;i--){
      if(this.todos[i].completed){
        this.todos.splice(i,1);
      }
    }
  }
}
