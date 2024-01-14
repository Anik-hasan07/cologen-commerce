import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-8'>
      <Container>
        <div>
          <HomeBanner/>
        </div>
      </Container>
    
    </div>
  )
}
