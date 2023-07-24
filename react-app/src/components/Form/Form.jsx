import React, { useState } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';

const Form = () => {
  const [state, setState] = useState({
    name: '',
    population: '',
    sort: '',
    page: ''
  });

  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleFilterByName = (data, name) => {
    return name !== '' ? data.filter(country => country.name.common.toLowerCase().includes(state.name.toLowerCase())) : data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => handleFilterByName(response.data, name))
      .then(response => {
        let result = response.data;
        if(state.population !== '') {
          result = result.filter(country => country.population > Number(state.population));
        }
        if(state.sort !== '') {
          result = result.sort((a,b) => {
            if(state.sort === 'ascend') {
              return a.population - b.population;
            } else {
              return b.population - a.population;
            }
          });
        }
        if(state.page !== '') {
          result = result.slice((Number(state.page)-1)*10, Number(state.page)*10);
        }
        setCountries(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={state.name} onChange={handleChange} />
        </label>
        <label>
          Population:
          <input type="number" name="population" value={state.population} onChange={handleChange} />
        </label>
        <label>
          Sort:
          <select name="sort" value={state.sort} onChange={handleChange}>
            <option value="ascend">Ascend</option>
            <option value="descend">Descend</option>
          </select>
        </label>
        <label>
          Page:
          <input type="number" name="page" value={state.page} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <CountryList countries={countries} />
    </div>
  );
}

export default Form;
