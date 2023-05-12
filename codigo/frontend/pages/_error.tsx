import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import { Inter } from "next/font/google";
import { useRouter } from "next/router"
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

import dell from '@/assets/icons/dell.svg'
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

const Error = () => {
    const router = useRouter();

    return (
        <Container className={inter.className} navbar={false}>
            <Col xs={12}>
                <Row center="xs">
                    <Image src={dell} alt="Dell" width={150} height={100} />
                </Row>

                <Row center="xs">
                    <Title center={true} color="#2d2d2d" variant="xl">404</Title>
                </Row>
                <Row center="xs">
                    <Text color="#424242">This page {router.asPath} does not exist!</Text>
                </Row>

                <Spacer />

                <Row center="xs">
                    <Link href="/">
                        <Text>Go back to home</Text>
                    </Link>
                </Row>
            </Col>
        </Container>
    )
}

const Spacer = styled.div<{ size?: number; }>`
    height: 48px;
`

const Container = styled(Grid)`
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;    
    justify-content: center;
`

export default Error;