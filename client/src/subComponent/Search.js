
import React, {useState} from 'react'

const Search = () => {
    const [search, setSearch] = useState('');

  return (
    <div>
       <label className='sea-label'>Search:</label>
        <input 
           type='text' 
           id='search'
           name='search'
           value= {search}
           onChange= {(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search