class Lava extends LivingCreatures{
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCordinates();
        return super.chooseCell(char);
    }

    eat() {
        let one = this.chooseCell(1)
        let two = this.chooseCell(2)
        let three = this.chooseCell(3)
        let five = this.chooseCell(5)
        let nul = this.chooseCell(0)

        let all = [one, two, three, five, nul]

        for (let i = 0; i < all.length; i++) {
            for (let o = 0; o < all[i].length; o++) {
                let item = all[i][o]

                let x = item[0]
                let y = item[1]

                matrix[y][x] = 4

                for (let i = 0; i < grassArr.length; i++) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1)
                    }
                    else {
                        for (let i = 0; i < grassEaterArr.length; i++) {
                            if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                                grassEaterArr.splice(i, 1)
                            }
                            else {
                                for (let i = 0; i < predatorArr.length; i++) {
                                    if (predatorArr[i].x == x && predatorArr[i].y == y) {
                                        predatorArr.splice(i, 1)
                                    }
                                }
                            }
                        }
                    }
                }

                this.die()

            }
        }
    }

    die() {
        for (let i = 0; i < lavaArr.length; i++) {
            if (lavaArr[i].x == this.x && lavaArr[i].y == this.y) {
                lavaArr.splice(i, 1)
                matrix[this.y][this.x] = 0
            }
        }
    }
}