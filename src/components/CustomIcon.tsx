'use client'

const CustomIcon = ({
                        icon,
                        onClick = () => {
                        },
                        size = 30,
                        sx = ''
                    }: {
    icon: string;
    onClick?: any;
    size?: number;
    sx?: string;
}) => <img
    className={sx}
    src={icon}
    width={size}
    height={size}
    onClick={onClick}
/>

export default CustomIcon
