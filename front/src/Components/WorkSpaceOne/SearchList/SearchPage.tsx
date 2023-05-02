import React from 'react';
import Card from './Card';

const SearchPage=( filteredPersons:any )=> {
  const filtered = filteredPersons.map((person:any) =>  <Card key={person.id} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchPage;