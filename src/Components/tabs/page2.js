import React, { useState } from "react";
import "./page.css";
import Switch from "react-switch";
function Page2({ formData, setForm }) {
  const {
    Salary,
    Rent,
    Business,
    Commission,
    Agriculture,
    FreeLancing,
    Other,
  } = formData;

 const [salaryCheck, setsalaryCheck] = useState(true)
 const [RentCheck, setRentCheck] = useState(true)
 const [businessCheck, setbusinessCheck] = useState(true)
 const [commisionCheck, setcommisionCheck] = useState(true)
 const [agriCheck, setagriCheck] = useState(true)
 const [freelanceCheck, setfreelanceCheck] = useState(true)
 const [otherCheck, setotherCheck] = useState(true)
 
  const handleChangeSalary = (nextChecked) => {
    setsalaryCheck(nextChecked);
  };
  const handleChangeRent = (nextChecked) => {
    setRentCheck(nextChecked);
  };
  const handleChangeBusin = (nextChecked) => {
    setbusinessCheck(nextChecked);
  };
  const handleChangeComm = (nextChecked) => {
    setcommisionCheck(nextChecked);
  };
  const handleChangeAgri = (nextChecked) => {
    setagriCheck(nextChecked);
  };
  const handleChangeFree= (nextChecked) => {
    setfreelanceCheck(nextChecked);
  };
  const handleChangeOther = (nextChecked) => {
    setotherCheck(nextChecked);
  };
  return (
    <div className="container bx p-5 my-4">
      <div className="row">
        <div className="col-md-12">
          <h4>Source of Income</h4>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Salary</h6>
                </div>
                <div className="col-md-6">
                  <Switch
                    onColor="#2f659b"
                    onChange={handleChangeSalary}
                    checked={salaryCheck}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          color: "#fff",
                          fontWeight: 700,
                          paddingRight: 2,
                        }}
                      >
                        OFF
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                          paddingRight: 2,
                        }}
                      >
                        NO
                      </div>
                    }
                  />
                </div>
              </div>
              <input name='Salary' type="text" value={Salary} onChange={setForm}  disabled={salaryCheck}  />
            </div>
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Rent/Sale</h6>
                </div>
                <div className="col-md-6">
                  <Switch
                    onColor="#2f659b"
                    onChange={handleChangeRent}
                    checked={RentCheck}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          color: "#fff",
                          fontWeight: 700,
                          paddingRight: 2,
                        }}
                      >
                        OFF
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                          paddingRight: 2,
                        }}
                      >
                        NO
                      </div>
                    }
                  />
                </div>
              </div>
              <input name='Rent' type="text" value={Rent} onChange={setForm} disabled={RentCheck} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Business</h6>
                </div>
                <div className="col-md-6">
                  <Switch
                    onColor="#2f659b"
                    onChange={handleChangeBusin}
                    checked={businessCheck}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          color: "#fff",
                          fontWeight: 700,
                          paddingRight: 2,
                        }}
                      >
                        OFF
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                          paddingRight: 2,
                        }}
                      >
                        NO
                      </div>
                    }
                  />
                </div>
              </div>
              <input name='Business' type="text" value={Business} onChange={setForm} disabled={businessCheck} />
            </div>
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Commission/Service</h6>
                </div>
                <div className="col-md-6">
                  <Switch
                    onColor="#2f659b"
                    onChange={handleChangeComm}
                    checked={commisionCheck}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          color: "#fff",
                          fontWeight: 700,
                          paddingRight: 2,
                        }}
                      >
                        OFF
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                          paddingRight: 2,
                        }}
                      >
                        NO
                      </div>
                    }
                  />
                </div>
              </div>
              <input name='Commission' type="text" value={Commission} onChange={setForm} disabled={commisionCheck} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Agriculture</h6>
                </div>
                <div className="col-md-6">
                  <Switch
                    onColor="#2f659b"
                    onChange={handleChangeAgri}
                    checked={agriCheck}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          color: "#fff",
                          fontWeight: 700,
                          paddingRight: 2,
                        }}
                      >
                        OFF
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                          paddingRight: 2,
                        }}
                      >
                        NO
                      </div>
                    }
                  />
                </div>
              </div>
              <input  name='Agriculture' type="text" value={Agriculture} onChange={setForm} disabled={agriCheck} />
            </div>
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>FreeLancing</h6>
                </div>
                <div className="col-md-6">
                  <Switch
                    onColor="#2f659b"
                    onChange={handleChangeFree}
                    checked={freelanceCheck}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          color: "#fff",
                          fontWeight: 700,
                          paddingRight: 2,
                        }}
                      >
                        OFF
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                          paddingRight: 2,
                        }}
                      >
                        NO
                      </div>
                    }
                  />
                </div>
              </div>
              <input name='FreeLancing' type="text"  value={FreeLancing} onChange={setForm} disabled={freelanceCheck} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Other</h6>
                </div>
                <div className="col-md-6">
                  <Switch
                    onColor="#2f659b"
                    onChange={handleChangeOther}
                    checked={otherCheck}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          color: "#fff",
                          fontWeight: 700,
                          paddingRight: 2,
                        }}
                      >
                        OFF
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                          paddingRight: 2,
                        }}
                      >
                        NO
                      </div>
                    }
                  />
                </div>
              </div>
              <input name='Other' type="text"  value={Other} onChange={setForm}  disabled={otherCheck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
