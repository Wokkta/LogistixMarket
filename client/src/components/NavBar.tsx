import { useContext } from 'react';
import { Context } from '../main';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP__ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar: React.FC = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to={SHOP__ROUTE} style={{ color: 'white' }}>
          Shop
        </NavLink>
        {user.getIsAuth() ? (
          <Nav className="me-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'}>Админ панель</Button>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(false)}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="me-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => {
                user.setIsAuth(true);
                console.log(user.isAuth);
                console.log(user);
              }}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
