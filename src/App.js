import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar-left">
          <div className="sidebar">
            <div className="chat-user-profile">
              <header className="chat-user-profile-header text-center border-bottom">
                <span className="chat-profile-close">
                  <i className="feather icon-x"></i>
                </span>
                <div className="my-2">
                  <img
                    src="/app-assets/images/portrait/small/avatar-s-11.png"
                    className="round mb-1"
                    alt="user_avatar"
                    height="100"
                    width="100"
                  />

                  <h5 className="mb-0">John Doe</h5>
                  <span>Designer</span>
                </div>
              </header>
              <div className="chat-user-profile-content">
                <div className="chat-user-profile-scroll ps">
                  <h6 className="text-uppercase mb-1">ABOUT</h6>
                  <p className="mb-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content .
                  </p>
                  <h6>PERSONAL INFORAMTION</h6>
                  <ul className="list-unstyled mb-2">
                    <li className="mb-25">email@gmail.com</li>
                    <li>+1(789) 950 -7654</li>
                  </ul>
                  <h6 className="text-uppercase mb-1">CHANNELS</h6>
                  <ul className="list-unstyled mb-2">
                    <li>
                      <a href="javascript:void(0);"># Devlopers</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"># Designers</a>
                    </li>
                  </ul>
                  <h6 className="text-uppercase mb-1">SETTINGS</h6>
                  <ul className="list-unstyled">
                    <li className="mb-50 ">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center"
                      >
                        <i className="feather icon-tag mr-50"></i>
                        Add Tag
                      </a>
                    </li>
                    <li className="mb-50 ">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center"
                      >
                        <i className="feather icon-star mr-50"></i>
                        Important Contact
                      </a>
                    </li>
                    <li className="mb-50 ">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center"
                      >
                        <i className="feather icon-image mr-50"></i>
                        Shared Documents
                      </a>
                    </li>
                    <li className="mb-50 ">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center"
                      >
                        <i className="feather icon-trash-2 mr-50"></i>
                        Deleted Documents
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center"
                      >
                        <i className="feather icon-x-circle mr-50"></i>
                        Blocked Contact
                      </a>
                    </li>
                  </ul>
                  <div
                    className="ps__rail-x"
                    style={{ left: "0", bottom: "0" }}
                  >
                    <div
                      className="ps__thumb-x"
                      tabIndex="0"
                      style={{ left: "0", width: "0px" }}
                    ></div>
                  </div>
                  <div
                    className="ps__rail-y"
                    style={{ top: "0", right: "0px" }}
                  >
                    <div
                      className="ps__thumb-y"
                      tabIndex="0"
                      style={{ top: "0", height: "0px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-sidebar card">
              <span className="chat-sidebar-close">
                <i className="feather icon-x"></i>
              </span>
              <div className="chat-sidebar-search">
                <div className="d-flex align-items-center">
                  <div className="chat-sidebar-profile-toggle">
                    <div className="avatar">
                      <img
                        src="/app-assets/images/portrait/small/avatar-s-11.png"
                        alt="user_avatar"
                        height="36"
                        width="36"
                      />
                    </div>
                  </div>
                  <fieldset className="form-group position-relative has-icon-left mx-75 mb-0">
                    <input
                      type="text"
                      className="form-control round"
                      id="chat-search"
                      placeholder="Search"
                    />
                    <div className="form-control-position">
                      <i className="feather icon-search text-dark"></i>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="chat-sidebar-list-wrapper pt-2 ps ps--active-y">
                <h6 className="px-2 pb-25 mb-0">
                  CHANNELS
                  <i className="feather icon-plus float-right cursor-pointer"></i>
                </h6>
                <ul className="chat-sidebar-list">
                  <li>
                    <h6 className="mb-0"># Devlopers</h6>
                  </li>
                  <li>
                    <h6 className="mb-0"># Designers</h6>
                  </li>
                </ul>
                <h6 className="px-2 pt-2 pb-25 mb-0">CHATS</h6>
                <ul className="chat-sidebar-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-busy m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-26.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Elizabeth Elliott</h6>
                        <span className="text-muted">Cake pie</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-online m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-7.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Kristopher Candy</h6>
                        <span className="text-muted">jelly jelly</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <h6 className="px-2 pt-2 pb-25 mb-0">
                  CONTACTS
                  <i className="feather icon-plus float-right cursor-pointer"></i>
                </h6>
                <ul className="chat-sidebar-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-away m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-8.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Sarah Woods</h6>
                        <span className="text-muted"> lemon drops</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-offline bg-info m-0 mr-50">
                        JP
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Jenny Perich</h6>
                        <span className="text-muted">candy canes.</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-online m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-5.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Rock Montgomery</h6>
                        <span className="text-muted">powder gum</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-busy m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-9.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Heather Howell</h6>
                        <span className="text-muted">cheesecake toffee</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-offline m-0 mr-50 bg-success">
                        KR
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Kelly Reyes</h6>
                        <span className="text-muted">gingerbread</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-away m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-5.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Rock Montgomery</h6>
                        <span className="text-muted">powder gum</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-offline bg-info m-0 mr-50">
                        JP
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Jenny Perich</h6>
                        <span className="text-muted">candy canes.</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-online m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-14.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Vince Nelson</h6>
                        <span className="text-muted">Puddingdrops</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-offline m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-3.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Drake Elliott</h6>
                        <span className="text-muted">jelly helloi</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-online m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-7.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <i></i>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Kristopher Candy</h6>
                        <span className="text-muted">jujubes</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar bg-info m-0 mr-50">
                        JP
                        <span className="avatar-status-offline"></span>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Jenny Perich</h6>
                        <span className="text-muted">candy canes.</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-15.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <span className="avatar-status-online"></span>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Ammy perry</h6>
                        <span className="text-muted">canvas.</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="avatar m-0 mr-50">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-22.png"
                          height="36"
                          width="36"
                          alt="sidebar user image"
                        />
                        <span className="avatar-status-online"></span>
                      </div>
                      <div className="chat-sidebar-name pl-1">
                        <h6 className="mb-0">Jenny Perich</h6>
                        <span className="text-muted">frooti james.</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="ps__rail-x" style={{ left: "0", bottom: "0" }}>
                  <div
                    className="ps__thumb-x"
                    tabIndex="0"
                    style={{ left: "0", width: "0px" }}
                  ></div>
                </div>
                <div
                  className="ps__rail-y"
                  style={{ top: "0", right: "0px", right: "0" }}
                >
                  <div
                    className="ps__thumb-y"
                    tabIndex="0"
                    style={{ top: "0", height: "auto" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              <div className="chat-overlay"></div>
              <section className="chat-window-wrapper">
                <div className="chat-start">
                  <span className="feather icon-message-square chat-sidebar-toggle chat-start-icon font-large-3 p-3 mb-1"></span>
                  <h4 className="d-none d-lg-block py-50 text-bold-500">
                    Select a contact to start a chat!
                  </h4>
                  <button className="btn btn-light-primary chat-start-text chat-sidebar-toggle d-block d-lg-none py-50 px-1">
                    Start Conversation!
                  </button>
                </div>
                <div className="chat-area d-none">
                  <div className="chat-header">
                    <header className="d-flex justify-content-between align-items-center px-1 py-75">
                      <div className="d-flex align-items-center">
                        <div className="chat-sidebar-toggle d-block d-lg-none mr-1">
                          <i className="feather icon-menu font-large-1 cursor-pointer"></i>
                        </div>
                        <div className="avatar avatar-busy chat-profile-toggle m-0 mr-1">
                          <img
                            src="/app-assets/images/portrait/small/avatar-s-26.png"
                            alt="avatar"
                            height="36"
                            width="36"
                          />
                          <i></i>
                        </div>
                        <h6 className="mb-0">Elizabeth Elliott</h6>
                      </div>
                      <div className="chat-header-icons">
                        <i className="chat-icon-favorite">
                          <i className="feather icon-star font-medium-4 cursor-pointer"></i>
                        </i>
                        <span className="dropdown">
                          <i
                            className="feather icon-more-vertical font-medium-4 ml-25 cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                          ></i>
                          <span
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a
                              className="dropdown-item"
                              href="JavaScript:void(0);"
                            >
                              <i className="feather icon-tag mr-25"></i> Pin to
                              top
                            </a>
                            <a
                              className="dropdown-item"
                              href="JavaScript:void(0);"
                            >
                              <i className="feather icon-trash-2 mr-25"></i>{" "}
                              Delete chat
                            </a>
                            <a
                              className="dropdown-item"
                              href="JavaScript:void(0);"
                            >
                              <i className="feather icon-x-circle mr-25"></i>{" "}
                              Block
                            </a>
                          </span>
                        </span>
                      </div>
                    </header>
                  </div>
                  <div className="card chat-wrapper shadow-none mb-0">
                    <div className="card-content">
                      <div className="card-body chat-container ps">
                        <div className="chat-content">
                          <div className="chat">
                            <div className="chat-avatar">
                              <a className="avatar m-0">
                                <img
                                  src="/app-assets/images/portrait/small/avatar-s-11.png"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-message">
                                <p>How can we help? We're here for you! 😄</p>
                                <span className="chat-time">7:45 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <a className="avatar m-0">
                                <img
                                  src="/app-assets/images/portrait/small/avatar-s-26.png"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-message">
                                <p>
                                  Hey John, I am looking for the best admin
                                  template.
                                </p>
                                <p>
                                  Could you please help me to find it out? 🤔
                                </p>
                                <span className="chat-time">7:50 AM</span>
                              </div>
                              <div className="chat-message">
                                <p>It should be Bootstrap 4 🤩 compatible.</p>
                                <span className="chat-time">7:58 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="badge badge-pill badge-light-secondary my-1">
                            Yesterday
                          </div>
                          <div className="chat">
                            <div className="chat-avatar">
                              <a className="avatar m-0">
                                <img
                                  src="/app-assets/images/portrait/small/avatar-s-11.png"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-message">
                                <p>Absolutely!</p>
                                <span className="chat-time">8:00 AM</span>
                              </div>
                              <div className="chat-message">
                                <p>
                                  Stack admin is the responsive bootstrap 4
                                  admin template.
                                </p>
                                <span className="chat-time">8:01 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <a className="avatar m-0">
                                <img
                                  src="/app-assets/images/portrait/small/avatar-s-26.png"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-message">
                                <p>Looks clean and fresh UI. 😃</p>
                                <span className="chat-time">10:12 AM</span>
                              </div>
                              <div className="chat-message">
                                <p>It's perfect for my next project.</p>
                                <span className="chat-time">10:15 AM</span>
                              </div>
                              <div className="chat-message">
                                <p>How can I purchase 🤑 it?</p>
                                <span className="chat-time">10:18 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="chat">
                            <div className="chat-avatar">
                              <a className="avatar m-0">
                                <img
                                  src="/app-assets/images/portrait/small/avatar-s-11.png"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-message">
                                <p>Thanks 🤝 , from ThemeForest.</p>
                                <span className="chat-time">10:20 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <a className="avatar m-0">
                                <img
                                  src="/app-assets/images/portrait/small/avatar-s-26.png"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-message">
                                <p>I will purchase it for sure. 👍</p>
                                <span className="chat-time">3:32 PM</span>
                              </div>
                              <div className="chat-message">
                                <p>Thanks.</p>
                                <span className="chat-time">3:33 PM</span>
                              </div>
                            </div>
                          </div>
                          <div className="chat">
                            <div className="chat-avatar">
                              <a className="avatar m-0">
                                <img
                                  src="/app-assets/images/portrait/small/avatar-s-11.png"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-message">
                                <p>Great, Feel free to get in touch on</p>
                                <span className="chat-time">3:34 AM</span>
                              </div>
                              <div className="chat-message">
                                <p>https://pixinvent.ticksy.com/</p>
                                <span className="chat-time">3:35 AM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="ps__rail-x"
                          style={{ left: "0", bottom: "0" }}
                        >
                          <div
                            className="ps__thumb-x"
                            tabIndex="0"
                            style={{ left: "0", width: "0px" }}
                          ></div>
                        </div>
                        <div
                          className="ps__rail-y"
                          style={{ top: "0", right: "0px" }}
                        >
                          <div
                            className="ps__thumb-y"
                            tabIndex="0"
                            style={{ top: "0", height: "0px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer chat-footer px-2 py-1 pb-0">
                      <form className="d-flex align-items-center">
                        <i className="feather icon-user cursor-pointer"></i>
                        <i className="feather icon-paperclip ml-1 cursor-pointer"></i>
                        <input
                          type="text"
                          className="form-control chat-message-send mx-1"
                          placeholder="Type your message here..."
                        />
                        <button
                          type="submit"
                          className="btn btn-primary glow send d-lg-flex"
                        >
                          <i className="feather icon-play"></i>
                          <span className="d-none d-lg-block mx-50">Send</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              <section className="chat-profile">
                <header className="chat-profile-header text-center border-bottom">
                  <span className="chat-profile-close">
                    <i className="feather icon-x"></i>
                  </span>
                  <div className="my-2">
                    <img
                      src="/app-assets/images/portrait/small/avatar-s-26.png"
                      className="round mb-1"
                      alt="chat avatar"
                      height="100"
                      width="100"
                    />

                    <h5 className="app-chat-user-name mb-0">
                      Elizabeth Elliott
                    </h5>
                    <span>Devloper</span>
                  </div>
                </header>
                <div className="chat-profile-content p-2 ps">
                  <h6 className="mt-1">ABOUT</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                  <h6 className="mt-2">PERSONAL INFORMATION</h6>
                  <ul className="list-unstyled">
                    <li className="mb-25">email@gmail.com</li>
                    <li>+1(789) 950-7654</li>
                  </ul>
                  <div
                    className="ps__rail-x"
                    style={{ left: "0", bottom: "0" }}
                  >
                    <div
                      className="ps__thumb-x"
                      tabIndex="0"
                      style={{ left: "0", width: "0px" }}
                    ></div>
                  </div>
                  <div
                    className="ps__rail-y"
                    style={{ top: "0", right: "0px" }}
                  >
                    <div
                      className="ps__thumb-y"
                      tabIndex="0"
                      style={{ top: "0", height: "0px" }}
                    ></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
