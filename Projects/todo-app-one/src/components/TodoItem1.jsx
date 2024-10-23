function TodoItem1() {


  return (
    <div className="container text-center">
    <div className="row">
    <div className="col-6">
     Buy Milk
    </div>
    <div className="col-4">
      <input type="date" />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-info">Delete</button>
    </div>
  </div>
  </div>
  )
}

export default TodoItem1;