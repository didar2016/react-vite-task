import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [data,setData] = useState([{name:'',status:''}]);
    const [obj, setObj] = useState({})
    const [bool, setbool] = useState(1)
    const handleSubmit = (e) =>{
        e.preventDefault();
        setData([obj, ...data]);
        console.log(data);
    }
    const handleChange = (e) =>{
        
        setObj({...obj, [e.target.name]: e.target.value});
        console.log(obj);
    }
    const handleClick = (val) =>{
        setShow(val);
    }
    
    return (
                
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required onChange={handleChange}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name="status" required onChange={handleChange}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>{handleClick('all'); setbool(1)}}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>{handleClick('active'); setbool(2)}}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>{handleClick('completed'); setbool(3)}}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        { bool==1 && data.map((item)=>{
                            if(item.status == 'active')
                            return (<tr>
                                <th scope="col">{item.name}</th>
                                <th scope="col">{item.status}</th>
                            </tr>)
                        }) }
                        
                        {bool==1 && data.map((item)=>{
                            if(item.status == 'completed')
                            return (<tr>
                                <th scope="col">{item.name}</th>
                                <th scope="col">{item.status}</th>
                            </tr>)
                        }) }
                        
                        {bool==1 && data.map((item)=>{
                            if(item.status != 'completed' && item.status != 'active')
                            return (<tr>
                                <th scope="col">{item.name}</th>
                                <th scope="col">{item.status}</th>
                            </tr>)
                        }) 
                        }

                        {bool == 2 && data.map((item)=>{
                            if(item.status == 'active')
                            return (<tr>
                                <th scope="col">{item.name}</th>
                                <th scope="col">{item.status}</th>
                            </tr>)
                        })}

                        {bool == 3 && data.map((item)=>{
                            if(item.status == 'completed')
                            return (<tr>
                                <th scope="col">{item.name}</th>
                                <th scope="col">{item.status}</th>
                            </tr>)
                        }) 
                        
                        }
                        </thead>
                        <tbody>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;