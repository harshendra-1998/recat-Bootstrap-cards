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
        <div style={{padding:"10px"}} className="cardcell col-sm-12 col-md-6 col-lg-4 col-xl-3">
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
              <i class="fas fa-globe"></i>  <a href={datab.website}>https://{datab.website}</a>
            </p>
            <p>Company : {datab.company.name}</p>
          </section>
          <ul className="nav nav-justified card-footer">
            <li className="nav-item">
              <a className="nav-link hearts" style={{ color: "red" }}>
                <i class="far fa-heart" />
              </a>
            </li>
            <li className="nav-item" data-toggle="modal" data-target="#myModal">
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
      <modal class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content" />
          <div className="moadal-header">
            <h2>Edit</h2>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label for="email">Name</label>
              <input
                type="name"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value="uhds"
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
              Close
            </button>
          </div>
        </div>
      </modal>
    </div>
  );
}
