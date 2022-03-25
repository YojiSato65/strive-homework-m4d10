import '../css/home.css'

const MyNavbar = () => {
  return (
    <footer className="footer mt-auto py-3 d-flex justify-content-between align-items-center">
      <div className="middle-div text-center">
        <div className="d.flex icons align-items-center justify-content-center">
          <i className="fa-solid fa-shuffle footer-icon1 mr-3"></i>
          <i className="fa-solid fa-backward-step footer-icon2 mr-3"></i>
          <i className="fa-solid fa-circle-play mr-3 play"></i>
          <i className="fa-solid fa-forward-step footer-icon2 mr-3"></i>
          <i className="fa-solid fa-repeat footer-icon1"></i>
        </div>
        <div className="d-flex align-items-center">
          <div className="number-play mr-2">0:12</div>
          <div className="footer-play-bar">
            <div className="footer-stop"></div>
          </div>
          <div className="number-play ml-2">3:34</div>
        </div>
      </div>
      <div className="right-div mr-5 d-flex align-items-center">
        <div>
          <i className="fa-solid fa-grip-lines mr-3 footer-icon1"></i>
        </div>
        <div>
          <i className="fa-solid fa-desktop mr-3 footer-icon1"></i>
        </div>
        <div>
          <i className="fa-solid fa-volume-high mr-3 footer-icon1"></i>
        </div>
        <div className="volume"></div>
      </div>
    </footer>
  )
}

export default MyNavbar
