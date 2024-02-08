'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
            })

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json()

            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="mt-10">
            <h1 className="text-center text-primarySecond text-4xl mb-4">
                Register
            </h1>
            <form
                action="#"
                className="block max-w-xs mx-auto"
                onSubmit={handleSubmit}
            >
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="submit">Submit</button>
                <div className="my-4 text-center text-gray-500">
                    Or register with
                </div>
                <Button variant="outline" className="rounded-xl w-full py-5 border-gray-300" >
                    <FcGoogle className="text-2xl mr-3" />
                    Continue with Google
                </Button>
            </form>
        </section>
    )
}

export default RegisterPage;