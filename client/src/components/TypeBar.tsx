import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../main';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup>
      {device._types.map((type: any) => (
        <ListGroup.Item
          key={type.id}
          active={type.id === device.getSelectedType().id}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            device.setSelectedType(type);
          }}>
          {type.name}
          {device.selectedType}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
