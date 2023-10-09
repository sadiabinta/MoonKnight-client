import img1 from '../../../assets/home/earring3.jpg'
import img2 from '../../../assets/home/earring5.jpg'
const RightNav = () => {
  return (
    <div className="flex flex-col content-between gap-8">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={img1}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New Collection is released!</h2>
          <p>Exclusive Diamond Collection.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-active btn-neutral">Shop</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={img2}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Price Drop!!!!</h2>
          <p>Exciting Collection with price.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-active btn-neutral">Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
