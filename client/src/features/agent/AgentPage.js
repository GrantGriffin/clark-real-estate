import React from 'react';
import { Link } from 'react-router-dom'
import AddEdit from '../../common/add-edit/AddEdit'

const AgentPage = () => {

  // placeholder info until data is wired up
  const property = {
    title: 'dudehaus',
    address: '123 dude st'
}

    return(
      <div>
      <h1>Hello Agent Page</h1>
      <Link to='/home'>Home Page</Link>
      <AddEdit property={property} />
      </div>
    )
}

export default AgentPage