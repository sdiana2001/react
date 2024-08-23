import  '../../index.scss';

function Drawer(props) {
    return (
    <div className="overlay">
    <div className="drawer">
    <h2 className='mb-30' d-flex align-center justify-between >
      Корзина <img onClick={props.onClose} src="/img/icons/remove__btn.svg" alt="Remove" />
      </h2>
    <div className="items">
  {/* CARD 1 */}
    <div className="cartItem d-flex align-center mb-20"> 
    <img className='mr-20' width={70} src="/img/products-images/image 5-10.svg" alt="" />
      <div className="mr-20">
      <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <b>12 999 руб.</b>
      </div>
      <img className='removeBtn' src="/img/icons/remove__btn.svg" alt="" />
      </div>
  {/* CARD 2 */}
      <div className="cartItem d-flex align-center mb-20"> 
      <img className='mr-20' width={70} src="/img/products-images/image 5-10.svg" alt="" />
      <div className="mr-20">
      <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <b>12 999 руб.</b>
      </div>
      <img className='removeBtn' src="/img/icons/remove__btn.svg" alt="" />
      </div>

  {/* CARD 3 */}
       <div className="cartItem d-flex align-center mb-20"> 
      <img className='mr-20' width={70} src="/img/products-images/image 5-10.svg" alt="" />
      <div className="mr-20">
      <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <b>12 999 руб.</b>
      </div>
      <img className='removeBtn' src="/img/icons/remove__btn.svg" alt="" />
      </div>
    </div>

    <div className="cartTotalblock">
      <ul>
        <li>
          <span>Итого: </span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li>
          <span>Налог 5%: </span>
          <div></div>
          <b>1074 руб.</b>
        </li>
      </ul>
      <button className='greenButton'>Оформить заказ <img src="/img/icons/arrow-btn.svg" alt="arrow" />
      </button>
      </div>

      </div>
      </div>
    )
}

export default Drawer;