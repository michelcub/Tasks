'use client'
import toast from "react-hot-toast"
import Link from "next/link"
import {signIn} from "next-auth/react"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import useAppContext from "@/Contexts/AppContext"

const LoginForm = () => {



    const router = useRouter()
    const { data: session, status } = useSession()
    const {store, actions} = useAppContext()


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        if (status === 'loading') {
            toast.loading('Loading...')
            actions?.setLoading(true)
        }
    
        if (status === 'authenticated') {
            actions?.setIsAuth(true)
            toast.success('Welcome')
            router.push('/aplication/dashboard')
        }
        if (status === 'unauthenticated') {
            actions?.setIsAuth(false)
        }

        if(session?.user){
            actions?.setDataUser(session?.user)
        }
    }, [session, status])

const handleSubmitCredentials = data =>{
        console.log(data);
        signIn('credentials', {email: data.email, password: data.password, redirect:true, callbackUrl: 'http://localhost:3000/aplication'} )
    
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
            <label htmlFor="inputLoginEmail">
                <input {...register('email')} type="email" name="email" id="inputLoginEmail" placeholder="example@email.com" className="input input-bordered input-primary w-full max-w-xs"/>
            </label>
            <label htmlFor="inputLoginPassword">
                <input {...register('password')} type="password" name="password" id="inputLoginPassword" placeholder="password" className="input input-bordered input-primary w-full max-w-xs"/>
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