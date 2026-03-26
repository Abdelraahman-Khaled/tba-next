'use client';

const ProductCard = ({ id, image, title, description, buttonText, alt }) => {
    return (
        <div className="card">
            <input type="checkbox" id={id} className="more" aria-hidden="true" />
            <div className="content">
                <div className="front" style={{ backgroundImage: `url('${image}')` }}>
                    <div className="inner">
                        {title && <h2>{title}</h2>}
                        <label htmlFor={id} className="button" aria-hidden="true">
                            {buttonText}
                        </label>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <div className="description">
                            <ul>
                                <li className="text-center">
                                    {description}
                                </li>
                            </ul>
                        </div>
                        <label htmlFor={id} className="button return" aria-hidden="true">
                            <img src="/images/right-arrow.webp" alt="back" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
