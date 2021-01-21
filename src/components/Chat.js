import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Chat() {
    const { currentUser, logout } = useAuth()

    return (
        <div>
            <h1>  {currentUser.email}</h1>
        </div>
    )
}