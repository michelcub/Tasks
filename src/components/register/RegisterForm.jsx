'use client'
import Link from "next/link"

const RegisterForm = () => {

    return (
        <form action="" className="flex flex-col p-8 space-y-8">
            <label htmlFor="inputRegisterName">
                <input type="text" name="email" id="inputLoginName" placeholder="full name" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <label htmlFor="inputRegisterEmail">
                <input type="email" name="email" id="inputRegisterEmail" placeholder="example@email.com" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <label htmlFor="inputRegisterPassword">
                <input type="password" name="password" id="inputRegisterPassword" placeholder="password" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <div className="w-full">
                <button className="btn btn-primary w-full" type="submit">Register</button>
            </div>
            <div>
                <p className="text-center">Do you have account? <Link href="/auth/login" className="text-primary">Sign in</Link></p>
            </div>
        </form>
    );
}

export default RegisterForm;