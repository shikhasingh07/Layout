const SideBar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 ps-2 bg-white">
      <div className="d-flex align-items-center mb-4">
        <span className="mainS">Settings</span>
      </div>
      <ul className="nav nav-pills flex-column snoteS ">
        <li className="nav-item  m-0">
          <a
            href="/#"
            className="nav-link active mb-1 rounded-3  ps-2"
            aria-current="page"
          >
            Profile
          </a>
        </li>
        <li className="nav-item b-color p-0">
          <a href="/#" className="nav-link link-dark ps-2">
            Notifications
          </a>
        </li>
        <li className="nav-item b-color p-0">
          <a href="/#" className="nav-link link-dark ps-2">
            Calls
          </a>
        </li>
        <li className="nav-item b-color p-0">
          <a href="/#" className="nav-link link-dark ps-2">
            Meetings
          </a>
        </li>
        <li className="nav-item b-color p-0">
          <a href="/#" className="nav-link link-dark ps-2">
            Audio/Video Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
