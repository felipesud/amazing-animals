console.log('Fetching animals data...');
fetch('/amazing-animals/animaisapi.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // log the data to make sure it's being loaded correctly
    data.forEach(animal => {
      const section = document.getElementById(animal.specie.toLowerCase());
      const heading = document.createElement('h2');
      heading.textContent = animal.specie;
      section.appendChild(heading);
      const description = document.createElement('p');
      description.textContent = animal.description;
      section.appendChild(description);
    });
  });