
import {Pipe,PipeTransform} from '@angular/core';


@Pipe({
	name:"filter"
})

export class FilterPipe implements PipeTransform{
	//transform(value:any,filteredString:string,propName:string):any{
	transform(value:any[],filteredStatus:string):any[]{
		if(!value) return [];
		if(!filteredStatus) return value;

		filteredStatus=filteredStatus.toLowerCase();
		return value.filter(val=>{
			return val.toLowerCase().includes(filteredStatus);
		});
		// if(value.length === 0 || filteredString ===" "){
		// 	return value;
		// }

		// const resultarray=[];
		// for(const item of value){
		// 	if(item.propName === filteredString){
		// 	resultarray.push(item)
		// }
		// }
		
		// return resultarray;
	}
}