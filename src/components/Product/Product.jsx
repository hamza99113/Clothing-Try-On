import React from 'react';
import './Product.css'
import Img_1 from '../../images/Product_Img/1.jpg';
import Img_2 from '../../images/Product_Img/2.jpg';
import Img_3 from '../../images/Product_Img/3.jpg';
import Img_4 from '../../images/Product_Img/4.jpg';
import Img_5 from '../../images/Product_Img/5.jpg';
import Img_6 from '../../images/Product_Img/6.jpg';
import Img_7 from '../../images/Product_Img/7.jpg';
import Img_8 from '../../images/Product_Img/8.jpg';

import { NavLink} from 'react-router-dom';

function ProductItem() {

  return (
    <div className="text">
        <h4>Featured Products</h4>
        <p>Summer Collection New Modern Design</p>
    <div className="product-container">
        <NavLink to="/VirtualTry" className="nav-k">
        <div className="pro">
            <img src={Img_3} alt="Clothitem"/>
            <div className="des">
                <span>Adidas</span>
                <h5>Shoes</h5>
                <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <h4>$75</h4>
            </div>
        </div></NavLink>
        
        <NavLink to="/VirtualTry" className="nav-k">
        <div className="pro">
            <img src={Img_2} alt="Clothitem"/>
            <div className="des">
                <span>Adidas</span>
                <h5>Shoes</h5>
                <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <h4>$75</h4>
            </div>
        </div></NavLink>

        <NavLink to="/VirtualTry" className="nav-k">
        <div className="pro">
            <img src={Img_1} alt="Clothitem"/>
            <div className="des">
                <span>Adidas</span>
                <h5>Shoes</h5>
                <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <h4>$75</h4>
            </div>
        </div></NavLink>

        <NavLink to="/VirtualTry" className="nav-k">
        <div className="pro">
            <img src={Img_4} alt="Clothitem"/>
            <div className="des">
                <span>Adidas</span>
                <h5>Shoes</h5>
                <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <h4>$75</h4>
            </div>
        </div></NavLink>

        <NavLink to="/VirtualTry" className="nav-k">
        <div className="pro">
            <img src={Img_5} alt="Clothitem"/>
            <div className="des">
                <span>Adidas</span>
                <h5>Shoes</h5>
                <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <h4>$75</h4>
            </div>
        </div></NavLink>

        <NavLink to="/VirtualTry" className="nav-k">
        <div className="pro">
            <img src={Img_6} alt="Clothitem"/>
            <div className="des">
                <span>Adidas</span>
                <h5>Shoes</h5>
                <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <h4>$75</h4>
            </div>
        </div></NavLink>
        <NavLink to="/VirtualTry" className="nav-k">
        <div className="pro">
            <img src={Img_7} alt="Clothitem"/>
            <div className="des">
                <span>Adidas</span>
                <h5>Shoes</h5>
                <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <h4>$75</h4>
            </div>
        </div></NavLink>
        <NavLink to="/VirtualTry" className="nav-k">
        <div className="pro">
            <img src={Img_8} alt="Clothitem"/>
            <div className="des">
                <span>Adidas</span>
                <h5>Shoes</h5>
                <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <h4>$75</h4>
            </div>
        </div></NavLink>
    </div>
    </div>
  );
}

export default ProductItem;
