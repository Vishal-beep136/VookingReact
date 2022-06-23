import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://m.economictimes.com/thumb/msid-73023854,width-1200,height-900,resizemode-4,imgsize-235513/hotel-agencies.jpg"
          alt="Hotels"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://www.stratadata.com.au/wp-content/uploads/2017/03/StrataData-7-New-Design-Trends-for-Apartment-Complex-Living-in-2017.jpg"
          alt="Apartment"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>402,30 apartments</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="Resorts"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>4030 Resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/2c/2a/25/chidambara-vilas-chettinad.jpg?w=900&h=-1&s=1"
          alt="Villas"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>4030 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1b/64/1a/36/walnut-cabin.jpg"
          alt="cabins"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>430 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
