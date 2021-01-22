// Problem-01: kilometerToMeter();
function kilometerToMeter(kilometer) {
  if (0 >= kilometer) {
    return `Hey! are you sure? the distance can be negative? `;
  } else {
    var meter = 1000 * kilometer;
    return meter;
  }
}
// console.log(kilometerToMeter(3));
// console.log(kilometerToMeter(-13));

// Problem-02: budgetCalculator();
function budgetCalculator(watch, phone, laptop) {
  if (0 >= watch || 0 >= phone || 0 >= laptop) {
    return `Hey! you must avoid negative inputs.`;
  } else {
    var costOfWatch = watch * 50;
    var costOfPhone = phone * 100;
    var costOfLaptop = laptop * 500;
    var totalCost = costOfWatch + costOfPhone + costOfLaptop;
    return totalCost;
  }
}
// console.log(budgetCalculator(3, 1, 1));
// console.log(budgetCalculator(3, -1, 1));

// Problem-03: hotelCost
function hotelCost(day) {
  if (0 >= day) {
    return "Your input value is not correct";
  } else {
    var totalCost = 0;
    if (10 >= day) {
      totalCost = day * 100;
    } else if (20 >= day) {
      var regularPackage = 10 * 100;
      var activeDiscountDays = day - 10;
      var discountPackageOne = activeDiscountDays * 80;
      totalCost = regularPackage + discountPackageOne;
    } else {
      var regularPackage = 10 * 100;
      var discountPackageOne = 10 * 80;
      var activeDiscountDays = day - 20;
      var discountPackageTwo = activeDiscountDays * 50;
      totalCost = regularPackage + discountPackageOne + discountPackageTwo;
    }
    return totalCost;
  }
}
// console.log(hotelCost(25));
// console.log(hotelCost(-22));

// Problem-04: megaFriend();
function megaFriend(friendList) {
  var maxCharOfWord = [""];
  for (var i = 0; i < friendList.length; i++) {
    if (typeof friendList[i] != "string") {
      return `This is a number, not a name`;
    } else {
      if (friendList[i].length > maxCharOfWord[0].length) {
        maxCharOfWord.splice(0, maxCharOfWord.length);
        maxCharOfWord.push(friendList[i]);
      } else if (friendList[i].length == maxCharOfWord[0].length) {
        maxCharOfWord.push(friendList[i]);
      }
    }
  }
  return maxCharOfWord;
}
// var frnds = ["Abbasr", "Kuddus", "Mofiz", "Kaderkkio", "harunk"];
// var frnds = [1, 2, 3, 4, 5];
// console.log(megaFriend(frnds));
