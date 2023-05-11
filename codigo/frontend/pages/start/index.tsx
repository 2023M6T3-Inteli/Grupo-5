import styled from "styled-components"
import dell from '@/assets/icons/dell.svg'
import Image from "next/image"
import { Inter } from 'next/font/google'

import { Col, Row } from 'react-styled-flexboxgrid'
import { Button, Container, Heading, Logo, Text } from "./styles"
import { Title } from "@/components/Title"

const inter = Inter({ subsets: ['latin'] })

export default function Start() {
  return (
    <Container fluid className={inter.className}>
      <Col xs={12} md={4}>
        <Heading>
          <Logo>
            <Image src={dell} alt="Vercel Logo" width={350} />

            <Title>DellHub</Title>
          </Logo>

          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </Heading>

        <Row>
          <Button href={"/start/intro"}>Let’s start</Button>
        </Row>
      </Col>
    </Container>
  )
}
