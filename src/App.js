import { Routes} from 'react-router-dom';
import gsap from 'gsap';
import Nav from './components/Nav';
import { routes } from './config/routes';

window.addEventListener('load', () => {
  gsap
    .timeline()
    .to('.loading-screen .ring', { autoAlpha: 0 })
    .to('.loading-screen', { clipPath: 'circle(0% at 0% 100%)', duration: 1, delay: -0.5 })
    .set('.loading-screen', { display: 'none' });
});

function App() {
  const myRoutes = routes.map(route=>{
    return (
      <>
      {route}
      </>
    )
  })
  
  return (
    <>
      <Nav />
      <Routes>
        {myRoutes}
      </Routes>
    </>
  );
}

export default App;
