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
    <Layout navigation={navigation} navbar={false} title={"Community"}>
      <Col xs={12} md={4}>
        <Row center='xs'>
          <Text color='#2e2e2e'>Based on your profile</Text>
        </Row>

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
        <Title color="#2e2e2e">Python Programming</Title>
      </Row>

      <Row start={'xs'} middle={'xs'}>
        <div style={{
          height: 32,
          width: 32,
          borderRadius: 50,
          backgroundColor: '#3F3D56',
        }}></div>
        <div style={{
          height: 32,
          width: 32,
          borderRadius: 50,
          backgroundColor: '#585678',
          position: 'relative',
          left: -16,
        }}></div>
        <div style={{
          height: 32,
          width: 32,
          borderRadius: 50,
          backgroundColor: '#3D3878',
          position: 'relative',
          left: -32,
        }}></div>
        <div style={{
          height: 32,
          width: 32,
          borderRadius: 50,
          backgroundColor: '#534CA5',
          position: 'relative',
          left: -48,
        }}></div>

        <Text style={{ position: 'relative', left: -32 }} color='#2e2e2e'>+40 participantes</Text>
      </Row>
    </Card>
  )
}

const Card = styled(Col)`
  border-radius: 10px;
  background-color: #FFF;
  padding: 1.25rem 1rem;
  margin-bottom: 1.5rem;
`