import featuresList from '/src/data/features.json';

interface Feature {
    title: string;
    images: string;
    bodyText: string;
}

const features: Feature[] = featuresList;

export default function Features() {

    return (
        <section className="features">
            <h2>We're different</h2>

            <div className="features__feature-flex">
                {features.map((feature) => (
                    <article className='features__feature' key={feature.title}>
                        <img src={feature.images} alt="" role="presentation"/>
                        
                        <div className='features__feature-text'>
                            <h3>{feature.title}</h3>
                            <p className='features__feature-body-text'>{feature.bodyText}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}