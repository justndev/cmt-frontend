'use client'

import SignupForm from "@/components/forms/SignupForm";
import withPublicRoute from "@/utils/WithPublicRoute";


export default withPublicRoute(SignupPage)
function SignupPage() {
    return <div className="flex flex-col items-center justify-center w-full">
        <SignupForm />
    </div>;
}
