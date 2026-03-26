import React from 'react';

const ReviewsSection = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    const reviews = [
        {
            text: t.reviews.review1.text,
            author: t.reviews.review1.author
        },
        {
            text: t.reviews.review2.text,
            author: t.reviews.review2.author
        },
        {
            text: t.reviews.review3.text,
            author: t.reviews.review3.author
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="text-center">
                    <h2>{t.reviews.title}</h2>
                    <div className="spacer-single"></div>
                </div>
                <div className="wahed-row" dir={isRTL ? 'ltr' : 'rtl'}>
                    {reviews.map((review, index) => (
                        <div className={`box ${!isRTL && 'text-start'}`} key={index}>
                            <img src="/images/reviews/google.webp" alt="Google Review" />
                            <p>{review.text}</p>
                            <span>{review.author}</span>
                            <img src="/images/reviews/google-stars.webp" alt="5 Stars" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
