function centuryFromYear(num) {

    let century = Math.floor(num / 100);
    if (century * 100 === num) {
        return century;
    }
    return century + 1;
}
