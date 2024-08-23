import  '../../index.scss';


function Header(props) {
  console.log(props);
    return (
    <header className='d-flex justify-between align-center p-40'>
    <div className='d-flex align-center'>
    <img width={40} height={40} src="/img/icons/logo.svg" alt='name' />
    <div className='hederInfo'>
        <h3 className='mb-0'>REACT SNEAKERS</h3>
        <p className='opacity-5'>Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul className="d-flex">
      <li onClick={props.onClickCart} className='mr-30 d-flex align-center cu-p'>
      <img src="img/icons/Сart-icon.svg" alt='name' />
      <span>1205 руб.</span>
      </li>
      <li className='d-flex align-center'>
     <img src="img/icons/Profile-icon.svg" alt='name' />
     <span>Профиль</span>
      </li>
    </ul>
    </header>
    )
}

export default Header;