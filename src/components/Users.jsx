import {useState, useEffect, useContext} from "react";
import { fetchUsers } from "../api";
import ErrorAPI from "./ErrorAPI";
import { UserContext } from "../contexts/user";
import { AvatarContext } from "../contexts/avatar";
const uuid = require('uuid');
const {debug} = require('../utils/debugger');



const Users = () => {
    debug(`Users`);
    const [users, SetUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {setUser} = useContext(UserContext);
    const {setAvatar} = useContext(AvatarContext);

    useEffect(() => {
        setIsLoading(true);
        fetchUsers()
        .then((userArray)=>{
            SetUsers([...userArray]);
            setIsLoading(false);
        })
        .catch((errorObj)=>{
            setError(errorObj);
        })
    },[]);

    if(error !== null){
        return(
            <div>
            <ErrorAPI errorObj={error} setError={setError}/>
            </div>
        ) 
    }

    if(isLoading) {return <h2>Loading users...</h2>}

    return(
        <div>
            <ul>
                {users.map((user) => {
                    return(
                        <div className="userCard" key={uuid.v4()}>
                        <li key={uuid.v4()}>
                            <p>Name: {user.name}</p>
                            <img 
                                src={user.avatar_url}
                                alt="user avatar"
                                className="userImage">
                            </img>
                            <p>User ID: <b>{user.username}</b></p>
                            <button 
                                onClick={()=>{
                                    setUser(user.username);
                                    setAvatar(user.avatar_url);
                                }}
                                className="buttonUser">Log in as this user
                            </button>
                        </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    ) 
}




export default Users;