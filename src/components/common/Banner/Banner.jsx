import { useContext } from 'react'
import { VideosContext } from '../../../Context/Context'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import ReactPlayer from 'react-player/youtube'
import { colorBlack, colorBlackMedium, colorRed, colorWec, colorWhite } from '../../UI/variablesStyle'
import Boton from '../Button/Boton'

const Section = styled('section')(({ theme }) => ({
  marginTop: '4.4rem',
  width: '100%',
  height: '80vh',
  position: 'relative',
  '& video': {
    objectFit: 'cover'
  }
}))

const Div = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(105, 106, 100, 0.622)'
}))

const Titulo = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(1)
}))

const BoxContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: `${colorBlack}`
}))

function Banner() {
  const { ref } = useContext(VideosContext)
  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Section>
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=6NXnxTNIWkc'}
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
      <Div>
        <BoxContainer>
          
            <img
              src='/logo.png'
              alt='Logo' 
              width ='35%'
              height= 'auto'
            />
            <Titulo
            variant='h2'
            component='h5'>
          </Titulo>
          <Boton onClick={handleScroll}>Ver + Videos</Boton>
        </BoxContainer>
      </Div>
    </Section>
  )
}

export default Banner
