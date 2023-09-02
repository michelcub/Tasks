import HeaderLading from "@/components/landingPage/HeaderLading";

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            <HeaderLading/>
        <div className="auth-layout__content">
            {children}
        </div>
        </div>
    );
}

export default AuthLayout;