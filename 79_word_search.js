//Given a 2D board and a word, find if the word exists in the grid.

//The word can be constructed from letters of sequentially adjacent cell, 
//where "adjacent" cells are those horizontally or vertically neighboring. 
//The same letter cell may not be used more than once.

var board =[
['A','B','C','E'],
['S','F','C','S'],
['A','D','E','E']
];
var word = 'AB';
var hash = {};
console.log(exist(board,word));

function exist(board, word) {    
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            if(dfs(board, word, 0, i, j)) {
                return true;
            }
        }
    }
    return false;
}
    
function dfs(board, word, w, i, j) {
    var key = i + ',' + j;
    
    if(w === word.length) {
        return true;
    }
    
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || hash[key] || word[w]!==board[i][j]) {
        return false;
    }
    
    hash[key] = true; //find the word
    
    return dfs(board, word, w + 1, i+1, j) || dfs(board, word, w + 1, i-1, j) || dfs(board, word, w + 1, i, j+1) || dfs(board, word, w + 1, i, j-1);
    
    hash[key] = false; //cannot find next
    
    return false;
}
    

