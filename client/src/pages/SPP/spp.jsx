var ProductPage = React.createClass({
    render: function() {
      return (
        <div>
          <title>Rc Crafters</title>
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .box {\n        border: solid black 1px;\n        margin-top: 10%;\n        margin-left: 10%;\n        margin-right: 10%;\n        color: color: rgb(35, 47, 62);\n        ;\n    }\n\n    .name {\n        margin-left: 5%;\n    }\n\n    .img {\n        float: left;\n        width: 25%;\n        height: 400px;\n        border: solid black 1px;\n        margin-left: 5%;\n    }\n\n    .body-box {\n        border: solid black 1px;\n        margin-left: 35%;\n        margin-right: 5%;\n        color: black;\n        background-color: rgb(225, 224, 222);\n    }\n\n    .price {\n        margin-left: 5%;\n        font-size: 30px;\n        color: rgb(35, 47, 62);\n    }\n\n    .dropdown {\n        margin-left: 5%;\n        font-size: 30px;\n    }\n\n    .quantity {\n        margin-left: 5%;\n        float: left;\n        font-size: 30px;\n    }\n\n    .cartButton {\n        margin-left: 20%;\n        background-color: rgb(35, 47, 62);\n        text-align: center;\n        color: white;\n        padding-top: ;\n        padding-bottom: 1%;\n        padding-left: 4%;\n        padding-right: 4%;\n        width: 40%;\n        margin-bottom: 1%;\n        font-size: 30px;\n    }\n\n    .cartimg {\n        margin-right: 10%;\n        margin-top: 3%;\n        margin-bottom: 1%;\n    }\n\n    .specBox {\n        margin-top: 5%;\n        border: solid grey 1px;\n        text-align: center;\n        margin-bottom: 15%\n    }\n\n    .reviewBox {\n        background-color: rgb(35, 47, 62);\n        font-size: 30px;\n    }\n\n    .reviewButton {\n        font-size: 30px;\n        background-color: rgb(35, 47, 62);\n        border: none;\n        color: rgb(225, 224, 222);\n        margin-top: 1%;\n        margin-bottom: 1%;\n    }\n    .specs {\n    \tmargin-left: 1%;\n    \tfont-size: 25px;\n    \tmargin-bottom: 15%;\n    }\n    " }} />
          <div className="box">
            <div className="name">
              <h1><span id="productName" /></h1>
            </div>
            <div className="img">
              <img src="#" /><span id="productImage" />
            </div>
            <div className="body-box">
              <div className="background-price">
                <div className="price">
                  <h1><span id="price">$</span></h1>
                </div>
              </div>
              <hr />
              <div className="dropdown">
                
                <label htmlFor="options">Options</label>
                <br />
                <select name="options" id="options">
                </select>
              </div>
              <hr />
              <div>
                <div className="quantity">
                  <label>QTY:</label>
                  <form>
                    <input width={20} type="number" name="quantity" />
                  </form>
                </div>
                <div className="cartButtonDiv">
                  <a href="#">
                    <button className="cartButton"><img className="cartimg" height={35} src="../../../public/assets/imgs/cart1.png" />Add to cart</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="specBox">
              <br />
              <div className="reviewBox">
                <a href="#">
                  <button className="reviewButton">Review a Product</button>
                </a>
              </div>
              <div className="specs">
                <span id="specs" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  });