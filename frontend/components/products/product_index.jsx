import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from './product_index_item';
import Carousel from 'react-elastic-carousel';
import YeezyIndexContainer from './yeezy/yeezy_index_container';
import JordanIndexContainer from './jordan/jordan_index_container';


class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                {   
                    link:"/collection/air-jordan-1",
                    img:"https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/splashpic1.png"
                },
                {
                    link:"/collection/fear-of-god",
                    img:"https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/splashpicture2.png"
                },
                {
                    link:"/products/77",
                    img:"https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/splashpicture3.png"

                },
                {
                    link:"/collection/air-jordan-4",
                    img:"https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/splashpicture4.png"
                }
                // {
                //     link:"/collection/yeezy",
                //     img:"https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/splashpicture5.png"
                // }
            
            ]
        }
    }
   
    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
        } else {
        this.setState({
            currentImage: 0
        });
        }
        return this.currentImage;
    }
    componentDidMount(){
        this.props.fetchProducts();
        setInterval(this.switchImage, 3000);
        window.scrollTo(0, 0);
    }

    render() {
        const products = this.props.products.map((product, idx) => {
            return <ProductIndexItem product={product} key={idx}/>
        })

        const photos = [
            {
                name: "Yeezy 700 V3 'Wave Runner'",
                url: "https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/yeezy_waverunner.jpeg",
                link: "/products/61"

            },
            {
                name: "Yeezy 350 V2 'Israfil'",
                url: "https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/yeezy_israfil.jpeg",
                link: "/products/62"

            },
          
            {
                name: "Zoom Kobe 5 Protro 'DeMar DeRozan' PE",
                url: "https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/kobe_demar_PE.jpeg",
                link: "/products/25"
            },
            {
                name: "Air Jordan 1 Retro High OG 'Crimson Tint'",
                url: "https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/Jordan1_crimsontint.jpeg",
                link: "/products/6"
            },
            {
                name: "Air Jordan 1 Mid 'Pine Green'",
                url: "https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/jordan1_green.jpeg",
                link: "/products/2"
            },
            {
                name: "Zoom Kobe 5 Protro 'P.J. Tucker' PE",
                url: "https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/kobe_tucker_PE.jpeg",
                link: "/products/29"
            },
             {
                name: "Zoom Kobe 5 Protro '5 Rings'",
                url: "https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/Kobe_5rings.jpeg",
                link: "/products/26"
            },
             {
                name: "Off-White x Chuck 70 'The Ten'",
                url: "https://hyped-shoes-seed.s3-us-west-1.amazonaws.com/chuck_ten.jpeg",
                link: "/products/75"
            }
         
        ]


        const breakPoints = [
            {width: 400, itemsToShow: 2},
            {width: 700, itemsToShow: 3},
            {width: 900, itemsToShow: 4},
            {width: 1100, itemsToShow: 5}
        ];
    


        return (
            <div>
               
                <div className="slideshow-container">
                    <Link to={this.state.images[this.state.currentImage].link}>
                        <img className="kobe-image"
                        src={this.state.images[this.state.currentImage].img}
                        alt="cleaning images"
                        />
                        <h1 className="index-text">Welcome to Hyped</h1>
                    </Link>
                </div>
                <h1 className="product-header">View Our Collection</h1>
                <ul className="product-ul">
                    {products}
                </ul>
             
                <h2 className="carousel-title"> Top Trending Sneakers</h2>
                <div className="carousel-container">
                    <Carousel className="carousel-bar" breakPoints={breakPoints}>
                       {photos.map((photo , idx) => {
                           return(
                               <Link key={idx} to={photo.link}className="carousel-box">
                                   <img className="carousel-shoe-photo" src={photo.url}/>
                                 <p className="carousel-shoe-name">{photo.name}</p>
                             </Link>  
                           )
                       }
                       )}
                    </Carousel>
                </div>
                <div>
                    <JordanIndexContainer />
                </div>
                <div>
                    <YeezyIndexContainer />
                </div>
                    
            </div>
        )
    }
}
export default ProductIndex;