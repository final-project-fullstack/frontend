import React, { useContext } from 'react'
import userContext from '../context/userContext';

export default function GesinnungUndSprachen() {
  const { sprachen, gesinnung } = useContext(userContext);
console.log(gesinnung)
  return (
    <div className='gesinnungenSprachen'>
      
       <div className='sprache'>
        <h3>Standardsprachen</h3>
        <table>
          <thead>
<tr><th>Sprache</th><th>Typische Völker</th><th>Schrift</th></tr>
          </thead>
          <tbody>
        {sprachen[0].Standardsprachen.map((info, i) =>{
          return(<tr><td>{info.Sprache}</td><td>{info["Typische Voelker"]}</td><td>{info.Schrift}</td></tr>)
        })}
        </tbody>
      </table>
      <h3>Exotische Sprachen</h3>
        <table>
          <thead>
<tr><th>Sprache</th><th>Typische Völker</th><th>Schrift</th></tr>
          </thead>
          <tbody>
        {sprachen[1]["Exotische Sprachen"].map((info, i) =>{
          return(<tr><td>{info.Sprache}</td><td>{info["Typische Voelker"]}</td><td>{info.Schrift}</td></tr>)
        })}
        </tbody>
      </table>
      </div>
    </div>
  )
}
