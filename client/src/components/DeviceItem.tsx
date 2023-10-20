import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE__ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col md={3} onClick={() => navigate(DEVICE__ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border="light">
        <Image
          width={150}
          height={150}
          src={import.meta.env.VITE_API_URL || 'http://localhost:7000/' + device.img}
        />
        <div className="text-black-50  d-flex justify-content-between align-items-center">
          <span>Samsung...</span>
          <div className="d-flex align-items-center">
            <span>{device.rating}</span>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <span>{device.name}</span>
      </Card>
    </Col>
  );
};

export default DeviceItem;
