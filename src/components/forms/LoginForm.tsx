'use client'

import {COLORS} from "@/constants/colors";
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import FilledButton from "@/components/buttons/FilledButton";
import TextButton from "@/components/buttons/TextButton";

const LoginForm = () => {
    return (
        <form className="flex flex-col items-center justify-center rounded-2xl text-white p-7 gap-3 shadow-2xl"
              style={{background: COLORS.darkGrey}}>
            <h1 className={'text-4xl font-semibold'}>Log in</h1>
            <a className={'font-semibold text-[#E3E3E3]'}>Have perfect time and lot of deal with us :)</a>
            <TextField id="outlined-basic" label="Email" variant="outlined" color='white' size={'small'} fullWidth={true}/>
            <TextField id="outlined-password-input" label="Password" variant="outlined" color='white' size={'small'} fullWidth={true}/>
            <section className={'flex flex-row items-center justify-start w-full'}>
                <FormControlLabel control={<Checkbox defaultChecked color={'yellow'}/>} label="Remember me"/>
            </section>

            <section className={'flex w-full justify-between'}>
                <div>
                    <FilledButton>LOG IN</FilledButton>

                </div>
                <TextButton color={COLORS.yellow}>{"Don't have an account?"}</TextButton>
            </section>



        </form>
    )
}

export default LoginForm;
