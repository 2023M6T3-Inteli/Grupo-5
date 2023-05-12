import { Col, Grid } from "react-styled-flexboxgrid"
import styled from "styled-components";

import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Navbar from "../navbar";

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({
    title,
    header = true,
    navigation,
    children,
    navbar = true,
}: {
    title?: string;
    header?: boolean;
    navigation?: {
        icon: string;
        text: string;
        url: string;
    }[];
    children: React.ReactNode;
    navbar?: boolean;
}) => {
    return (
        <Container fluid className={inter.className} header={header}>
            <Col xs={12} md={4}>
                {header ? <Header
                    navigation={navigation}
                    matchs={5}
                    active={1}
                    title={title}
                /> : null}

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