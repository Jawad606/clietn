import React from 'react'

function Page6({ formData, setForm }) {
  const {  
    ExpenseAccountNo} =formData;
  return (
    <div className="container bx p-5 my-4">
    <div className="row">
      <div className="col-md-12">
        <h4>Expense</h4>
      </div>
    </div>
    <div className="row py-4">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12 page input px-4">
            <div className="row">
              <div className="col-md-12">
            <h5>Personal/Household expense</h5>
              </div>
            </div>
            <div className="row d-flex justify-content-center py-4">
            <div className="col-md-6">
            <input  name='ExpenseAccountNo' value={ExpenseAccountNo} onChange={setForm}  className='my-2' type="text" placeholder='Account No'   />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page6