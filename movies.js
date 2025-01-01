const chevronleft = document.getElementById('bi-chevron-left');

chevronleft.addEventListener('click', () => {
    if (document.referrer) {
        history.back();
    } else {
        window.location.href = 'index.html';
    }
});



let json_url = "movie.json";
  
fetch(json_url)
  .then(response => response.json())
  .then((data) => {
      // Filter the data to only include series
      let seriesData = data.filter((ele) => ele.type === "series");

      // Loop through the filtered series data and create cards
      seriesData.forEach((ele) => {
          let { name, sposter, url } = ele;
          let card = document.createElement('a');
          card.classList.add('card');
          card.href = url;
          card.innerHTML = `
              <img src="${sposter}" alt="${name}" class="poster">
          `;
          // Append the card to the container
          cards.appendChild(card);
      });
  })
  .catch(error => {
      console.log('Error fetching data:', error);
  });
