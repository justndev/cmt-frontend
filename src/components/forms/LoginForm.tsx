'use client'

import {COLORS} from "@/utils/constants/colors";
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import FilledButton from "@/components/buttons/FilledButton";
import TextButton from "@/components/buttons/TextButton";
import React, {useState} from "react";
import {loginUser} from "@/api/auth";
import {useRouter} from "next/navigation";
import AnimatedAlert from "@/components/alerts/AnimatedAlert";
import {useDispatch} from "react-redux";
import {login} from "@/utils/redux/userSlice";


const LoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
    });

    const [loginAlertMessage, setLoginAlertMessage] = useState('');
    const [loginAlertType, setLoginAlertType] = useState('');
    const [showLoginAlert, setShowLoginAlert] = useState(false);

    const [rememberSession, setRememberSession] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberSession(e.target.checked);
    };

    const handleSubmit = async () => {
        let valid = true;
        const errors = {
            username: '',
            password: '',
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
        } else if (formData.password.length < 8) {
            errors.password = 'Password should be at least 8 characters.';
        } else if (formData.password.length > 255) {
            errors.password = 'Password must be less than 255 characters.';
        }

        setFormErrors(errors);

        if (valid) {
            try {
                const response = await loginUser({username: formData.username, password: formData.password});
                setLoginAlertType('success');
                setLoginAlertMessage('Registration successfully.');
                setShowLoginAlert(true);

                dispatch(login({username: formData.username, jwt: response.access_token}))

                localStorage.setItem('rememberMe', String(rememberSession));

                router.push('/management/my-campaigns');
            } catch (e) {
                setLoginAlertType('error');
                setLoginAlertMessage(e.response.data.detail);
                setShowLoginAlert(true);
            }
        }
    };
    return (
        <form className="flex flex-col items-center justify-center rounded-2xl text-white p-7 gap-3 shadow-2xl"
              style={{background: COLORS.darkGrey}}>

            <h1 className={'text-4xl font-semibold'}>Log in</h1>

            <a className={'font-semibold text-[#E3E3E3]'}>Have perfect time and lot of deal with us :)</a>

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

            <section className={'flex flex-row items-center justify-start w-full'}>
                <FormControlLabel control={
                    <Checkbox color={'yellow'} onChange={handleCheckboxChange}/>
                } label="Remember me"/>
            </section>

            <section className={'flex w-full justify-between'}>
                <div>
                    <FilledButton onClick={handleSubmit}>LOG IN</FilledButton>
                </div>
                <TextButton onClick={()=>router.push('/signup')} color={COLORS.yellow}>{"Don't have an account?"}</TextButton>
            </section>

            <AnimatedAlert isVisible={showLoginAlert} message={loginAlertMessage} type={loginAlertType} onClose={()=>setShowLoginAlert(false)} />
        </form>
    )
}

export default LoginForm;
