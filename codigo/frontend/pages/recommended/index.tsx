
import { Col, Row } from 'react-styled-flexboxgrid'
import { Layout } from '@/components/Layout'
import { Title } from '@/components/Title'
import Image from 'next/image'
import styled from 'styled-components'
import { Text } from '@/components/Text'

import save from "@/assets/icons/heart.svg"
import like from "@/assets/icons/like.svg"
import comment from "@/assets/icons/comment.svg"

import burguer from "@/assets/icons/burguer.png"
import star from "@/assets/icons/star.png"
import community from "@/assets/icons/community.png"

export default function Index() {
  const navigation = [
    {
      icon: burguer,
      text: 'All Posts',
      url: '/'
    },
    {
      icon: star,
      text: 'Recommended',
      url: '/recommended'
    },
    {
      icon: community,
      text: 'Community',
      url: '/community'
    }
  ]

  return (
    <Layout header={navigation} navbar={true} title={"Recommended topics"} active={1}>
      <Col xs={12} md={6} lg={4}>
        <Row style={{ marginBottom: '8px' }} center='xs'>
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
      <Row middle='xs'>
        <Col>
          <ProfilePicture loader={
            () => 'https://placehold.co/64x64'
          } src={'https://placehold.co/64x64'} alt='Post' width={48} height={48} />
        </Col>

        <Col>
          <Title variant='sm' color='#000'>Cristina</Title>

          <Text color='#000'>UX Designer</Text>
        </Col>
      </Row>

      <Row center='xs' style={{ margin: "1rem 0" }}>
        <Text color='#000'>
          In today's digital age, UX design is more important than ever. It's not just about making things look pretty, it's about creating a meaningful...
        </Text>
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