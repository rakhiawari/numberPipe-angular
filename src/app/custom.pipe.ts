import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"changeFormat"})
export class customPipe implements PipeTransform {
    transform(value:string):string{

        if(value.length!=10){
            return "Invalid";
        }
        else if(!parseInt(value)){
            return "Invalid";
        }
        else {
            var newNumber='('+value.substring(0,3)+')'+'-'+value.substring(4,7)+'-'+value.substring(value.length-4);
        }
        return newNumber;
    }

}

// (986)-085-6329