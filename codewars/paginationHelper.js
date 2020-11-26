// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    let pages = this.pageCount();

    if (pageIndex + 1 > pages || pageIndex < 0) {
        return -1;
    }

    if (pageIndex + 1 === pages && pages % this.itemsPerPage !== 0) {
        let itemsLeft = (this.itemsPerPage * pages) - this.itemCount()
        console.log(this.itemsPerPage - itemsLeft);
        return this.itemsPerPage - itemsLeft;
    }

    return this.itemsPerPage;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (itemIndex >= this.itemCount() || itemIndex < 0) return -1;

    // tantos itemsPerPage hasta que sea mayor o igual que el itemIndex
    let pageIndex = 0;
    let previousItems = this.itemsPerPage;
    while (previousItems < itemIndex) {
        previousItems = previousItems + this.itemsPerPage;
        ++pageIndex;
    }

    return pageIndex;
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));
console.log(helper.pageItemCount(-10));
/*
helper.pageItemCount(0)
helper.pageItemCount(1)
helper.pageItemCount(2)*/