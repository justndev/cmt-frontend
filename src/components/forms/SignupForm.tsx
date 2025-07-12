'use client';

import { COLORS } from "@/utils/constants/colors";
import { Checkbox, TextField } from "@mui/material";
import FilledButton from "@/components/buttons/FilledButton";
import TextButton from "@/components/buttons/TextButton";
import React, { useState } from "react";
import {registerUser} from "@/api/auth";
import AnimatedAlert from "@/components/alerts/AnimatedAlert";
import {useRouter} from "next/navigation";


const SignupForm = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [signupAlertMessage, setSignupAlertMessage] = useState('');
    const [signupAlertType, setSignupAlertType] = useState('');
    const [showSignupAlert, setShowSignupAlert] = useState(false);

    const [areTermsConfirmed, setAreTermsConfirmed] = useState(false);
    const [termsError, setTermsError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAreTermsConfirmed(e.target.checked);
        if (e.target.checked) setTermsError('');
    };

    const handleSubmit = async () => {
        let valid = true;
        const errors = {
            username: '',
            password: '',
            confirmPassword: ''
        };

        if (!formData.username.trim()) {
            errors.username = 'Username is required.';
            valid = false;
        } else if (formData.username.length > 255) {
            errors.username = 'Username must be less than 255 characters.';
            valid = false;
        }

        if (!formData.password) {
            errors.password = 'Password is required.';
            valid = false;
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Please confirm your password.';
            valid = false;
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match.';
            valid = false;
        } else if (formData.confirmPassword.length < 8) {
            errors.password = 'Password should be at least 8 characters.';
        } else if (formData.password.length > 255) {
                errors.password = 'Password must be less than 255 characters.';
        }

        if (!areTermsConfirmed) {
            setTermsError('You must agree to the Terms and Conditions.');
            valid = false;
        }

        setFormErrors(errors);

        if (valid) {
            try {
                await registerUser({username: formData.username, password: formData.password});

                setFormData({
                    username: '',
                    password: '',
                    confirmPassword: '',
                })

                router.push('/login')
                setSignupAlertType('success');
                setSignupAlertMessage('Registration successfully.');
                setShowSignupAlert(true);
            } catch (e) {
                setSignupAlertType('error');
                setSignupAlertMessage(e.response.data.detail);
                setShowSignupAlert(true);
            }
        }
    };

    return (
        <form className="relative flex flex-col items-center justify-center rounded-2xl text-white p-7 gap-3 shadow-2xl"
              style={{ background: COLORS.darkGrey }}>

            <h1 className="text-4xl font-semibold">New account</h1>

            <a className="font-semibold text-[#E3E3E3]">One account for managing your Campaigns.</a>

            <TextField
                error={!!formErrors.username}
                id="username"
                name="username"
                label="Username"
                value={formData.username}
                onChange={handleInputChange}
                helperText={formErrors.username}
                size="small"
                color={'white'}
                fullWidth
            />

            <TextField
                error={!!formErrors.password}
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                helperText={formErrors.password}
                size="small"
                color={'white'}
                fullWidth
            />

            <TextField
                error={!!formErrors.confirmPassword}
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                helperText={formErrors.confirmPassword}
                size="small"
                color={'white'}
                fullWidth
            />

            <section className="flex flex-row items-center justify-start w-full">
                <Checkbox color="yellow" onChange={handleCheckboxChange} />
                <span className="font-semibold mr-2">I confirm</span>
                <a className="font-semibold text-[#EBFF08] cursor-pointer">Terms and Conditions</a>
            </section>

            {termsError && (
                <span className="text-red-500 text-sm w-full -mt-2">{termsError}</span>
            )}

            <section className="flex w-full justify-between">
                <div>
                    <FilledButton onClick={handleSubmit}>CREATE ACCOUNT</FilledButton>
                </div>
                <TextButton onClick={()=>router.push('/login')} color={COLORS.yellow}>Already registered?</TextButton>
            </section>

            <AnimatedAlert isVisible={showSignupAlert} message={signupAlertMessage} type={signupAlertType} onClose={()=>setShowSignupAlert(false)} />
        </form>
    );
};

export default SignupForm;
