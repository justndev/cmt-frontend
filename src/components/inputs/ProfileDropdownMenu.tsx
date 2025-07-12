'use client'

import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import CustomIcon from "../CustomIcon";
import {ICONS} from "@/utils/constants/icons";
import {useEffect, useRef} from "react";


export default function ProfileDropdownMenu({username, handleLogout, handleProfile}:{ username: string, handleLogout: () => void, handleProfile: () => void }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent, action?: string) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        switch (action) {
            case 'profile':
                handleProfile();
                break;
            case 'logout':
                handleLogout();
                break;

        }
        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div style={{position: 'relative', paddingRight: '1rem'}}>
            <button className='flex justify-center cursor-pointer' onClick={handleToggle} ref={anchorRef}>
                {username}
                <CustomIcon size={30} icon={ICONS.arrowDown}/>
            </button>

            <div style={{position: "absolute", zIndex: 1000, width: 140, overflow: 'visible', right: 5}}>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'right top',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                        sx={{zIndex: 300, backgroundColor: 'white'}}
                                    >
                                        <MenuItem onClick={(event) => handleClose(event, 'profile')}>
                                            <CustomIcon icon={ICONS.profile} size={25} sx={'pr-2'}/>
                                            My Profile
                                        </MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, 'logout')}>
                                            <CustomIcon icon={ICONS.logout} size={30} sx={'pr-2'}/>
                                            Logout
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}
