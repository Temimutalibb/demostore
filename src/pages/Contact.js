import { taskList } from "../Men";

function Task({name, price}){
return(
    <li>{name}  {price}</li>
)
}
 

function Contact(){
const taskDisplay = taskList?.map((task)=> <Task name={task.name} price={task.price}/>);
 
return(
    <div>
        <ul>{taskDisplay}</ul>
    </div>
    )
} 


export default Contact;