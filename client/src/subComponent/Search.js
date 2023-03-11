
import React, {useState} from 'react';

const Search = () => {
    const [search, setSearch] = useState('');

  return (
    <div>
       <label className='sea-label'><h3>Search:</h3></label>
        <input 
           type='text' 
           placeholder='Search Key Findings ...'
           id='search'
           name='search'
           value= {search}
           onChange= {(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search