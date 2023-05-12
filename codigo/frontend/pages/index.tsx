import Link from 'next/link'

import { Col, Row } from 'react-styled-flexboxgrid'
import { Container } from "./styles"
import { Layout } from '@/components/Layout'
import { Title } from '@/components/Title'
import Image from 'next/image'
import styled from 'styled-components'
import { Text } from '@/components/Text'
import { Icon } from '@mui/material'

import save from "@/assets/icons/heart.svg"
import like from "@/assets/icons/like.svg"
import comment from "@/assets/icons/comment.svg"

export default function Index() {
  const navigation = [
    {
      icon: '/burguer.png',
      text: 'All Posts',
      url: '/'
    },
    {
      icon: '/star.png',
      text: 'Recommended',
      url: '/recommended'
    },
    {
      icon: '/community.png',
      text: 'Community',
      url: '/community'
    }
  ]

  return (
    <Layout navigation={navigation} navbar={false} title={"All posts"}>
      <Col xs={12} md={4}>
        <Row center='xs'>
          {Array(10).fill(1).map((_, index) => (
            <Post key={index} />
          ))}
        </Row>
      </Col>
    </Layout>
  )
}

const Post = () => {
  return (
    <Card xs={12}>
      <Row middle='xs' between='xs'>
        <Col xs={2}>
          <ProfilePicture loader={
            () => 'https://placehold.co/64x64'
          } src={'https://placehold.co/64x64'} alt='Post' width={64} height={64} />
        </Col>

        <Col xs={10}>
          <Title variant='sm' color='#000'>Sergio</Title>

          <Text color='#000'>Software Engineer</Text>
        </Col>
      </Row>

      <Row center='xs' style={{ margin: "1rem 0" }}>
        <Image src={'https://placehold.co/375x300'} loader={
          () => 'https://placehold.co/375x300'
        } alt='Post' width={375} height={300} />
      </Row>

      <Row start={'xs'} middle={'xs'}>
        <Col>
          <Row center="xs">
            <Image src={like} alt="save" width={18} height={18} />
          </Row>
          <Text center={true} color={'#00000080'}>Like</Text>
        </Col>

        <Col>
          <Row center="xs">
            <Image src={comment} alt="save" width={18} height={18} />
          </Row>
          <Text center={true} color={'#00000080'}>Comment</Text>
        </Col>

        <Col>
          <Row center="xs">
            <Image src={save} alt="save" width={18} height={18} />
          </Row>
          <Text center={true} color={'#00000080'}>Save</Text>
        </Col>
      </Row>
    </Card>
  )
}

const ProfilePicture = styled(Image)`
  border-radius: 50%;
`

const Card = styled(Col)`
  border-radius: 10px;
  background-color: #FFF;
  padding: 1.25rem 1rem;
  margin-bottom: 1.5rem;
`
