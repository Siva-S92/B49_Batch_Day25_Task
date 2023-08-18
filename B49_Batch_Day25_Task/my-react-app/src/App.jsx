import React, { useEffect, useState } from 'react'
import Home from './Home';
import Card from './Card';
import Data from './Data';





function App() {
  const [rerender, setrerender] = useState(false);

  const [nameinput, setnameinput] = useState("");
  const [descriptinput, setdescriptinput] = useState("");

  const get_nameinput = (value) => {
    setnameinput(value);
  }
  const get_descriptinput = (ele) => {
    setdescriptinput(ele);
  }

  const passinput = () => {
    return nameinput;
  }
  const passdescriptinput = () => {
    return descriptinput;
  }




  const [data, setdata] = useState([...Data]);

  const updatedatabysetdata = (items) => {
    setdata(items)
    setrerender(true);
  }

  const passingdatato = () => {
    return data;
  }


  useEffect(() => {
    console.log("data updated");
  }, [data])





  return (
    <>
      <Home get_nameinput={get_nameinput} get_descriptinput={get_descriptinput} updatedatabysetdata={updatedatabysetdata} passingdatato={passingdatato} />
      <div className='row justify-content-center'>
        {data.map((item, index) => (
          <Card key={index} item={item} index={index} passinput={passinput} passdescriptinput={passdescriptinput} passingdatato={passingdatato} updatedatabysetdata={updatedatabysetdata} />
        ))}
      </div>

    </>
  )
}

export default App