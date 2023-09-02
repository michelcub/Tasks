import ButtonHeaderLanding from "./ButtonHeaderLanding";

const HeaderLading = () => {
    return(
        <header className="flex justify-between px-10 py-6 w-full">
            <span>logo</span>
            <nav>
                <ul className="flex space-x-16 items-center">
                    <ButtonHeaderLanding route="/" text="Home"/>
                    <ButtonHeaderLanding route="/blog" text="Blog"/>
                    <ButtonHeaderLanding route="/about" text="About"/>
                    <ButtonHeaderLanding route="/contact" text="Contact"/>
                    <ButtonHeaderLanding route="/auth/login" text="Login"/>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderLading;