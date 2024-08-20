import React from "react";
import context from "./context";

const NoteState = (props) => {
    const s1 = {
        "name" : "Ahmad",
        "class" : "BCE"
    }
    return(
        <NoteState.Provider value={s1}>
            {props.children}
        </NoteState.Provider>
    )
}

export default NoteState;