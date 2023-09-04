'use client'
import Link from "next/link"
import {signIn} from "next-auth/react"
import { useForm } from "react-hook-form"

const RegisterForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const handleSubmitCredentials = data =>{
            console.log(data);
            
        
    } 

    return (
        <form onSubmit={handleSubmit(handleSubmitCredentials)} className="flex flex-col p-8 space-y-5">
            <div className="flex flex-col gap-2">
                <button onClick={() => signIn('github')} type="button" className="p-3 rounded-lg btn-primary flex justify-around items-center">
                    <i className="bi bi-github"></i>
                    <p>Sign in with GitHub</p>
                </button>
                <button onClick={() => signIn('google')} type="button" className="p-3 rounded-lg btn-primary flex justify-around items-center">
                    <i className="bi bi-google"></i>
                    <p>Sign in with Google</p>
                </button>
            </div>
            <div className="w-full flex items-center gap-3">
                <div className="w-full h-[1px] bg-slate-400"></div>
                <p>or</p>
                <div className="w-full h-[1px] bg-slate-400"></div>
            </div>
            <label htmlFor="inputRegisterName">
                <input {...register('name')} type="text" name="name" id="inputLoginName" placeholder="full name" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <label htmlFor="inputRegisterEmail">
                <input {...register('email')} type="email" name="email" id="inputRegisterEmail" placeholder="example@email.com" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <label htmlFor="inputRegisterPassword">
                <input {...register('password')} type="password" name="password" id="inputRegisterPassword" placeholder="password" className="input input-bordered input-primary w-full max-w-xs"/>
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