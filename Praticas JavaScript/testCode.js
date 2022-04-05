function canExecuteFastAttack(knightIsAwake) {
    if(!knightIsAwake) return true;
    else return false;
};

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if(knightIsAwake || archerIsAwake || prisonerIsAwake) return true;
    return false
};

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if(archerIsAwake===false && prisonerIsAwake===true) return true;
    return false
};

function canFreePrisoner(knightIsAwake,archerIsAwake,prisonerIsAwake,petDogIsPresent) {
    if(archerIsAwake===false && petDogIsPresent===true) return true;
    if (knightIsAwake===false && archerIsAwake===false && prisonerIsAwake===true) return true;
    return false
  }

  const archerIsAwake = true;
  const knightIsAwake = false;
  const prisonerIsAwake = false;
  const petDogIsPresent = true;
  console.log(canExecuteFastAttack(knightIsAwake));
  console.log(canSpy(knightIsAwake,archerIsAwake,prisonerIsAwake));
  console.log(canSignalPrisoner(archerIsAwake,prisonerIsAwake));
  console.log(canFreePrisoner(knightIsAwake,archerIsAwake,prisonerIsAwake,petDogIsPresent))