import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Features from "./components/Features/Features.tsx";
import Cta from "./components/Cta/Cta.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    return (
        <>
            <Header/>
            
            <main className='grid-bleed landing-page'>
                <Hero />
                <Features />
                <Cta />
            </main>
            
            <Footer/>
        </>
    )
}

export default App
