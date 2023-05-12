import { Grid } from "react-styled-flexboxgrid"
import styled from "styled-components";

import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Navbar from "../navbar";

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({
    active,
    title,
    header = true,
    children,
    navbar = true,
}: {
    active?: number | any;
    title?: string;
    header?: boolean | any;
    children: React.ReactNode;
    navbar?: boolean;
}) => {
    return (
        <Container fluid className={inter.className}>
            {header ? <Header navigation={header} matchs={5} title={title} active={active} />
                : null}

            {children}

            {navbar ? <Navbar /> : null}
        </Container>
    )
}

const Container = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  /* min-height: 100vh; */
  height: 100%;
  padding: 0 2rem;
`