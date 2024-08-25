import React from 'react';

const products = [
  { id: 1, name: 'Granola siêu hạt ăn kiêng 15% yến mạch', price: '133.000 VND', discount: '-99%', image: '/image 27.png' },
  { id: 2, name: 'Hạnh nhân rang muối biển, 240g, hũ', price: '150.000 VND', discount: '-99%', image: '2.png' },
  { id: 3, name: 'Ngũ hạt thập cẩm, 135g, hũ', price: '42.000 VND', discount: '-99%', image: '3.png' },
  { id: 4, name: 'Đậu hòa lan wasabi, 150g, hũ', price: '42.000 VND', discount: '-99%', image: '4.png' },
  { id: 5, name: 'Nước cốt dâu tằm, 300ml, chai', price: '54.000 VND', discount: '-99%', image: '5.png' },
  { id: 6, name: 'Trà sencha hoa hồng, 86g, hộp', price: '109.000 VND', discount: '-99%', image: '6.png' },
  { id: 7, name: 'Bột trà xanh matcha túi 4g', price: '36.000 VND', discount: '-99%', image: '7.png' },
  { id: 8, name: 'Bột rau má, 100g, bịch', price: '100.000 VND', discount: '-99%', image: '8.png' },
];

const ProductList = () => {
  return (
    <div>
      
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.discount}</p>
            <button className="add-to-cart"><i className="fas fa-shopping-cart"></i></button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>&gt;</button>
      </div>
      </div>
  );
};


export default ProductList;
