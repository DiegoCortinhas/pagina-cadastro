import React, {useEffect, useState} from 'react';

import PromotionList from 'components/Promotion/List/List';
import axios from 'axios';
import {Link} from 'react-router-dom'; 
import './Search.css';

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    const params = {};
    if(search){
      params.title_like = search;
    }
    axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id',{params})
    .then((response) => {
      setPromotions(response.data);
    });
  }, [search]);

  return (
      <div className='promotion-search'>
          <header className="promotion-search__header">
            <img src='https://i.ibb.co/4YV3tkh/magalu2.png' />
            <h1>ThanosLu</h1>
            <Link to='/create' align='right'>Novo Produto</Link>
          </header>
          <input 
          type='search' 
          className='promotion-search__input'
          placeholder='Buscar'
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
          />
          <PromotionList promotions = {promotions} loading={!promotions.length}/>
          <footer className="promotion-search__footer"> 
            
              <h4>Desenvolvido por: Diego Cortinhas</h4>
              <ul>
                <li>
                  <a className='social-icon-git' href='https://github.com/DiegoCortinhas/' 
                  target='_blank' rel='nooperner noreferrer'>Github</a>
                </li>
                <li>
                  <a className='social-icon-linkedin' href='https://www.linkedin.com/in/dpcrj21/' 
                  target='_blank' rel='nooperner noreferrer'>Linkedin</a>
                </li>

              </ul>
            
          </footer>    
      </div>
      
  )
};

export default PromotionSearch;