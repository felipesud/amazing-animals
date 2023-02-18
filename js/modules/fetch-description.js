fetch('/animaisapi.json')
  .then(response => response.json())
  .then(data => {
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