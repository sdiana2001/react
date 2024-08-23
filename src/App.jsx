import React from 'react';
import Product from './components/Product';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';


function App() {
  const[items, setItems]= React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

React.useEffect(()=>{
   fetch('https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/items')
  .then((response) =>{
  return response.json(); // сначала ответ преврати в json и втолько тогда верни мне
  })
  .then((json) => {
    setItems(json); // здесь мы получаем тот json который нам нужен 
  }); 
}, []);


  return (
   <div className="wrapper clear">
{/* Drawer */}    
    {cartOpened && <Drawer onClose={()=> setCartOpened(false)} />}  {/* Если значение cartOpened положительное => выполни следующее */}


{/* Header */}  
    <Header onClickCart={()=> setCartOpened(true)} />

    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
      <h1>Все кроссовки</h1>
      <div className="search-block">
      <img src="/img/icons/search.svg" alt="search" />
      <input placeholder='Поиск...' />
      </div> 
      </div>
      <div className="d-flex flex-wrap">
 {/* Product */}
          {items.map(obj => (
          <Product key={obj.id}  
          img={obj.img} 
          title={obj.title}  
          price={obj.price}
          onFavorite={() => console.log('Нажали на сердце')}
          onPlus={() => console.log('Нажали на плюс')}
           />  // пропсы
        ))}

      </div>
      </div>
      </div>
  )
  

}

export default App;
