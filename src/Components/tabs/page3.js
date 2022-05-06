import React, { useState } from 'react'
import Switch from "react-switch";
function Page3({ formData, setForm }) {
  const{
    TranscationType,
    SelectBank,
    AccountNo,
    TaxDeductionAccoutBank,
    TypeofActivity,
    TypeVehicle,
    VehicleReg,
    TaxDeductionAmountVehicle,
    SelectUtlity,
    SelectProvider,
    CRNo,
    TaxDeductionAmountUtility}=formData;
  const [salaryCheck, setsalaryCheck] = useState(true)
  const [RentCheck, setRentCheck] = useState(true)
  const [utilitysCheck, setutilitysCheck] = useState(true)

  
   const handleChangeSalary = (nextChecked) => {
     setsalaryCheck(nextChecked);
   };
   const handleChangeRent = (nextChecked) => {
     setRentCheck(nextChecked);
   };
   const handleChangeUtitle = (nextChecked) => {
     setutilitysCheck(nextChecked);
   };

   return (
     <div className="container bx p-5 my-4">
       <div className="row">
         <div className="col-md-12">
           <h4>Withhold Taxkes</h4>
         </div>
       </div>
       <div className="row py-4">
         <div className="col-md-12">
           <div className="row">
             <div className="col-md-6 page input px-4">
               <div className="row">
                 <div className="col-md-6">
                   <h6>Bank Transaction</h6>
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
               <select  name='TranscationType' value={TranscationType} onChange={setForm}  disabled={salaryCheck}  className='my-2' >
                 <option value="">Transaction Type</option>
               </select>
               <select   name='SelectBank' value={SelectBank} onChange={setForm}  disabled={salaryCheck}  className='my-2' >
                 <option value="">Select Back</option>
               </select>
               <input   name='AccountNo' value={AccountNo} onChange={setForm}   className='my-2' type="text" placeholder='Account No.' disabled={salaryCheck}  />
               <input   name='TaxDeductionAccoutBank'value={TaxDeductionAccoutBank} onChange={setForm}  className='my-2' type="text" placeholder='Tax Deduct Amount' disabled={salaryCheck}  />
               <button>Add</button>
             </div>
             <div className="col-md-6 page input px-4">
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
                    <select name='TypeofActivity'  value={TypeofActivity} onChange={setForm}  disabled={RentCheck}  className='my-2' >
                 <option value="">Type of activity</option>
               </select>
               <select  name='TypeVehicle' value={TypeVehicle} onChange={setForm}  disabled={RentCheck}  className='my-2' >
                 <option value="">Type of Vehicle</option>
               </select>
               <input  name='VehicleReg'  value={VehicleReg} onChange={setForm} className='my-2' type="text" placeholder='Vehicle Registration No.' disabled={RentCheck}  />
               <input  name='TaxDeductionAmountVehicle'  value={TaxDeductionAmountVehicle} onChange={setForm} className='my-2' type="text" placeholder='Tax Deduct Amount' disabled={RentCheck}  />
               <button>Add</button>
             </div>
              <div className="col-md-6 page input px-4">
               <div className="row">
                 <div className="col-md-6">
                   <h6>Utilties</h6>
                 </div>
                 <div className="col-md-6">
                   <Switch
                     onColor="#2f659b"
                     onChange={handleChangeUtitle}
                     checked={utilitysCheck}
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
                    <select  name='SelectUtlity'  value={SelectUtlity} onChange={setForm} disabled={utilitysCheck}  className='my-2' >
                 <option value="">Select Utlity</option>
               </select>
               <select  name='SelectProvider'  value={SelectProvider} onChange={setForm}  disabled={utilitysCheck}  className='my-2' >
                 <option   value="">Select Provider</option>
               </select>
               <input  name='CRNo' value={CRNo} onChange={setForm} className='my-2' type="text" placeholder='Consumer No./Reference No.' disabled={utilitysCheck}  />
               <input  name='TaxDeductionAmountUtility' value={TaxDeductionAmountUtility} onChange={setForm} className='my-2' type="text" placeholder='Tax Deduct Amount' disabled={utilitysCheck}  />
               <button>Add</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 


export default Page3