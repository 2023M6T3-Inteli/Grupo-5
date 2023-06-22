import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

import mqtt from 'mqtt'

const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [recommendation, setRecommendation] = useState<any>("")

  useEffect(() => {
    const host = "mqtt-dashboard.com"
    const clientId = "c433958d-1fa6-4b22-94ca-014a967013fa"
    let topic = "recommendation/c433958d-1fa6-4b22-94ca-014a967013fa"

    let client = mqtt.connect(`wss://${host}:8884/mqtt`, { clientId, keepalive: 20 })
    if (client) {
      client.on('connect', function () {
        client.subscribe(topic, function (err: any) {
          // if (!err) {
          //   client.publish('presence', 'Hello mqtt')
          // }
        })
      })

      client.on('message', (topic: string, message: any) => {
        const payload = { topic, message: message.toString() };
        setRecommendation(payload.message);
      });
    }
  }, [])

  useEffect(() => {
    console.log(recommendation)
  }, [recommendation])

  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>

    <Analytics />
  </>
}
