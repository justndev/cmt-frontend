'use client'

import {COLORS} from "@/constants/colors";
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import FilledButton from "@/components/buttons/FilledButton";
import TextButton from "@/components/buttons/TextButton";

const SignupForm = () => {
    return (
        <form className="flex flex-col items-center justify-center rounded-2xl text-white p-7 gap-3 shadow-2xl"
              style={{background: COLORS.darkGrey}}>
            <h1 className={'text-4xl font-semibold'}>New account</h1>
            <a className={'font-semibold text-[#E3E3E3]'}>One account for managing your Campaigns.</a>
            <TextField id="outlined-basic" label="Username" variant="outlined" color='white' size={'small'} fullWidth={true}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" color='white' size={'small'} fullWidth={true}/>

            <TextField id="outlined-password-input" label="Password" variant="outlined" color='white' size={'small'} fullWidth={true}/>
            <TextField id="outlined-password-input" label="Confirm password" variant="outlined" color='white' size={'small'} fullWidth={true}/>

            <section className={'flex flex-row items-center justify-start w-full'}>
                <Checkbox defaultChecked color={'yellow'}/>
                <a className={'font-semibold mr-2'}>I confirm</a><a className={'font-semibold text-[#EBFF08]'}>Terms and Conditions</a>
            </section>

            <section className={'flex w-full justify-between'}>
                <div>
                    <FilledButton>CREATE ACCOUNT</FilledButton>

                </div>
                <TextButton color={COLORS.yellow}>{"Already registered?"}</TextButton>
            </section>



        </form>
    )
}

export default SignupForm;
