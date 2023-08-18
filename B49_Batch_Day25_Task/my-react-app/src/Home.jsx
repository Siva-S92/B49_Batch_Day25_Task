import React from 'react'



function Home({ get_nameinput, get_descriptinput, updatedatabysetdata, passingdatato }) {


    function handleAddTodo(event) {

        event.preventDefault();
        const todo_name = document.getElementById("todo-name");
        get_nameinput(todo_name);
        const todo_descript = document.getElementById("todo-descript");
        get_descriptinput(todo_descript);

        const name = todo_name.value.trim();
        const description = todo_descript.value;

        if (name === "" || description === "") {
            alert("Please fill in all the fields correctly.");
            return;
        }



        //Add data to the array
        let newdata = passingdatato();

        newdata.push({ name: name, description: description, status: "completed" });
        updatedatabysetdata([...newdata]);

        // Clear Form fields
        todo_name.value = "";
        todo_descript.value = "";
        console.log("item added in data");
        console.log(newdata);

        // Display updated data in the table

    }














    return (
        <div className="container my-4 py-4 border">
            <h1 className='text-center'>My todo</h1>
            <div className='m-0'>
                <form className='my-3 d-flex justify-content-between' onSubmit={handleAddTodo}>
                    <div className="m-3">
                        <input className='w-100 ' type="text" id='todo-name' name='todo-name' placeholder='todo name' size="70" />
                    </div>
                    <div className=" m-3">
                        <input className='w-100' type="text" id='todo-descript' name='todo-descript' placeholder='todo description' size="70" />
                    </div>
                    <div id='addtodobutton' className=' m-3'>
                        <button type="submit" name='todo-button' className='btn  btn-primary'>AddTodo</button>
                    </div>
                </form>
            </div>

            <div className='d-flex justify-content-between'>
                <h5>My todos</h5>
                <div className='d-flex'>
                    <h5>Status filter:</h5>
                    <select className='text-center' name="status" id="status">
                        <option value="volvo">All</option>
                        <option value="saab">Completed</option>
                        <option value="opel">Notcompleted</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Home