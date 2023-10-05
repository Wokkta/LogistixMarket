import { Container, Card, Form, Row, Button, Col } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN__ROUTE, REGISTRATION__ROUTE } from '../utils/consts';

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN__ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', minWidth: '50vw' }}>
      <Card className="d-flex flex-column">
        <h2 className="text-center">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-2" placeholder="Введите email" />
          <Form.Control className="mt-2" placeholder="Введите пароль" />
        </Form>
        <Row className="mt-3 d-flex align-items-center">
          {isLogin ? (
            <Col xs={12} md={6} className="text-md-left text-center">
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION__ROUTE}>Зарегистрируйтесь</NavLink>
              </div>
            </Col>
          ) : (
            <Col xs={12} md={6} className="text-md-left text-center">
              <div>
                Есть аккаунт? <NavLink to={LOGIN__ROUTE}>Войдите</NavLink>
              </div>
            </Col>
          )}

          <Col xs={12} md={6} className="text-md-right text-center mt-2 mt-md-0">
            <Button variant="outline-success" style={{ whiteSpace: 'nowrap' }}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Auth;
