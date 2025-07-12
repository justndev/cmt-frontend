'use client'

import LoginForm from "@/components/forms/LoginForm";
import withPublicRoute from "@/utils/WithPublicRoute";


export default withPublicRoute(LoginPage)
function LoginPage() {
    return <div className="flex flex-col items-center justify-center w-full">
    <LoginForm/>
    </div>;
}
