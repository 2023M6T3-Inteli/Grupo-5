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
        <Row center='xs' middle='xs'>
          {isLoading && <Col xs={12}>
            <Text color='#2e2e2e'>
              Loading...
            </Text>
          </Col>}

          {/* {
            "user": "Paulo",
            "role": "UX/Writter",
            "likes": ["1", "2", "3"],
            "comments": ["Show!", "Curti!", "Obrigado pela postagem"],
            "content": "Postagem 3",
            "imgURL": "/teste.png",
            "tags": ["tag 1", "tag 2", "tag 3"]
          } */}

          {data && data.map((post: {
            user: string,
            role: string,
            imgUrl: string,
            likes: number[],
            comments: string[],
            saves: number[]
          }, index: number) => (
            <Post {...post} key={index} />
          ))}

          {isError && <Col xs={12}>
            <Text color='#2e2e2e'>
              Error!
            </Text>
          </Col>}
        </Row>
      </Col>
    </Layout>
  )
}

const Post = ({
  user, role, imgUrl, likes, comments, saves
}: {
  user: string,
  role: string,
  imgUrl: string,
  likes: number[],
  comments: string[],
  saves: number[]
}) => {
  return (
    <Card xs={12}>
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
          <Image src={imgUrl} loader={
            () => imgUrl
          } width={300} height={200} layout="responsive" alt='Post' />
        </Col>
      </Row>

      <Row start={'xs'} middle={'xs'}>
        <Col>
          <Row center="xs">
            <Image src={like} alt="save" width={18} height={18} />
          </Row>
          <Text center={true} color={'#00000080'}>Like ({likes.length | 0})</Text>
        </Col>

        <Col>
          <Row center="xs">
            <Image src={comment} alt="save" width={18} height={18} />
          </Row>
          <Text center={true} color={'#00000080'}>Comment ({comments.length | 0})</Text>
        </Col>

        <Col>
          <Row center="xs">
            <Image src={save} alt="save" width={18} height={18} />
          </Row>
          <Text center={true} color={'#00000080'}>Save ({saves.length | 0})</Text>
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
