import { Col, Row } from "react-styled-flexboxgrid";

import { Ball, Container, Input, InputContainer, InputText, LoginButton, LoginInput } from "./styles";
import { Text } from '@/components/Text'
import { Title } from '@/components/Title'
import Image from "next/image";

import dell from '@/assets/icons/dell.svg'
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import axios from "axios";

export const Login = ({ slides, currentSlide, setCurrentSlide }: {
    slides: React.ReactNode[];
    currentSlide: number;
    setCurrentSlide: (index: number) => void;
}) => {
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data)

        await axios.get('https://api.github.com/users/marcelofeitoza').then(res => {
            toast.success("Success")
            console.log(res.data)
            router.push("/")
        }).catch(err => {
            toast.error("Error")
            console.log(err)
        }).finally(() => {
            toast("Completed")
            console.log("Completed")
        })
    };

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
                                            <LoginInput {...register("email", { required: true })} placeholder='Email' type="email" />
                                        </Row>
                                    </Input>

                                    <Input xs={12}>
                                        <Row start='xs'>
                                            <InputText>Password</InputText>
                                        </Row>
                                        <Row>
                                            <LoginInput {...register("password", { required: true, minLength: 8 })} placeholder='Password' type="password" />
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