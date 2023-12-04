document.addEventListener('DOMContentLoaded', () => {
    const charactersRow = document.getElementById('charactersRow');
  
    const fetchCharacters = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
  
        charactersRow.innerHTML = '';
  
        data.forEach(character => {
          const card = `
            <div class="col-md-3 mb-4">
              <div class="card">
                <img src="images/${character.image}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${character.name}</h5>
                  <p class="card-text">Elemento: ${character.element}</p>
                </div>
              </div>
            </div>
          `;
          charactersRow.innerHTML += card;
        });
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
  

    fetchCharacters();

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', function() {
        cards.forEach(c => c.classList.remove('card-selected'));
        this.classList.add('card-selected');
      });
    });
  });
  