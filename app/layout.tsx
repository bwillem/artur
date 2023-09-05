import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/components/providers'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
