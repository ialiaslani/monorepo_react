import React, { FC } from "react";

type Props = {
    textColor: string
}

const Button: FC<Props> = ({
    children,
    textColor
}) => {

    return <button style={{'color' : textColor }}>{children}</button>

}

export default Button