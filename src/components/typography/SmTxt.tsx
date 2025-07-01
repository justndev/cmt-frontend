import {ReactNode} from "react";


const SmTxt = ({children, isMobile = false, color = '#000000', sx = ''}:{children:ReactNode, isMobile?: boolean, color?: string, sx?: string}) => {
    return (
        <a style={{
            color: color,
            fontWeight: 'medium',
            fontFamily: 'Roboto',
            fontSize: isMobile ? '12px' : '16px',
        }} className={sx}>
            {children}
        </a>
    )
}

export default SmTxt

