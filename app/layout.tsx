import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/components/providers'
import ThemedBackground from '@/components/themedBackground'
import ContentContainer from '@/components/contentContainer'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemedBackground
            display='flex'
            flexDir='column'
            minHeight='100vh'
          >
            <Header />
            <ContentContainer as='main'>
              {children}
            </ContentContainer>
            <Footer />
          </ThemedBackground>
        </Providers>
      </body>
    </html>
  )
}
