import React, { useState } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    population: '',
    sort: '',
    limit: ''
  });

  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  const handleFilterByName = (data, name) => {
    return name !== '' ? data.filter(country => country.name.common.toLowerCase().includes(formData.name.toLowerCase())) : data;
  }

  const handleFilterByPopulation = (data, population) => {
    return population !== '' ? data.filter(country => country.population < Number(formData.population * 1000000)) : data;
  }

  const handleSortByName = (data, sortType) => {
    // Check if sortType is "asc" or "desc"
    if (sortType === "asc") {
      return data.sort((a, b) => (a.name.common.toLowerCase() > b.name.common.toLowerCase()) ? 1 : -1);
    }

    if (sortType === "desc") {
      return data.sort((a, b) => (a.name.common.toLowerCase() < b.name.common.toLowerCase()) ? 1 : -1);
    }

    return data;
  }

  const handleLimitData = (data, limit) => {
    if (!isNaN(Number(limit))) {
      return data.slice(0, Number(limit));
    }

    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => handleFilterByName(response.data, formData.name))
      .then(data => handleFilterByPopulation(data, formData.population))
      .then(data => handleSortByName(data, formData.sort))
      .then(data => handleLimitData(data, formData.limit))
      .then(data => {
        setCountries(data);
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
          Population(m):
          <input type="number" name="population" value={formData.population} onChange={handleChange} />
        </label>
        <label>
          Sort:
          <select name="sort" value={formData.sort} onChange={handleChange}>
            <option value="asc">Ascend</option>
            <option value="desc">Descend</option>
          </select>
        </label>
        <label>
          Limit:
          <input type="number" name="limit" value={formData.limit} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <CountryList countries={countries} />
    </div>
  );
}

export default Form;
