import { TitleStyled } from "./styles"

export const Title = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}
