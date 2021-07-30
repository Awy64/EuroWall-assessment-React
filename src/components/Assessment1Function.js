import React from 'react'
import { Badge } from 'react-bootstrap'

const Assessment1Function = ({myWidgets, tagLookup, length, handleChange}) => {
  
  return (
    <div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Filter Out Below Length:</span>
        </div>
        <input 
        type="number" 
        name="filter_length" 
        value={length} 
        onChange={handleChange}
        class="form-control" placeholder=""/>
      </div>
<ul class="list-group" style={{textAlign:"left"}}>
    {myWidgets && myWidgets.map((value) => {
      if (value.length >= length) {
        return <li class="list-group-item list-group-item-action">
              <h4>{value.label}</h4>
              <h6>Price: &#36;{value.price}</h6>
              <h6>Length: {value.length}</h6>
              <h6>Tags:
              {value.tags && value.tags.map(tag => {
              return <Badge pill bg="primary" >{tag}</Badge>
              })}
              </h6>
          </li>
      }else return null
      
    })}
    
</ul>
<div class="border p-3 font-weight-bold" style={{textAlign:"left",}}>
  <div>Legend:</div> 
{tagLookup && Object.entries(tagLookup).map(([key, value]) => {
          return <Badge pill bg="info" className="w-50" style={{fontSize:"medium"}}>{key}: {value} </Badge>
        })}
</div>
</div>
  )
}

export default Assessment1Function
