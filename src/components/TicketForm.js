import React, {useState} from "react";
import '../styles.css';


export default function TicketForm(){

    const [title, setTitle]  = useState("");
    const [description, setDescription]  = useState("");
    const [priority, setPriority] = useState("1");


    const priorityLabels = {
        1: "Low",
        2: "Medium",
        3: "High"
    }


  

    const clearForms = ()=>{
        setTitle("");
        setPriority("");
        setDescription("");
    }

    const handleSubmit = (e)=>{
        e.preventDefault() // we do not want to reload the page on submit.
        clearForms();
    }

    return (
    <form onSubmit={handleSubmit} className="ticket-form">
        <div>
        <label>Title</label>
        <input 
        type="text" 
        value={title} 
        className="form-input" 
        onChange={e => setTitle(e.target.value)}></input>
        </div>

        <div>
        <label>Description</label>
        <textarea 
        type="text" 
        value={description} 
        className="form-input" 
        onChange={e => setDescription(e.target.value)}></textarea>
        </div>

        <fieldset >
            <legend>Priority</legend>
            {
                Object.entries(priorityLabels).map(([value, label])=>( 
                    <label key={value} className="priority-label">
                        <input type="radio" 
                        value={value} 
                        checked={priority === value} 
                        className="priority-input"
                        onChange={(e) => setPriority(e.target.value)}></input>
                        {label}
                    </label>
                ))
            }
        </fieldset>

        <button type="submit" className="button">Submit</button>
    </form>
    )
}