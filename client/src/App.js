import './App.css';
import Row from './component/Row/Row';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav bar/Nav';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row title ="NETFLIX ORIGINALS" fetchUrl='fetchNetflix' isLarge={true} />
      <Row title ="Trending Now" fetchUrl= 'fetchTrending' />
      <Row title ="Top Rated Movies" fetchUrl= 'fetchTopRated' />
      <Row title ="Action" fetchUrl= 'fetchAction' />
      <Row title ="Comedy" fetchUrl= 'fetchComedy'/>
      <Row title ="Animation" fetchUrl= 'fetchAnimation' />
      {/* <Row title ="Romance" fetchUrl= {request.fetchRomance}/> */}
      <Row title ="Horror" fetchUrl= 'fetchHorror'/>
      <Row title ="Documentaries" fetchUrl= 'fetchDocumentary' theEnd/>
    </div>
  );
}           

export default App;
