document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('searchButton')
  const result = document.getElementById('result')
  const searchInput = document.getElementById('searchInput')

  const searchSuperheroes = async () => {
    const searchText = searchInput.value.trim()
    const params = new URLSearchParams({ query: searchText })

    const response = await fetchData(params)
    result.innerHTML = response
  }

  searchButton.addEventListener('click', searchSuperheroes)

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchSuperheroes()
    }
  })
})

async function fetchData(params) {
  try {
    const response = await fetch(
      `http://localhost/info2180-lab4/superheroes.php?${params.toString()}`,
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
