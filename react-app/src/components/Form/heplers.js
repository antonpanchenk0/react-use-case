export const handleFilterByName = (data, name) => {
  return name !== '' ? data.filter(country => country.name.common.toLowerCase().includes(name.toLowerCase())) : data;
}

export const handleFilterByPopulation = (data, population) => {
  return population !== '' ? data.filter(country => country.population < Number(population * 1000000)) : data;
}

export const handleSortByName = (data, sortType) => {
  // Check if sortType is "asc" or "desc"
  if (sortType === "asc") {
    return data.sort((a, b) => (a.name.common.toLowerCase() > b.name.common.toLowerCase()) ? 1 : -1);
  }

  if (sortType === "desc") {
    return data.sort((a, b) => (a.name.common.toLowerCase() < b.name.common.toLowerCase()) ? 1 : -1);
  }

  return data;
}

export const handleLimitData = (data, limit) => {
  if (!isNaN(Number(limit))) {
    return data.slice(0, Number(limit));
  }

  return data;
}
