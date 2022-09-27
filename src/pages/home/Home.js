import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Desc from '../../components/desc/Desc';
import Servicios from '../../components/servicios/Servicios';
import Ubicanos from '../../components/ubicanos/Ubicanos';
import Reviews from '../../components/reviews/Reviews';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
        <Header />
        <Banner /> 
        <Desc /> 
        <Servicios /> 
        <Ubicanos /> 
        <Reviews /> 
        <Footer /> 
    </div>
  );
}

export default Home;