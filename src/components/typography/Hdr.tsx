import {ReactNode} from "react";

const Hdr = ({children, isMobile = false, color = '#000000', sx = 'font-medium'}:{children:ReactNode, isMobile?: boolean, color?: string, sx?: string}) => {

    return (
        <a className={sx}
            style={{
            color: color,
            fontFamily: 'Roboto',
            fontSize: isMobile ? '24px' : '32px',
        }}>
            {children}
        </a>
    )
}

export default Hdr

