function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("you walk the dog");
      } else {
        reject("you didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("you clean the kitchen");
      } else {
        reject("you didn't clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("you take out the trash");
      } else {
        reject("you didn't take out the trash");
      }
    }, 500);
  });
}

async function doChores() {
  const walkDogRes = await walkDog();
  console.log(walkDogRes);

  const cleanKitchenRes = await cleanKitchen();
  console.log(cleanKitchenRes);

  const takeOutTrashRes = await takeOutTrash();
  console.log(cleanKitchenRes);

  console.log("You Finished all the chores");
}

doChores();
