import React, { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./Page4";
import "./style.css";
import { Tabs, Tab, Button } from "react-bootstrap";
import Page5 from "./Page5";
import Page6 from "./Page6";
import { useForm } from "react-hooks-helper";
function Main() {
  const [key, setKey] = useState(1);
  const defaultData = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    CNIC: "",
    DateofBirth: "",
    Occupation: "",
    City: "",
    Address: "",


    Salary: "",
    Rent: "",
    Business: "",
    Commission: "",
    Agriculture: "",
    FreeLancing: "",
    Other: "",


    TranscationType: "",
    SelectBank: "",
    AccountNo: "",
    TaxDeductionAccoutBank: "",
    TypeofActivity: "",
    TypeVehicle: "",
    VehicleReg: "",
    TaxDeductionAmountVehicle: "",
    SelectUtlity: "",
    SelectProvider: "",
    CRNo: "",
    TaxDeductionAmountUtility: "",

    Reconcilation:"",

    TypeOfproperty: "",
    AddressProperty: "",
    AmountProperty: "",

    VehicleTYpe: "",
    RegNo: "",
    Amount: "",

    SelectBank5:"",
    AccountNo5:"",
    Amount5:"",

    CashAmount5:"",

    ExpenseAccountNo:""
  };

  
  const [formData, setForm] = useForm(defaultData);
  const props = { formData, setForm };
  var ShowObj={
    firstName:formData.firstName
    ,lastName:formData.lastName
    ,emailAddress:formData.emailAddress
    ,phoneNumber:formData.phoneNumber
    ,CNIC:formData.CNIC
    ,DateofBirth:formData.DateofBirth
    ,Occupation:formData.Occupation
    ,City:formData.City
    ,Address:formData.Address


    ,Salary:formData.Salary
    ,Rent:formData.Rent
    ,Business:formData.Business
    ,Commission:formData.Commission
    ,Agriculture:formData.Agriculture
    ,FreeLancing:formData.FreeLancing
    ,Other:formData.Other


    ,TranscationType:formData.TranscationType
    ,SelectBank:formData.SelectBank
    ,AccountNo:formData.AccountNo
    ,TaxDeductionAccoutBank:formData.TaxDeductionAccoutBank
    ,TypeofActivity:formData.TypeofActivity
    ,TypeVehicle:formData.TypeVehicle
    ,VehicleReg:formData.VehicleReg
    ,TaxDeductionAmountVehicle:formData.TaxDeductionAmountVehicle
    ,SelectUtlity:formData.SelectUtlity
    ,SelectProvider:formData.SelectProvider
    ,CRNo:formData.CRNo
    ,TaxDeductionAmountUtility:formData.TaxDeductionAmountUtility

    ,Reconcilation:formData.Reconcilation

    ,TypeOfproperty:formData.TypeOfproperty
    ,AddressProperty:formData.AddressProperty
    ,AmountProperty:formData.AmountProperty

   ,VehicleTYpe:formData.VehicleTYpe
    ,RegNo:formData.RegNo
    ,Amount:formData.Amount

    ,SelectBank5:formData.SelectBank5
    ,AccountNo5:formData.AccountNo5
    ,Amount5:formData.Amount5

    ,CashAmount5:formData.CashAmount5

    ,ExpenseAccountNo:formData.ExpenseAccountNo
  }
  return (
    <div className="tabs container-fluid d-flex align-items-center justify-content-center flex-column p-4 ">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-5"
      >
        <Tab eventKey="1" title="1 " disabled>
          <Page1 {...props} />
          <Button
            className="button"
            onClick={() => {
              parseInt(key) <  6  && setKey(parseInt(key) + 1);
            }}
          >
            Next
          </Button>
        </Tab>
        <Tab eventKey="2" title="2" disabled>
          <Page2 {...props}  />
          <Button
            className="button"
            onClick={() => {
              parseInt(key) <  6  && setKey(parseInt(key) + 1);
            }}
          >
            Next
          </Button>
          <Button
            className="button"
            onClick={() => {
              parseInt(key) > 1 && setKey(parseInt(key) - 1);
            }}
          >
            Previous
          </Button>
        </Tab>
        <Tab eventKey="3" title="3" disabled>
          <Page3 {...props}  />
          <Button
            className="button"
            onClick={() => {
              parseInt(key) <  6  && setKey(parseInt(key) + 1);
            }}
          >
            Next
          </Button>
          <Button
            className="button"
            onClick={() => {
              parseInt(key) > 1 && setKey(parseInt(key) - 1);
            }}
          >
            Previous
          </Button>
        </Tab>
        <Tab eventKey="4" title="4" disabled>
          <Page4 {...props}  />
          <Button
            className="button"
            onClick={() => {
              parseInt(key) < 6 && setKey(parseInt(key) + 1);
            }}
          >
            Next
          </Button>
          <Button
            className="button"
            onClick={() => {
              parseInt(key) > 1 && setKey(parseInt(key) - 1);
            }}
          >
            Previous
          </Button>
        </Tab>
          <Tab eventKey="5" title="5" disabled>
          <Page5 {...props}  />
          <Button
            className="button"
            onClick={() => {
              parseInt(key) < 6 && setKey(parseInt(key) + 1);
            }}
          >
            Next
          </Button>
          <Button
            className="button"
            onClick={() => {
              parseInt(key) > 1 && setKey(parseInt(key) - 1);
            }}
          >
            Previous
          </Button>
        </Tab>
          <Tab eventKey="6" title="6" disabled>
          <Page6 {...props}  />
          <Button
            className="button"
            onClick={() => {
              parseInt(key) > 1 && setKey(parseInt(key) - 1);
            }}
          >
            Previous
          </Button>
          <Button
            className="button"
            onClick={() => alert(
              JSON.stringify(ShowObj)
              
            )}
          >
            Submit
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Main;
