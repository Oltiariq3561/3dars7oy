import React, { useMemo, useState } from 'react';

const Filter = ({ numbers }) => {
  const [query, setQuery] = useState('');

  const filteredNumbers = useMemo(() => {
    console.log('Filtrlanmoqda...');
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Qidirish..."
      />
      <ul>
        {filteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
