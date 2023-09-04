import LoginForm from "../../../components/login/LoginForm"

const LoginPage = () => {
    return(
        <section className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <h2 className="text-center text-3xl">Login</h2>
                <LoginForm/>
            </div>
            
        </section>
    )
}

export default LoginPage