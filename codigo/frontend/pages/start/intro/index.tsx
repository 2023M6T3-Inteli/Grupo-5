import { Inter } from 'next/font/google'
import { useState } from "react"

import { Ball, Button, Container, Heading, Logo, SlideContainer, Text } from "./styles"
import { Carousel } from '@/components/Carousel'
import { Login } from '@/components/Login'

import styled from "styled-components"
import first from '@/assets/images/1.svg'
import second from '@/assets/images/2.svg'
import third from '@/assets/images/3.svg'


const inter = Inter({ subsets: ['latin'] })

export default function Intro() {
    const [currentSlide, setCurrentSlide] = useState(3);

    const slides = [
        <SlideContainer key={1} xs={12} md={4}>
            <Text>Connect and collaborate with colleagues all over the world.</Text>
        </SlideContainer>,
        <SlideContainer key={2} xs={12} md={4}>
            <Text>Connect with teams, share knowledge and bring your ideas to life!</Text>
        </SlideContainer>,
        <SlideContainer key={3} xs={12} md={4}>
            <Text>Connect and collaborate with colleagues all over the world.</Text>
        </SlideContainer>,
        ""
    ];

    const backgrounds = [
        first.src,
        second.src,
        third.src,
        ""
    ]

    return (
        <Container fluid className={inter.className} background={backgrounds[currentSlide]}>
            {currentSlide === 3 ? <Login slides={slides} currentSlide={
                currentSlide} setCurrentSlide={setCurrentSlide}
            /> :
                <Carousel slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />}
        </Container>
    )
}

