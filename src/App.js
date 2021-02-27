import React, { useState } from "react";
import "./style.css";
import axios from "axios";

export default function App() {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState(0);
  if (count < 1) {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setdata([...data, ...res.data]);
    });
    setcount(1);
  }

  return (
    <div className="row">
      {data.map(datab => (
        <div
          style={{ padding: "10px" }}
          className="cardcell col-sm-12 col-md-6 col-lg-4 col-xl-3"
        >
          <div
            className="card"
            style={{ flexMargin: "10px" }}
            key={datab.id}
            id={"cardd" + datab.id}
          >
            <img
              className="card-img"
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
            <section className="card-body">
              <h3>{datab.name}</h3>
              <p>
                <i class="far fa-envelope" /> {datab.email}
              </p>
              <p>
                <i class="fas fa-phone" /> {datab.phone}
              </p>
              <p>
                <i class="fas fa-street-view" /> {datab.address.street},{" "}
                {datab.address.suite}, {datab.address.city},{" "}
                {datab.address.zipcode}{" "}
              </p>
              <p>
                <i class="fas fa-globe" />{" "}
                <a href={datab.website}>https://{datab.website}</a>
              </p>
              <p>Company : {datab.company.name}</p>
            </section>
            <ul className="nav nav-justified card-footer">
              <li className="nav-item">
                <a className="nav-link pushme" style={{ color: "red" }}>
                  <i style={{}} class="far fa-heart haa" />
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="modal"
                data-target="#myModal"
              >
                <a className="nav-link">
                  <i class="fas fa-edit" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link closee">
                  <i class="fas fa-trash" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}

      <modal
        className="modal fade"
        id="myModal"
        tabindex="-1"
        style={{ borderRadius: "10px" }}
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div className="moadal-header" style={{ borderRadius: "10px" }}>
                <h2 className="col-3">Edit</h2>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label for="phone">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                  />
                </div>
             
              
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Done
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close20
                </button>
            
            </div>
          </div>
        </div>
      </modal>

     
    </div>
  );
}
