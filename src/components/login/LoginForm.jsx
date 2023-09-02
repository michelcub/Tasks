'use client'
import Link from "next/link"

const LoginForm = () => {

    return (
        <form action="" className="flex flex-col p-8 space-y-8">
            <label htmlFor="inputLoginEmail">
                <input type="email" name="email" id="inputLoginEmail" placeholder="example@email.com" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <label htmlFor="inputLoginPassword">
                <input type="password" name="password" id="inputLoginPassword" placeholder="password" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <div className="w-full">
                <button className="btn btn-primary w-full" type="submit">Login</button>
            </div>
            <div>
                <p className="text-center">Don't have an account? <Link href="/auth/register" className="text-primary">Sign up</Link></p>
            </div>
            <div>
                <p className="text-center">Forgot password? <Link href="/auth/reset-password" className="text-primary">Reset password</Link></p>
            </div>
        </form>
    );
}

export default LoginForm;