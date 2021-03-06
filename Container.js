import React, { Component, useState, useEffect } from 'react';
import _ from 'lodash';


//Sample Model - Just replace it with a middleware such as Nodejs Api request

const data = [
  { id: 1, name: 'Spider-Man', superPower: 'cling to walls' },
  { id: 2, name: 'Ant-man', superPower: 'shrink size at will' },
  { id: 3, name: 'Batman', superPower: 'genius intellect' },
];

 function fetchFarAwayAPI() {
   return data;
 }


//Smart/Container/Controller Components

export default function SuperHeroListContainer(){
 
    const[superHeroData, setsuperHeroData]= useState([]);

   useEffect(() => {
     const data = fetchFarAwayAPI();
     setsuperHeroData(data);
   },
 );

    return <SuperHeroList superHeroData={superHeroData} />
}


//Presentational/Dumb/View Components

const SuperHeroList = ({ superHeroData }) => {
  return (
    <div className="text-center">
    <h1> Container Component </h1>
      <h2 className="py-4">Super Hero List 1</h2>
      <table className="table px-2 table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">super power</th>
          </tr>
        </thead>
        <tbody>
          {
            _(superHeroData).map(item => {
              return (
                <SuperHeroRow key={item.id} row={item} />
              )
            }).value()
          }
        </tbody>
      </table>
    </div>
  )
}

const SuperHeroRow = ({ row }) => {
  const { id, name, superPower } = row;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{superPower}</td>
    </tr>
  );
}