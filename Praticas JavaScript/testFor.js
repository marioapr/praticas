function totalBirdCount(birdsPerDay) {
 
    for (let i = 0; i <= birdsPerDay.length; i++){
        let num = birdsPerDay[i]
        let total = 0;
        total=+num;
        console.log(total)
    }
  }
 const birdsPerDay = [9, 0, 8, 4, 5, 1, 3]
  console.log(totalBirdCount(birdsPerDay))