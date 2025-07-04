import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import CustomIcon from "../CustomIcon";
import {ICONS} from "@/constants/icons";

export default function ProfileDropdownMenu() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

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
            case 'clean':
                // dispatch(setShowCleanWindow(true));
                break;
            case 'delete':
                // dispatch(setShowDeleteWindow(true));
                break;
            case 'timer':
                // dispatch(setShowSetTimerWindow(true));
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

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div style={{position: 'relative', paddingRight: '1rem'}}>
            <button onClick={handleToggle} ref={anchorRef}>
                romka40
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
                                        <MenuItem onClick={(event) => handleClose(event, 'clean')}>
                                            <CustomIcon icon={ICONS.wallet} size={30} sx={'pr-2'}/>
                                            Clean
                                        </MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, 'delete')}>
                                            <CustomIcon icon={ICONS.wallet} size={30} sx={'pr-2'}/>
                                            Delete
                                        </MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, 'timer')}>
                                            <CustomIcon icon={ICONS.wallet} size={30} sx={'pr-2'}/>
                                            Set Timer
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
