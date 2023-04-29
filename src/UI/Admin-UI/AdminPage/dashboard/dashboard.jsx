import "./dashboard.scss";

//  Icons --> [START]
import { BiRightArrow, BiWallet, BiRefresh } from "react-icons/bi";
// [END]

// Temporary Profile Image
import profileImage from "../../../../Images/img/slider3.jpg";

// Other External NPM Packages --> [START]
import { Chart } from "chart.js/auto"; //Registering Charts ("Do not remove this import")
import { Bar, Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeGet } from "../../../../redux/apiCalls";
import moment from "moment";
import { userRequest } from "../../../../redux/requestMethod";
// [END]

const AdminDashboard = () => {
  // Visitor Stats Graph Data -> (Visitor Stats) --> [STRAT]
  const data = {
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
    datasets: [
      {
        label: "VISITS",
        width: "10px",
        backgroundColor: "royalblue",
        data: [21, 23, 6, 19, 14, 20],
        barPercentage: 0.5,
        borderRadius: 4,
      },
      {
        label: "VIEWS",
        backgroundColor: "lightgray",
        data: [20, 16, 7, 12, 16, 25],
        barPercentage: 0.5,
        borderRadius: 4,
      },
      {
        label: "LOGINS",
        backgroundColor: "hotpink",
        data: [7, 4, 13, 15, 15, 20],
        barPercentage: 0.5,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        suggestedMax: 30,
      },
    },
    maintainAspectRatio: false,
  };
  //   [END]

  const donughtOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "80%",
  };
  //   [END]

  //Data used in Group Stats[START]
  const modelData = {
    datasets: [
      {
        backgroundColor: ["#bfc4c9", "royalblue"],
        data: [14409, 10566],
      },
    ],
  };
  const agenciesData = {
    datasets: [
      {
        backgroundColor: ["#bfc4c9", "hotpink"],
        data: [14409, 1365],
      },
    ],
  };
  const clientsData = {
    datasets: [
      {
        backgroundColor: ["#bfc4c9", "black"],
        data: [14409, 2468],
      },
    ],
  };

  const groupDonughtOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "40%",
    radius: "100%",
  };
  //   [END]

  const [message, setMessage] = useState([]);
  const [model, setModel] = useState([]);
  const [client, setClient] = useState([]);
  const [agency, setAgency] = useState([]);
  const [blog, setBlog] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    makeGet(dispatch, "/user/", setMessage);
  }, [setMessage, dispatch]);
  const reversedMessage = [...message].reverse();

  useEffect(() => {
    const fetchData = async () => {
      const resModel = await userRequest.get("/model/models");
      setModel(resModel.data);
      const resClient = await userRequest.get("/client/clients");
      setClient(resClient.data);
      const resAgency = await userRequest.get("/agency/");
      setAgency(resAgency.data);
      const resBlog = await userRequest.get("/blog/blogs");
      setBlog(resBlog.data);
    };
    return () => fetchData();
  }, []);
  const reversedBlog = [...blog].reverse();
  const total = model?.length + agency?.length + client?.length;
  const modelPer = Math.round((model?.length * 100) / total);
  const agencyPer = Math.round((agency?.length * 100) / total);
  const clientPer = Math.round((client?.length * 100) / total);

  //Data Used in Pie Chart For User History [START]
  const donughtData = {
    labels: ["Models", "Agencies", "Clients"],
    datasets: [
      {
        backgroundColor: ["royalblue", "hotpink", "black"],
        data: [model?.length, agency?.length, client?.length],
      },
    ],
  };

  return (
    <div id="admin_dashboard">
      {/* GRID <--[START] */}
      <div className="pane">
        {/* GRID AREA 1 --> [START] */}
        <div id="area_one">
          <div id="daily_stats">
            {/* <table id="daily_stats_table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>VISITS</th>
                  <th>VIEWS</th>
                  <th>LOGINS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/07/2022</td>
                  <td>21,120</td>
                  <td>20,045</td>
                  <td>5,567</td>
                </tr>
                <tr>
                  <td>01/07/2022</td>
                  <td>21,120</td>
                  <td>20,045</td>
                  <td>5,567</td>
                </tr>
                <tr>
                  <td>01/07/2022</td>
                  <td>21,120</td>
                  <td>20,045</td>
                  <td>5,567</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}></td>
                  <td>
                    <span>
                      Details <BiRightArrow />
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table> */}
          </div>
          <div className="holder">
            <div className="visitor_stats">
              <header>
                <span>Visitor Statistics</span>
                <span id="key_holder">
                  <span className="key"></span>VISITS
                  <span className="key"></span>VIEWS
                  <span className="key"></span>LOGINS
                </span>
                <select name="time_frame" id="time_frame">
                  <option value="6">Last 6 days</option>
                </select>
              </header>
              <div id="visitors_bar_chart">
                <Bar data={data} options={options} />
              </div>
              <footer>
                <span>
                  Audience Overview <BiRightArrow color="#ff007a" />
                </span>
              </footer>
            </div>
          </div>
          <div id="recent_members">
            <table id="recent_members_table">
              <caption>
                <h3>Recent Members</h3>
              </caption>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Level</th>
                  <th>Joined</th>
                  {/* <th>Expires</th> */}
                </tr>
              </thead>
              <tbody>
                {reversedMessage?.slice(0, 4).map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="profile">
                        <div className="profile_image">
                          <img
                            src={
                              item?.picture
                                ? item?.picture
                                : "/images/avatar2.png"
                            }
                            alt="profilepic"
                          />
                        </div>
                        <div className="profile_name">
                          <div>{item?.firstName} </div>
                          <div>{item?.lastName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.role}</td>
                    <td>{moment(item?.createdAt).format("MMMM DD, YYYY")}</td>
                    {/* <td>Dec 26, 2022</td> */}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}>
                    <span>
                      View All Members <BiRightArrow />
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {/* GRID AREA 1 <--[END] */}

        {/* GRID AREA 2 --> [START] */}
        <div id="area_two">
          <div id="group_stats">
            <div className="group_stats_box">
              <div>
                <div>Models</div>
                <div>{model.length}</div>
              </div>
              <div>
                <Doughnut data={modelData} options={groupDonughtOptions} />
              </div>
            </div>
            <span className="group_stats_box">
              <div>
                <div>Agencies</div>
                {agency.length}
              </div>
              <div>
                <Doughnut data={agenciesData} options={groupDonughtOptions} />
              </div>
            </span>
            <span className="group_stats_box">
              <div>
                <div>Clients</div>
                {client.length}
              </div>
              <div>
                <Doughnut data={clientsData} options={groupDonughtOptions} />
              </div>
            </span>
          </div>
          <div id="wallet_buttons">
            <button id="active">
              <BiWallet size={20} />
              <span>AGENCY WALLET</span>
            </button>
            <button>
              <BiWallet size={20} />
              <span>MODEL WALLET</span>
            </button>
          </div>
          <div className="holder">
            <div id="donught_chart_holder">
              <header>
                <span>Users Pie Chart History</span>
                <BiRefresh size={30} color="#66788A" />
              </header>
              <div id="donught_chart">
                <div>
                  <Doughnut data={donughtData} options={donughtOptions} />
                </div>
                <div>
                  <div>
                    <span id="models_key"></span>
                    <span className="name">Models</span>
                    <span id="models_size">{modelPer}%</span>
                  </div>
                  <div>
                    <span id="agencies_key"></span>
                    <span className="name">Agencies</span>
                    <span id="agencies_size">{agencyPer}%</span>
                  </div>
                  <div>
                    <span id="clients_key"></span>
                    <span className="name">Clients</span>
                    <span id="clients_size">{clientPer}%</span>
                  </div>
                </div>
              </div>
              <footer>
                <select name="time_frame" id="time_frame">
                  <option value="6">Last 6 days</option>
                </select>
                <span>
                  Users Overview
                  <BiRightArrow />
                </span>
              </footer>
            </div>
          </div>
          <div id="activity">
            <table id="activities_table">
              <caption>
                <h3>Activity</h3>
                <p>Recently Published</p>
              </caption>

              <thead>
                <tr>
                  <th>DATE & TIME</th>
                  <th>POSTS</th>
                </tr>
              </thead>
              <tbody>
                {reversedBlog?.slice(0, 5).map((blog, index) => (
                  <tr key={index}>
                    <td>{moment(blog.createdAt).fromNow()}</td>
                    <td>{blog?.title}</td>
                  </tr>
                ))}
              </tbody>
              {/* <tfoot>
                <tr>
                  <td colSpan={2}>
                    <span>
                      Recent Comments <BiRightArrow />
                    </span>
                  </td>
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
        {/* GRID AREA 2 <--[END] */}
      </div>
      {/* GRID <--[END] */}
    </div>
  );
};

export default AdminDashboard;
