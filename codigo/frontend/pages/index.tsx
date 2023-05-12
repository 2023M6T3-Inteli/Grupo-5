import Link from 'next/link'

import { Col, Row } from 'react-styled-flexboxgrid'
import { Container } from "./styles"
import { Layout } from '@/components/Layout'
import { Title } from '@/components/Title'
import Image from 'next/legacy/image'
import styled from 'styled-components'
import { Text } from '@/components/Text'
import { Icon } from '@mui/material'

import save from "@/assets/icons/heart.svg"
import like from "@/assets/icons/like.svg"
import comment from "@/assets/icons/comment.svg"

import useSWR from 'swr';
import axios from 'axios';
import { Key } from 'react'

const fetchData = (url: string) => {
  const fetcher = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

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

  const { data, isLoading, isError } = fetchData("http://localhost:5500/post");

  return (
    <Layout header={navigation} navbar={true} title={"All posts"} active={0}>
      <Col xs={12} md={4}>
        <Row center='xs'>
          {isLoading && <div>Loading...</div>}

          {data && data.map((_: any, index: Key | null | undefined) => (
            <Post user={"Francisco"} role={"Software Engineer"} imageUrl={"https://placehold.co/300x200"} key={index} />
          ))}

          {isError && <div>Error occurred while fetching data</div>}
        </Row>
      </Col>
    </Layout>
  )
}

const Post = ({
  user, role, imageUrl,
}: {
  user: string,
  role: string,
  imageUrl: string
}) => {
  return (
    <Card>
      <Row middle='xs' between='xs'>
        <Col xs={2}>
          <ProfilePicture loader={
            () => 'https://placehold.co/64x64'
          } src={'https://placehold.co/64x64'} alt='Post' width={64} height={64} />
        </Col>

        <Col xs={10}>
          <Title variant='sm' color='#000'>{user}</Title>

          <Text color='#000'>{role}</Text>
        </Col>
      </Row>

      <Row center='xs' style={{ margin: "1rem 0" }}>
        <Col xs={12}>
          <Image src={imageUrl} loader={
            () => imageUrl
          } width={300} height={200} layout="responsive" alt='Post' />
        </Col>
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
