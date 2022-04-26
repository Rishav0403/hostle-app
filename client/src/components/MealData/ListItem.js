import React from 'react'

const ListItem = ({ user }) => {
  return (
    <>
      <div className="row" key={user._id}>
        <div className="col main">{user.name}</div>
        <div className="col">{user.mealtype}</div>
        <div className="col minor">{user.mealstatus ? 'On' : 'Off'}</div>
      </div>
      <div style={{height: '1px', background: 'black', width:'100%', margin:'5px 0' }} />
    </>
  )
}

export default ListItem