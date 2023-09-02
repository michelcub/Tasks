import ResetPasswordForm from "@/components/reset-password/ResetPassword";

const ResetPasswordPage = () => {
    return (
        <section className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <h2 className="text-center text-3xl">Reset Password</h2>
                <ResetPasswordForm/>
            </div>
            
        </section>
    );
}

export default ResetPasswordPage;