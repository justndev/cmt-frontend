import {ReactNode} from "react";

const SubHdr = ({children, isMobile = false, color = '#000000', sx='font-medium'}:{children:ReactNode, isMobile?: boolean, color?: string, sx?: string}) => {

    return (
        <a
            className={sx}
            style={{
            color: color,
            fontFamily: 'Roboto',
            fontSize: isMobile ? '16px' : '24px',
        }}>
            {children}
        </a>
    )
}

export default SubHdr

