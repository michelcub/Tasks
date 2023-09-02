import RegisterForm from "@/components/register/RegisterForm"

const RegisterPage = () => {
    return (
        <section className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <h2 className="text-center text-3xl">Register</h2>
                <RegisterForm/>
            </div>
            
        </section>
    )
}

export default RegisterPage