import { Col, Row } from "react-styled-flexboxgrid";

import { Ball, Container, Input, InputContainer, InputText, LoginButton, LoginInput } from "./styles";
import { Text } from '@/components/Text'
import { Title } from '@/components/Title'
import Image from "next/image";

import dell from '@/assets/icons/dell.svg'
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import axios from "@/axios";
import { useEffect } from "react";

export const Login = ({ slides, currentSlide, setCurrentSlide }: {
    slides: React.ReactNode[];
    currentSlide: number;
    setCurrentSlide: (index: number) => void;
}) => {
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        const { email, password } = data;

        const res = await axios.post('/user/login', {
            email, password
        }).then(res => res)
            .catch(err => err.response)

        if (res.status === 200) {
            localStorage.setItem('accessToken', res.data.accessToken)

            toast("Redirecting...")
            setTimeout(() => {
                router.push('/')
            }, 3000);
        } else {
            toast.error(res.data.message)
        }
    };

    useEffect(() => {
        localStorage.clear();
    }, [])


    return (
        <Container fluid>
            <Col xs={12} md={6}>
                <Row center='xs'>
                    <Col xs={12} sm={10}>
                        <Row center="xs">
                            <Title>Login</Title>
                        </Row>

                        <Row center="xs">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </Row>

                        <Row center='xs'>
                            <Col xs={12} sm={10}>
                                <LoginButton onClick={() => {
                                    toast('Login with Dell SSO')
                                }}>
                                    Sign in with{" "}<Image src={dell} alt="Vercel Logo" width={75} />
                                </LoginButton>
                            </Col>
                        </Row>

                        <Col xs={12}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Col xs={12}>
                                    <Input xs={12}>
                                        <Row start='xs'>
                                            <InputText>Email</InputText>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <LoginInput {...register("email", { required: true })} placeholder='Email' type="email" />
                                                {errors.email?.type === 'required' && <Text color={"#f19336"}>This field is required</Text>}
                                            </Col>
                                        </Row>
                                    </Input>

                                    <Input xs={12}>
                                        <Row start='xs'>
                                            <InputText>Password</InputText>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <LoginInput {...register("password", { required: true, minLength: 6 })} placeholder='Password' type="password" />
                                                {errors.password?.type === 'required' && <Text color={"#f19336"}>This field is required</Text>}
                                                {errors.password?.type === 'minLength' && <Text color={"#f19336"}>This field is minLength 8</Text>}
                                            </Col>
                                        </Row>
                                    </Input>
                                </Col>

                                <Row center='xs'>
                                    <Col xs={12} sm={10}>
                                        <LoginButton type="submit">
                                            Sign in
                                        </LoginButton>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Col>
                </Row>


                <Row center='xs'>
                    {slides.map((_, index) => (
                        <Ball
                            key={index}
                            active={index === currentSlide}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </Row>
            </Col>
        </Container>
    )
}