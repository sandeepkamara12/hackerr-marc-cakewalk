function marcsCakewalk(calorie) {
    // Write your code here
    let miles = 0;
    calorie.sort((a, b) => {
        return (b - a);
    })
    calorie.map((item, index) => {
        miles += 2 ** index * item;
    });
    return miles;
}
marcsCakewalk([7, 4, 9, 6])