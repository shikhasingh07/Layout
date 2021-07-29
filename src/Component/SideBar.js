const SideBar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white home-container h-100 ">
      <div className="d-flex align-items-center mb-4">
        <span className="fs-4 fw-bold">Settings</span>
      </div>
      <ul className="nav nav-pills flex-column text-dark fw-bold ">
        <li className="nav-item  m-0">
          <a
            href="/#"
            className="nav-link active mb-1 rounded-3  ps-2"
            aria-current="page"
          >
            Profile
          </a>
        </li>
        <li className="nav-item b-color ps-2">
          <a href="/#" className="nav-link link-dark">
            Notifications
          </a>
        </li>
        <li className="nav-item b-color ps-2">
          <a href="/#" className="nav-link link-dark">
            Calls
          </a>
        </li>
        <li className="nav-item b-color ps-2">
          <a href="/#" className="nav-link link-dark">
            Meetings
          </a>
        </li>
        <li className="nav-item b-color ps-2">
          <a href="/#" className="nav-link link-dark">
            Audio/Video Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
