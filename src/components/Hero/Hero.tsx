import HeroImageMobile from '/src/assets/images/image-intro-mobile.jpg'
import HeroImageDesktop from '/src/assets/images/image-intro-desktop.jpg'


export default function Hero() {

    return (
        <section className="hero grid-bleed">
            <picture className="hero__images">
                <source srcSet={HeroImageDesktop} media={'(min-width: 48rem)'}/>
                <img src={HeroImageMobile} alt="" role="presentation"/>
            </picture>

            <div className="hero__text">
                <h1>Humanizing your insurance.</h1>
                <p className="hero__body">Get your life insurance coverage easier and faster. We blend our expertise and
                    technology to help you
                    find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                <a className="button button--white" href="#">View Plans</a>
            </div>
        </section>
    )
}