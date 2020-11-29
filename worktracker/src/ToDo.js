import React from 'react'
import { ListItem, ListItemText, Button } from '@material-ui/core'
import { db } from './firebase_config'

export default function ToDoListItem({ todo, inprogress, id }) {
    const toggleInprogress = () => {
        db.collection("todo").doc(id).update({
            inprogress: !inprogress
        })
    }

    const deleteItem = () => {
        db.collection("todo").doc(id).delete();
    }

    return (
        <div className="ToDo" style={{ display: "flex" }}>
            <ListItem>
                <ListItemText
                    primary={todo}
                    secondary={inprogress ? "InProgress" : "Completed"} />
            </ListItem>
            <Button color="primary" onClick={toggleInprogress}>{inprogress ? "Done" : "UnDone"}</Button>
            {/* <Button onClick={toggleInprogress}>{inprogress ? "Done" : "UnDone"}</Button> */}
            <Button onClick={deleteItem} style={{color:"red"}}>X</Button>
        </div>
    )
}
