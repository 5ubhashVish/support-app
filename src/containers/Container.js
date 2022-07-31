import { Component } from "react";

import "../App.css";
import Header from "../components/header";
import userImage from "../assets/user-image.jpg";
import dashImage from "../assets/dashboard.png";
import mailImage from "../assets/mail.png";
import user from "../assets/user.png";
import Mailbox from "../components/mailbox";
import Application from "../components/application";
import Dashboard from "../components/dashboard";
import datas from "../assets/commonData.json";
import Footer from "../components/footer";

class Container extends Component {
  /*  Coded By Subhash Vishwakarma */
  constructor(props) {
    super(props);
    this.state = {
      currentview: "application",
      cashFlowData: [],
      barchartData: [],
      incomeData: [],
      balanceData: [],
      appData: [],
    };
  }

  componentDidMount() {
    for (let data of datas) {
      if (data.barchartData) {
        this.setState({
          barchartData: data.barchartData,
        });
      } else if (data.incomeStatement) {
        this.setState({
          incomeData: data.incomeStatement,
        });
      } else if (data.cashFlow) {
        this.setState({
          cashFlowData: data.cashFlow,
        });
      } else if (data.balancesheet) {
        this.setState({
          balanceData: data.balancesheet,
        });
      } else if (data.appData) {
        this.setState({
          appData: data.appData,
        });
      }
    }
  }

  handleChange(currentpage) {
    this.setState({
      currentview: currentpage,
    });
  }

  render() {
    return (
      <div>
        <div>
          <div className="dashboard">
            <Header />
          </div>
          <div className="row sidebar">
            <div className="col-sm-3  border-right bg-teal ml-4 text-black">
              <br />
              <div className="form__padding">
                <img className="form__image" src={userImage} alt="user-img" />
              </div>
              <div className="text-center">
                <span>
                  <h4> Kurt Weller </h4>
                </span>
              </div>
              <div
                className={
                  this.state.currentview === "dashboard"
                    ? "sidebar-elem cursor-pointer active-elem"
                    : "sidebar-elem cursor-pointer"
                }
                onClick={() => this.handleChange("dashboard")}
              >
                <img src={dashImage} alt="dashbaord" width="15" height="15" />
                My Dashboard
              </div>
              <div
                className={
                  this.state.currentview === "application"
                    ? "sidebar-elem cursor-pointer active-elem"
                    : "sidebar-elem cursor-pointer"
                }
                onClick={() => this.handleChange("application")}
              >
                <img src={user} alt="application" width="15" height="15" />
                Application
              </div>
              <div
                className={
                  this.state.currentview === "mailbox"
                    ? "sidebar-elem cursor-pointer active-elem"
                    : "sidebar-elem cursor-pointer"
                }
              >
                <div
                  type="button"
                  data-toggle="collapse"
                  data-target="#demo"
                  onClick={() => this.handleChange("mailbox")}
                >
                  <img src={mailImage} alt="mailbox" width="15" height="15" />
                  Mailbox
                </div>
                <div id="demo" className="collapse ml-4">
                  <p>Compose</p>
                  <p>Inbox</p>
                  <p>Sent</p>
                </div>
              </div>
            </div>
            <div className="col-sm-9 mb-4  container">
              <br />
              {this.state.currentview === "mailbox" ? (
                <Mailbox />
              ) : this.state.currentview === "application" ? (
                <Application
                  cashFlowData={this.state.cashFlowData}
                  balanceData={this.state.balanceData}
                  incomeData={this.state.incomeData}
                  barchartData={this.state.barchartData}
                  appDatas={this.state.appData}
                />
              ) : (
                <Dashboard />
              )}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Container;
