"use client"
import { useForm } from "react-hook-form"
import { Form } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"

interface props  {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    }
    btnTitle: string
}

const AccountProfile = ( {user,btnTitle}:props) => {
    const form = useForm({
        resolver: zodResolver()
    }
    )
    return (
        <Form
            
        
        >

        </Form>
    )
}

export default AccountProfile