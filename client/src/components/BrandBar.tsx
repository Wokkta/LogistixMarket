import { observer } from 'mobx-react-lite';
import { Card, Row } from 'react-bootstrap';
import { Context } from '../main';
import { useContext } from 'react';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand: any) => (
        <Card
          key={brand.id}
          className="p-3 "
          onClick={() => {
            device.setSelectedBrand(brand);
          }}
          style={{
            cursor: 'pointer',
          }}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}>
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
