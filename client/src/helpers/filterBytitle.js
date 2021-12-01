
export const filterBytitle = (id, setBook) => {
  return fetch('http://localhost:3003/reviews', {
    method: 'GET',
    headers: {
      'x-token': JSON.parse(localStorage.getItem('user')).accessToken
    }
  })
    .then(response => response.json())
    .then(data => setBook(data.find(book => book.id === Number(id))))
}
