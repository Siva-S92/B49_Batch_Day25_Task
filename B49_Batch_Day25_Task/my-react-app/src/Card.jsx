import React from 'react'
import './card.css'




function Card({item, index, passinput, passdescriptinput, passingdatato, updatedatabysetdata}) {
    // function to handle edit button click
    function handleEditClick(event) {

        let letestdata = passingdatato();
        
        const index = event.target.getAttribute("data-index");
        const record = letestdata[index];
        console.log(record);
    
        const nameInput = passinput();
        const descriptInput = passdescriptinput();
        console.log("siva");
        
    
        nameInput.value = record.name;
        console.log("sivan");
        descriptInput.value = record.description;
        console.log(index);
        console.log("before splice:", letestdata);
        letestdata.splice(index, 1);
        updatedatabysetdata([...letestdata])
        
        console.log("after splice:", letestdata);
        console.log("ssss");
    }


    function handleDeleteClick(event) {
        let comingdata = passingdatato();
        const index = event.target.getAttribute("data-index");
        comingdata.splice(index, 1);
        updatedatabysetdata([...comingdata])
      }







    return (
        <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
            <div className="card mycard">
                <div className="card-body px-2">
                    <p className="card-title fw-bold mb-4">name: {item.name}</p>
                    <p className="card-subtitle mb-5 text-muted">discription:{item.description}</p>
                    <div className='d-flex my-4'>
                        <h5>Status:</h5>
                        <select className='text-center select-tag' name="status" id="status">
                            <option value="volvo">All</option>
                            <option className='bg-success' value="saab">Completed</option>
                            <option value="opel">Notcompleted</option>
                        </select>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button onClick={handleEditClick} className="btn btn-sm btn-success mx-1" data-index = {index}>edit</button>
                        <button onClick={handleDeleteClick} className="btn btn-sm btn-danger" data-index = {index}>delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card