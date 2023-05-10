import { TextStyled } from "./styles"

export const Text = ({ children, color, bold, variant }: {
    children: React.ReactNode,
    color?: string,
    bold?: boolean,
    variant?: string,
}) => {
    return (
        <TextStyled>{children}</TextStyled>
    )
}

