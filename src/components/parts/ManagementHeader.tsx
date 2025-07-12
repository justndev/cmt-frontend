'use client'

import ProfileDropdownMenu from "@/components/inputs/ProfileDropdownMenu";
import {RootState} from "@/utils/redux/store";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "@/utils/redux/userSlice";
import {useRouter} from "next/navigation";


const ManagementHeader = () => {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch();
    const router = useRouter();

    function handleLogout() {
        dispatch(logout());
        router.push("/");
    }

    return (
        <header className="w-full bg-[#D9D9D9] text-black font-semibold p-4 flex justify-end gap-2">
            <a>Balance: $0.00</a>

            <ProfileDropdownMenu username={user.username || 'username'}
                handleLogout={handleLogout} handleProfile={() => console.log("Go to profile")}
            />
        </header>
    )
};
export default ManagementHeader;
