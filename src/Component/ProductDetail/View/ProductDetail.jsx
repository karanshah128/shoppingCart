import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useGlobalState from '../../../Context';
import '../../../css/main.css';
import Logout from "../../Logout/View/Logout";
import '../Css/ProductDetail.css'
import { showSuccess, showAlert } from '../../../Common/CommonAlert';


const ProductDetail = () => {
  const [{ loginName, productDetail },] = useGlobalState();
  const history = useHistory()
  const [quantity, setQuanity] = useState(1)


  const incrementValue = () => {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 5) {
      value++;
      setQuanity(value);
    }
    else {
      showAlert("Maximum of five products can be added")
    }
  }

  const decrementValue = () => {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
      value--;
      setQuanity(value);
    }
    else {
      showAlert("Minimum of one product is required.")
    }
  }
  const pushtoCart = () => {
    showSuccess("Added to cart successfully.")
    history.push("/Home")
  }
  return (
    <>

      <section className="wrapper">
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
          <Logout props={loginName} />
          <br />
          <img src={productDetail.Image} alt="Not Found" className="imgsize" />
          <div className="imgholderpd">
            <div className="imgboxpd">
              <span><b>Name :{productDetail.name}</b></span>
              <div className="clearfix"></div>
              <span><b>Price :{productDetail.price}{"Rs"}</b></span>
              <div className="clearfix"></div>
              <span><b>Product Detail:</b></span>
              <ul>
                <li>
                  <b>Cloth:</b>      {productDetail.productDesc.Wear}
                </li>
                <li>
                  <b>Quality:</b>  {productDetail.productDesc.Quality}
                </li>
                <li>
                  <b>Made By:</b>   {productDetail.productDesc.Company}
                </li>

              </ul>
              <div>
                <button className="btn btn-primary buttonWidth " onClick={() => decrementValue()}>-</button>
                <input type="text" className="ml-10" value={quantity} id="quantity" />
                <button className="btn btn-primary ml-10 buttonWidth" onClick={() => incrementValue()}>+</button>
              </div>

              <button className="btn btn-primary mt-10" onClick={() => pushtoCart()}> Add to cart</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ProductDetail