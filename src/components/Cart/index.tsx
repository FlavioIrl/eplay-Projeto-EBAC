import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'

import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispath = useDispatch()

  const closeCart = () => {
    dispath(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispath(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumgnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          total de {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="click aqui para continuar com a compra" type="button">
          continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
