import ProfileDropdownMenu from "@/components/inputs/ProfileDropdownMenu";

const ManagementHeader = () => (
    <header className="w-full bg-[#D9D9D9] text-black font-semibold p-4 flex justify-end gap-2">
        <a>Balance: $0.00</a>
        <ProfileDropdownMenu
            onLogout={() => console.log("Logging out")}
            onProfile={() => console.log("Go to profile")}
        />
    </header>
);
export default ManagementHeader;
