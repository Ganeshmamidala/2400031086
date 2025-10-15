import { useState } from 'react';
import './App.css';
import hoodieImg from './assets/hoodie.svg';
import mugImg from './assets/mug.svg';
import notebookImg from './assets/notebook.svg';

const PRODUCTS = [
  {
    id: 1,
    name: 'Campus Hoodie',
    price: '$35',
    short: 'Cozy uni-branded hoodie',
  img: hoodieImg,
    long: 'A warm, comfortable hoodie with the KL University logo. Made from 80% cotton, 20% polyester. Machine washable.'
  },
  {
    id: 2,
    name: 'Campus Mug',
    price: '$12',
    short: 'Ceramic coffee mug',
  img: mugImg,
    long: 'High-quality ceramic mug featuring the university crest. Dishwasher and microwave safe.'
  },
  {
    id: 3,
    name: 'Notebook',
    price: '$8',
    short: 'A5 ruled notebook',
  img: notebookImg,
    long: '80 pages with ruled lines, soft-touch cover, ideal for lectures and notes.'
  }
];

function Modal({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target.className === 'modal-overlay') onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <img src={product.img} alt={product.name} className="modal-image" />
        <h2 id="modal-title">{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="long">{product.long}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <h1>KL University Store</h1>
      <div className="grid">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="card"
            role="button"
            tabIndex={0}
            onClick={() => setSelected(p)}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(p)}
          >
            <h3>{p.name}</h3>
            <p className="short">{p.short}</p>
            <p className="price">{p.price}</p>
          </div>
        ))}
      </div>
      <Modal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
