import { Link } from 'react-router-dom'

function CardSmall({ studio }) {
  return (
    <div className="col-sm-4 card-shadow sml-crd">
      <Link className="card-profile-link" exact to={`/studios/${studio._id}`}>
        <div
          className="card display-card "
          style={{
            background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${studio.mainImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.2))',
          }}>
          <div className="card-body">
            <h5 className="card-title">{studio.name}</h5>
            <p className="card-text">{studio.location.town}</p>
            {/* Insert filter here: if user then filter for studio.bookedstudio.bookings where (userId=bookedBy)&&(studio._id=studioId) and return bookedBy */}
          </div>
        </div>
        <div className="px-4 py-3"></div>
      </Link>
    </div>
  )
}

export default CardSmall