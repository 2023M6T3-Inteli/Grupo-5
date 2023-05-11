import React, { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const ref = useRef(null)

  const [optionsCreateOpened, setOptionsCreateOpened] = useState(false)
  const navItems = [
    {
      icon: '/home.png',
      text: 'Contents',
      url: '/',
      alt: 'Home icon',
      width: 18,
      height: 18
    },
    {
      icon: '/rewards.png',
      text: 'Rewards',
      url: '/rewards',
      alt: 'Rewards icon',
      width: 20,
      height: 20
    },
    {
      icon: '/create.png',
      text: 'Create',
      onClick: () => setOptionsCreateOpened(true),
      alt: 'Create icon',
      width: 20,
      height: 20
    },
    {
      icon: '/projects.png',
      text: 'Projects',
      url: '/projects',
      alt: 'Projects icon',
      width: 18,
      height: 18
    },
    {
      icon: '/profile.png',
      text: 'Profile',
      url: '/profile',
      alt: 'Profile icon',
      width: 16,
      height: 18
    },
  ]

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOptionsCreateOpened(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className={styles.navbar}>
      <Grid className={styles.grid}>
        <Row className={styles.row} around='xs' center='xs' middle='xs'>
          {
            navItems.map((item: any, index: number) => {
              return item.onClick ? (
                <Col key={`${item.text}-${index}`} >
                  <div className={styles.item} onClick={() => item.onClick()}>
                    <Image src={item.icon} alt={item.alt} width={item.width} height={item.height} />
                    <p className={styles.text}>{item.text}</p>
                    {
                      optionsCreateOpened && (
                        <div ref={wrapperRef} className={styles.select} onClick={() => item.onClick()}>
                          <div className={styles.optionContainer} onClick={() => alert("Abre criação de projeto")}>
                            <Image src={'/project.png'} alt='Imagem de projeto' width={0} height={0} />
                            <p>Creat project</p>
                          </div>
                          <div className={styles.optionContainer} onClick={() => alert("Abre criação de post")}>
                            <Image src={'/edit.png'} alt='Imagem de post' width={0} height={0} />
                            <p>Creat a post</p>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </Col>
              ) : (
                <Col key={`${item.text}-${index}`}>
                  <Link href={item.url ? item.url : ''}>
                    <div className={styles.item} key={index}>
                      <Image src={item.icon} alt={item.alt} width={item.width} height={item.height} />
                      <p className={styles.text}>{item.text}</p>
                    </div>
                  </Link>
                </Col>
              )
            })
          }
        </Row>
      </Grid>
    </div>
  )
}

export default Navbar