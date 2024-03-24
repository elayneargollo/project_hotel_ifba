import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import { useHistory } from 'react-router-dom';
import { login } from '../../routes/paths';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const images = [
  {
    original: 'https://media-cdn.tripadvisor.com/media/photo-s/10/82/e9/d8/recepcao-hotel-cristal.jpg',
    thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-s/10/82/e9/d8/recepcao-hotel-cristal.jpg',
  },
  {
    original: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/4a/0a/0b/quarto-hotel-curi.jpg',
    thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/4a/0a/0b/quarto-hotel-curi.jpg',
  }, 
  {
    original: 'https://media-cdn.tripadvisor.com/media/photo-s/06/e1/01/c8/rio-quente-cristal-resort.jpg',
    thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-s/06/e1/01/c8/rio-quente-cristal-resort.jpg',
  }, 
  {
    original: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/de/21/eb/rio-quente-cristal-resort.jpg',
    thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/de/21/eb/rio-quente-cristal-resort.jpg',
  }, 
];


export default function Home() {
  const history = useHistory();

  const redirectLogin = () => {
    history.push(login);
  }

  return (
    <React.Fragment>
    <CssBaseline />
      <Container fixed>
          <h1>Hotel IFBA</h1>
          <h4>Sofisticação e exclusividade definem o Hotel IFBA</h4>
          <p>Um dos hotéis mais encantadores do resort, foi inteiramente projetado no conceito de paisagismo sustentável pelo renomado escritório de Benedito Abbud. Cada mínimo detalhe pensado para que você viva experiências inesquecíveis.</p>
          
          <h1>Acomodações</h1>
          <h4>No Hotel IFBA, você encontra 284 apartamentos bem iluminados e com varandas amplas. Eles se dividem entre Suíte Cristal, Suíte Master e Suíte. </h4>
          <p>A Suíte Cristal tem capacidade para acomodar, com muito conforto, até 10 pessoas; a Suíte Master acomoda, confortavelmente, até 5 pessoas; a Suíte, além de hospedar até quatro pessoas, possui quarto adaptado para pessoas com necessidades especiais.</p>
          
          <Button size="small" variant="contained" color="primary" onClick={redirectLogin}>
              <EventIcon />
                 Faça agora sua reserva
          </Button>

          <div className="conteudoHome">
            <ImageGallery items={images} />
          </div>
      </Container>
      </React.Fragment>

  );
}