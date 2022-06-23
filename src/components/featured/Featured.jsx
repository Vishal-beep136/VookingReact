import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/421/698/564/canada-nature-world-beautiful-places-wallpaper-preview.jpg"
          alt="City"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Canada</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://img.wallpapersafari.com/desktop/1920/1080/0/26/2uDRaN.jpg"
          alt="City"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Paris</h1>
          <h2>34 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://www.freewalldownload.com/sydney-austalia-attractive-pics/beautiful-free-high-definition-charming-sydney-australia-harbour-bridge-natural-sceneries-laptop-desktop-mobile-wallpapers-download.jpg"
          alt="City"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Sydney</h1>
          <h2>192 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://wallpaperaccess.com/full/222685.jpg"
          alt="City"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Dubai</h1>
          <h2>68 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
