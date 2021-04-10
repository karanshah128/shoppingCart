import React, { useState } from 'react';
import useGlobalState from '../../../Context';
import { useHistory } from 'react-router-dom';
import '../../../css/main.css';
import Logout from "../../Logout/View/Logout";
import '../Css/Home.css'
import imageArray from '../../../Common/CommonAlert'
import { setProductDetail } from '../../../reducer/action'


const Home = () => {
  const [{ loginName },] = useGlobalState();
  const history = useHistory()
  const [{ }, dispatch] = useGlobalState()

  const [value, setValue] = useState('')





  const onAddNotePage = (e, params) => {
    for (let k = 0; k < imageArray.length; k++) {
      if (params === imageArray[k].name) {
        setValue(imageArray[k].imageName.toLowerCase())

      }

    }

  }

  const search = (e) => {
    setValue(e.target.value)
  }

  const gotoproductdetail = (e, product) => {
    dispatch(setProductDetail(product))
    history.push("/ProductDetail")
  }

  const displayValue = () => {
    const abc = imageArray.filter((item, key) => {
      if ((value !== "") && (item.imageName.toLowerCase().indexOf(value.toLowerCase())) !== -1) {
        return item
      }

    }).map((item, key) => {


      return (

        <tr key={key}>

          <div>
            <h1>{item.imageName}</h1>
            <div className="imgholder">
              {item.imageArray.map((xitem, xkey) => {
                return (
                  <tr key={key}>
                    <div className="imgbox" onClick={(e) => { gotoproductdetail(e, xitem) }}>
                      <tr key={xkey}>
                        <img src={xitem.Image} className="imgprop" alt="Not Found" />
                        <span><b>Name :{xitem.name}</b></span>
                        <div className="clearfix"></div>
                        <span><b>Price :{xitem.price}{"Rs"}</b></span>

                      </tr>
                    </div>
                  </tr>
                )
              })}

            </div>
          </div>
        </tr>
      )
    })
    return abc.length ? abc : 'No Products To Display'
  }
  return (
    <>
      <section id="main-content">

        <section className="wrapper">
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <input type="text" className="form-control" placeholder="Type To Search..." onChange={(e) => search(e)} value={value} />
            <br />
            <div className="align">
              <a className="btn btn-primary ml-10 widh bg" onClick={(e) => onAddNotePage(e, "BK")}><span style={{ color: "white" }}>Books </span></a>
              <a className="btn btn-primary ml-10 widh bg" onClick={(e) => onAddNotePage(e, "FH")}><span style={{ color: "white" }}>Fashion</span></a>
              <a className="btn btn-primary ml-10 widh bg" onClick={(e) => onAddNotePage(e, "FD")}><span style={{ color: "white" }}>Food</span></a>
              <a className="btn btn-primary ml-10 widh bg" onClick={(e) => onAddNotePage(e, "HT")}><span style={{ color: "white" }}>Health</span></a>
            </div>
            <Logout props={loginName} />
            <br />
            {displayValue()}

          </div>
        </section>
      </section>
    </>
  )
}

export default Home