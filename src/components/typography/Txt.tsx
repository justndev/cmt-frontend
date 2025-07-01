import {ReactNode} from "react";


const Txt = ({children, color = '#000000', isMobile = false, sx='font-medium'}:{children:ReactNode, color?: string, isMobile?: boolean, sx?: string}) => {

    return (
        <a
            className={sx}
            style={{
            color: color,
            fontFamily: 'Roboto',
            fontSize: isMobile ? '14px' : '16px',
        }}>
            {children}
        </a>
    )
}

export default Txt

