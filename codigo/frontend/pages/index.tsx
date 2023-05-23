
import { Col, Row } from 'react-styled-flexboxgrid'
import { Layout } from '@/components/Layout'
import { Title } from '@/components/Title'
import Image from 'next/legacy/image'
import styled from 'styled-components'
import { Text } from '@/components/Text'

import save from "@/assets/icons/heart.svg"
import like from "@/assets/icons/like.svg"
import comment from "@/assets/icons/comment.svg"

import burguer from "@/assets/icons/burguer.png"
import star from "@/assets/icons/star.png"
import community from "@/assets/icons/community.png"

import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link'

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

interface PostProps {
  user: string,
  role: string,
  imgURL: string,
  likes: number[],
  comments: string[],
  saves: number[],
  id: number;
}

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

  const { data, isLoading, isError } = fetchData("http://localhost:5500/post");

  return (
    <Layout header={navigation} navbar={true} title={"All posts"} active={0} matchs={3}>
      <Col xs={12} md={6} lg={4}>
        <Row>
          {isLoading && <Col xs={12}>
            <Text color='#2e2e2e'>
              Loading...
            </Text>
          </Col>}
        </Row>

        {/* <Post user={"marcelofeitoza"} role={"Mobile developer"} imgURL={"https://placehold.co/600x400/EEE/31343C"} likes={[1, 2, 3, 4, 5, 6]} comments={["123", "321", "456"]} saves={[1, 2, 3, 4, 5, 6, 7]} /> */}

        {data && data.map((post: PostProps, index: number) => (
          <Post {...post} key={index} />
        ))}

        {isError && (
          <Col xs={12}>
            <Text color='#2e2e2e'>
              Error!
            </Text>
          </Col>
        )}
      </Col>
    </Layout>
  )
}

const Post = ({
  user, role, imgURL, likes, comments, saves, id
}: PostProps) => {
  return (
    <Card xs={12}>
      <Link href={"/posts/" + id}>
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
            <Image src={imgURL} loader={
              () => imgURL
            } width={300} height={200} layout="responsive" alt='Post' />
          </Col>
        </Row>

        <Row start={'xs'} middle={'xs'}>
          <Col>
            <Row center="xs">
              <Image src={like} alt="save" width={16} height={16} />
            </Row>
            <Text center={true} color={'#00000080'}>Like ({likes.length | 0})</Text>
          </Col>

          <Col>
            <Row center="xs">
              <Image src={comment} alt="save" width={16} height={16} />
            </Row>
            <Text center={true} color={'#00000080'}>Comment ({comments.length | 0})</Text>
          </Col>

          <Col>
            <Row center="xs">
              <Image src={save} alt="save" width={16} height={16} />
            </Row>
            <Text center={true} color={'#00000080'}>Save ({saves.length | 0})</Text>
          </Col>
        </Row>
      </Link>
    </Card>
  )
}

const ProfilePicture = styled(Image)`
  border-radius: 50%;
`

const Card = styled(Col)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background-color: #FFF;
  padding: 1.25rem 1rem;
  margin-bottom: 1.5rem;
`
