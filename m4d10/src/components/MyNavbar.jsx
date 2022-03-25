import '../css/home.css'

const MyNavbar = () => {
  return (
    <div className="container left-sidebar">
      <div className="sidebar-top py-3">
        <div>
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_24445.png"
            alt="spotify logo"
            className="spotify-logo"
          />
          <h3 className="d-inline-block">Spotify</h3>
        </div>
      </div>
      <div className="sidebar-second-block">
        <div className="slidebar-selected">
          <i className="fa-solid fa-house mr-2"></i>
          Home
        </div>
        <div>
          <i className="fa-solid fa-magnifying-glass mr-2"></i>
          <input
            type="text"
            id="search-query"
            className="search"
            placeholder="search"
          />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bookshelf mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z" />
          </svg>
          Your Library
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
