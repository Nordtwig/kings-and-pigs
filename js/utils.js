Array.prototype.parse2d = function() {
    const rows = [];
    for (let i = 0; i < this.length; i+=32) {
        rows.push(this.slice(i, i + 32))
    }

    return rows;
}

Array.prototype.createObjectsFrom2d = function () {
    const objects = [];
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol===101) {
                objects.push(new CollisionBlock({
                    position: {
                        x: x * 32,
                        y: y * 32
                    }
                }));
            }
        })
    });

    return objects;
}