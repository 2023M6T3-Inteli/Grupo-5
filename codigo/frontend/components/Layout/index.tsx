import { Col, Grid } from "react-styled-flexboxgrid"
import styled from "styled-components";

import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Navbar from "../navbar";

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({
    active,
    title,
    matchs,
    header = [],
    children,
    navbar = true,
}: {
    active?: number | any;
    title?: string;
    matchs?: number;
    header?: boolean | any;
    children: React.ReactNode;
    navbar?: boolean;
}) => {
    return (
        <Container navbar={navbar} className={inter.className}>
                {header ? <Header navigation={header} matchs={matchs} title={title} active={active} />
                    : null}
                {children}

                {navbar ? <Navbar /> : null}
        </Container>
    )
}

const Container = styled(Grid) <{ navbar: boolean; }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  /* justify-content: center; */
  min-height: 100vh;
  height: 100%;
  padding: 0 2rem;
  margin-bottom: ${({ navbar }) => navbar ? '80px' : '0'};
`