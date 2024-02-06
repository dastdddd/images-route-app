import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { imgUrls } from '../data';

const ImageDetail = () => {
  const { index } = useParams();
  return (
    <Link to="/">
      <div className="modal">
        <div className='image-detail'>
          <img
            width={100}
            height={100}
            style={{width:'100%', height:'100%', objectFit:'contain'}}
            src={imgUrls[index]} />
        </div>
      </div>
    </Link>

  );
};
//<Link to="/">-на самом вверху чтобы при клике в др месте возвращался обратно
//width={100} и height={100} - показывает фото полностю


export default ImageDetail;