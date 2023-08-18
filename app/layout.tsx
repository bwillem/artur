import Header from '@/components/header'
import Providers from '@/components/providers'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
