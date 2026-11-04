document.addEventListener('DOMContentLoaded', function () {
  const search = document.getElementById('search')

  search.addEventListener('click', async () => {
    console.log('search clicked')
    const response = await fetchData()
    alert(response)
  })
})

async function fetchData() {
  try {
    const response = await fetch(
      'http://localhost/info2180-lab4/superheroes.php',
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.text()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
