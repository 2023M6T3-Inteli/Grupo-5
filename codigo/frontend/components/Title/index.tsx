import { TitleStyled } from "./styles"

export const Title = ({ children, color, center, variant = "lg" }: {
    children: React.ReactNode;
    center?: boolean;
    color?: string;
    variant?: string;
}) => {
    return (
        <TitleStyled
            color={color}
            center={center}
            variant={variant}
        >{children}</TitleStyled>
    )
}
