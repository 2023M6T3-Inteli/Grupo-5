import Link from 'next/link'

import { Col } from 'react-styled-flexboxgrid'
import { Container } from "./styles"
import { Layout } from '@/components/Layout'

export default function Index() {
  return (
    <Layout>
      <Col xs={12} md={4}>
        <p>Home page</p>
        <Link href={"/start"}> Start </Link>
      </Col>
    </Layout>
  )
}

