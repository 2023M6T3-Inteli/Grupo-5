import Link from 'next/link'

import { Col } from 'react-styled-flexboxgrid'
import { Container } from "./styles"
import { Layout } from '@/components/Layout'

export default function Index() {
  const navigation = [
    {
      icon: '/burguer.png',
      text: 'All Posts',
      url: '/allPosts'
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
    <Layout header={navigation}>
      <Col xs={12} md={4}>
        <p>Home page</p>
        <Link href={"/start"}> Start </Link>
      </Col>
    </Layout>
  )
}

