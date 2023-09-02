'use client'
import Link from "next/link"

const ResetPasswordForm = () => {
    return (
        <form action="" className="flex flex-col p-8 space-y-8">
            <label htmlFor="inputResetPasswordEmail">
                <input type="email" name="email" id="inputResetPasswordEmail" placeholder="example@email.com" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <div className="w-full">
                <button className="btn btn-primary w-full" type="submit">Reset</button>
            </div>
            <div>
                <p className="text-center">Don't have an account? <Link href="/auth/register" className="text-primary">Sign up</Link></p>
            </div>
            
        </form>
    );
}

export default ResetPasswordForm;