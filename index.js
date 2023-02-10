const element = (
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="description-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="profile-details">
        Vishnu Institute of Computers Educations and Technology,
        <br /> Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
