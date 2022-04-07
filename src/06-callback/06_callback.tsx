import React, {MouseEvent} from "react";

const User = () => {

    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        alert('user has been deleted')
    }

    const saveUser = () => {
        alert('user has been saved')
    }

    const onBlur = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onBlur={onBlur}>Denis</textarea>

            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}

export default User
