 import { taskList } from "./DemoTest";

function Task({name, price}){
return(
    <li>{name} : {price}</li>
)
}

export default function CheckOut(){

taskList?.map((tasks)=> < Task key={tasks.id}
 name={tasks.name} price={tasks.price} />);
 
return(
     <div>
        <ol>
         {taskList}
        </ol>
     </div>  
    
)
} 