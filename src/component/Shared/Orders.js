import './Orders.css'
const Orders = (props) => {
    const {name,item,email,img,address,description,_id} = props.values;
    // const {setOrder,order} = useOrders()


   const deleteItems=(id)=>{
    const alertintg = window.confirm("Do you want to Cancel?")
    console.log(alertintg)
    if(alertintg){
      fetch(`https://evening-shelf-32402.herokuapp.com/orders/${id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      window.location.reload();
    })
    }
   }
    return (
        <div className='order-card'>
          <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Item: {item}</h5>
        <p class="card-text">{description?.slice(0,100)}</p>
        <p class="card-text"><b>Name: {name}</b></p>
        <p class="card-text">Email: {email}</p>
        <p class="card-text"><small class="text-muted">Address: {address}</small></p>
        <button className='btn btn-primary'>Confirm</button>
        <button onClick={()=>deleteItems(_id)} className='btn btn-danger'>Cancel</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Orders;