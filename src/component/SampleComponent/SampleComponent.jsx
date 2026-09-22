export const SampleComponent = () => {
  const pets = [
    {
      id: 1,
      name: "Fluffy",
      type: "Cat",
      age: 3,
      isVaccinated: true,
    },
    {
      id: 2,
      name: "Rover",
      type: "Dog",
      age: 5,
      isVaccinated: false,
    },
  ];

  return (
    <div>
      <h1>These are my pets</h1>
      {pets.map((pet, index) => {
        return (
          <div key={"pet-" + index} id={"pet-" + index}>
            <li>{pet.id}</li>
            <li>{pet.name}</li>
            <li>{pet.type}</li>
            <li>{pet.age}</li>
            <li>{pet.isVaccinated}</li>
          </div>
        );
      })}
    </div>
  );
};
