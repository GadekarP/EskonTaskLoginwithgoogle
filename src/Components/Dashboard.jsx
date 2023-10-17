import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const Navigate = useNavigate();
  let userData = JSON.parse(localStorage.getItem("userData"));
  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  useEffect(() => {
    let data = localStorage.getItem("userData");
    if (!data) {
      Navigate("/login");
    }
    if (data) {
      Navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <h1>Well Come To The Dashboard...</h1>
      <div className="wrapper">
      {
        <>
        <div className="wrapper">

          <div className="form-container">
            <div className="form-inner">
              <div className="signup">
                <h4>
                  <strong>{"Name = "}</strong>
                  {userData?.name}
                </h4>
                <h4>
                  <strong>{"Email = "}</strong>
                  {userData?.email}
                </h4>
                <img src={userData?.picture} height={100} width={100} alt="" />
                <br/>
                <div className="field btn">
                    <div className="btn-layer">
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      }
      <div className="form-container">
        <div className="form-inner">
          <form className="signup">
            <div className="field btn">
              <div className="btn-layer"></div>
              <button
                type="submit"
                onClick={() => {
                  Navigate("/login");
                  localStorage.removeItem("userData");
                }}
              >
                Logout
              </button>
            </div>
           
          </form>
        </div>
      </div>
      </div>
      <Chart
        className="chartpie"
        options={options}
        series={options.series}
        type="pie"
        width={400}
      ></Chart>
    </>
  );
};

export default Dashboard;
