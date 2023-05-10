import { Grid } from "react-styled-flexboxgrid"
import styled from "styled-components";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({
    header = true,
    children,
    navbar = true,
}: {
    header?: boolean;
    children: React.ReactNode;
    navbar?: boolean;
}) => {
    return (
        <Container fluid className={inter.className}>
            {header ? <header>
                <p>Header</p>
            </header> : null}

            {children}

            {navbar ? <footer>
                <p>Footer</p>
            </footer> : null}
        </Container>
    )
}

const Container = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  padding: 0 2rem;
`