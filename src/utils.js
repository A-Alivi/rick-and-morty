// Fetch Character Data Given its id
export async function fetchData(id) {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      console.log('JSON: ', json);
      return {
        data: json,
        error: json?.error,
      };
    } catch (err) {
      console.log('Error: ', err);
      return { error: err.message };
    }
  }
  
  // generates a random id between 1 and 826
  export function generateRandomId() {
    // There are total 826 characters
    const id = Math.floor(Math.random() * 826) + 1;
    return id;
  }
  