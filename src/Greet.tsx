import { useState } from "react"

interface GreetProps {
    firstName: string
    age: number
}

const users = [
    {
        firstName: "suliton",
        lastName: "Adebayo"
    },
    {
        firstName: "Kennedy",
        lastName: "Adebayo"
    },
    {
        firstName: "Colins",
        lastName: "Adebayo"
    },
    {
        firstName: "Agbo",
        lastName: "Adebayo"
    },
]
interface userList {
    firstName: string,
    lastName: string
}
const Greet = ({ firstName, age }: GreetProps) => {
    const [allUser, setAllUser] = useState<userList[]>([])
        setAllUser(users)  
        console.log(allUser);
        
    return (
        <div>
            <p>My name is {firstName} and i am {age} years old</p>
            <ul>
                <li>{users.map((item: userList) => (
                    <p>{item.firstName}</p>
                ))}</li>
            </ul>
        </div>
    )
}

export default Greet