import React, { useState } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    population: '',
    sort: '',
    page: ''
  });

  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  const handleFilterByName = (data, name) => {
    return name !== '' ? data.filter(country => country.name.common.toLowerCase().includes(state.name.toLowerCase())) : data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => handleFilterByName(response.data, formData.name))
      .then(response => {
        let result = response.data;
        if(formData.population !== '') {
          result = result.filter(country => country.population > Number(formData.population));
        }
        if(formData.sort !== '') {
          result = result.sort((a,b) => {
            if(formData.sort === 'ascend') {
              return a.population - b.population;
            } else {
              return b.population - a.population;
            }
          });
        }
        if(formData.page !== '') {
          result = result.slice((Number(formData.page)-1)*10, Number(formData.page)*10);
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
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Population:
          <input type="number" name="population" value={formData.population} onChange={handleChange} />
        </label>
        <label>
          Sort:
          <select name="sort" value={formData.sort} onChange={handleChange}>
            <option value="ascend">Ascend</option>
            <option value="descend">Descend</option>
          </select>
        </label>
        <label>
          Page:
          <input type="number" name="page" value={formData.page} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <CountryList countries={countries} />
    </div>
  );
}

export default Form;
