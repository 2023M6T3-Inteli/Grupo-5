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
    header = true,
    navigation,
    children,
    navbar = true,
}: {
    active?: number | any;
    title?: string;
    matchs?: number;
    header?: boolean | any;
    navigation?: {
        icon: string;
        text: string;
        url: string;
    }[];
    children: React.ReactNode;
    navbar?: boolean;
}) => {
    return (
        <Container fluid className={inter.className}>
            <Col xs={12} md={4}>
            {header ? <Header navigation={header} matchs={matchs} title={title} active={active} />
                : null}
                {children}

                {navbar ? <Navbar /> : null}
            </Col>
        </Container>
    )
}

const Container = styled(Grid) <{ header: boolean; }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  /* min-height: 100vh; */
  height: 100%;
  padding: 0 2rem;
  margin-bottom: ${({ header }) => header ? '0' : '2rem'};
`