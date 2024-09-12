const features = [
    {
        images: '/src/assets/images/icon-snappy-process.svg',
        title: 'Snappy Process',
        bodyText: 'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.',
    },
    {
        images: '/src/assets/images/icon-affordable-prices.svg',
        title: 'Affordable Prices',
        bodyText: 'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.',
    },
    {
        images: '/src/assets/images/icon-people-first.svg',
        title: 'People First',
        bodyText: 'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.',
    },
]

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