import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const DataCard = ({ name, description, photo, id }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={photo} />
        <p>{name}</p>
        <div className="proj-txtx">
          <h4>{name}</h4>
          {/* <span>{id}</span> */}
          <Link to={`/detialnews/${id}`}>Дэлгэрэнгүй</Link>
        </div>
      </div>
    </Col>
  )
}
