export default class Design {
    constructor(root) {
        this.root = root;

        /*
        boardPieces = ``;

        for (let i = 0; i < 100) {
            let num = i.toString();
            boardPieces += `div class="board__tile" data-index="${num}"></div>`
            
        }
        */

        this.root.innerHTML = `
            <div class = "header">

                <div class = "header__gameName">
                    Battleships
                </div>

                <div class = "header__turn">
                    Player 1's turn
                </div>

            </div>

            <div class="board">

                <div class="board__tile" data-index="0"></div>
                <div class="board__tile" data-index="1"></div>
                <div class="board__tile" data-index="2"></div>
                <div class="board__tile" data-index="3"></div>
                <div class="board__tile" data-index="4"></div>
                <div class="board__tile" data-index="5"></div>
                <div class="board__tile" data-index="6"></div>
                <div class="board__tile" data-index="7"></div>
                <div class="board__tile" data-index="8"></div>
                <div class="board__tile" data-index="9"></div>
            </div>
        `;

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".board__tile").forEach(tile => {
            tile.addEventListener("click", () => {
                if (this.onTileClick) {
                    this.onTileClick(tile.dataset.index);
                }
            });
        });
    }
}