import {
  handleFilterByName,
  handleFilterByPopulation,
  handleSortByName,
  handleLimitData,
} from './heplers';

const testData = [
  { name: { common: 'Canada' }, population: 38000000 },
  { name: { common: 'United States' }, population: 327000000 },
  { name: { common: 'Germany' }, population: 83000000 },
  { name: { common: 'France' }, population: 67000000 },
];

describe('handleFilterByName', () => {
  it('should filter data by name', () => {
    const data = [
      { name: { common: 'Country 1' } },
      { name: { common: 'Country 12' } },
      { name: { common: 'Another Country' } },
    ];

    // Test filtering with a matching name
    const filteredData = handleFilterByName(data, '1');
    expect(filteredData).toHaveLength(2);
    expect(filteredData[0].name.common).toBe('Country 1');
    expect(filteredData[1].name.common).toBe('Country 12');

    // Test filtering with a non-matching name
    const nonMatchingData = handleFilterByName(data, 'xyz');
    expect(nonMatchingData).toHaveLength(0);

    // Test filtering with an empty name
    const emptyNameData = handleFilterByName(data, '');
    expect(emptyNameData).toHaveLength(3);
  });
});

describe('handleFilterByPopulation', () => {
  it('should filter data by population', () => {
    const data = [
      { population: 1000000 },
      { population: 5000000 },
      { population: 20000000 },
    ];

    // Test filtering with a matching population
    const filteredData = handleFilterByPopulation(data, 20);
    expect(filteredData).toHaveLength(2);
    expect(filteredData[0].population).toBe(1000000);
    expect(filteredData[1].population).toBe(5000000);

    // Test filtering with a non-matching population
    const nonMatchingData = handleFilterByPopulation(data, 5);
    expect(nonMatchingData).toHaveLength(1);
    expect(nonMatchingData[0].population).toBe(1000000);

    // Test filtering with an empty population
    const emptyPopulationData = handleFilterByPopulation(data, '');
    expect(emptyPopulationData).toHaveLength(3);
  });
});

describe('handleSortByName', () => {
  it('should sort data by name', () => {
    const data = [
      { name: { common: 'B Country' } },
      { name: { common: 'A Country' } },
      { name: { common: 'C Country' } },
    ];

    // Test sorting in ascending order
    const sortedAscData = handleSortByName(data.slice(), 'asc');
    expect(sortedAscData[0].name.common).toBe('A Country');
    expect(sortedAscData[1].name.common).toBe('B Country');
    expect(sortedAscData[2].name.common).toBe('C Country');

    // Test sorting in descending order
    const sortedDescData = handleSortByName(data.slice(), 'desc');
    expect(sortedDescData[0].name.common).toBe('C Country');
    expect(sortedDescData[1].name.common).toBe('B Country');
    expect(sortedDescData[2].name.common).toBe('A Country');

    // Test sorting with an invalid sort type (default behavior)
    const invalidSortTypeData = handleSortByName(data.slice(), 'invalid');
    expect(invalidSortTypeData).toEqual(data);
  });
});

describe('handleLimitData', () => {
  it('should limit data', () => {
    const data = [
      { name: { common: 'Country 1' } },
      { name: { common: 'Country 2' } },
      { name: { common: 'Country 3' } },
    ];

    // Test limiting with a valid limit
    const limitedData = handleLimitData(data, 2);
    expect(limitedData).toHaveLength(2);
    expect(limitedData[0].name.common).toBe('Country 1');
    expect(limitedData[1].name.common).toBe('Country 2');

    // Test limiting with an invalid limit (should return the original data)
    const invalidLimitData = handleLimitData(data, 'invalid');
    expect(invalidLimitData).toEqual(data);

    // Test limiting with a limit greater than the data length (should return the original data)
    const largeLimitData = handleLimitData(data, 10);
    expect(largeLimitData).toEqual(data);

    // Test limiting with a negative limit (should return an empty array)
    const negativeLimitData = handleLimitData(data, -5);
    expect(negativeLimitData).toHaveLength(0);
  });
});