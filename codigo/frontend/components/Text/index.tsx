import { TextStyled } from "./styles"

export const Text = ({ children, center, color, bold, variant }: {
    children: React.ReactNode,
    center?: boolean,
    color?: string,
    bold?: boolean,
    variant?: string,
}) => {
    return (
        <TextStyled color={color} center={center} bold={bold} variant={variant}>{children}</TextStyled>
    )
}

