let game = () => {

  attackEventListener('2', playerOne)
 
 let counter = 0
 let stopPlaying = false
 while (stopPlaying == false) {
 
   console.log(counter)
   
   let attackP1 = playerOne.computerAttack()
   let receiveP2 = playerTwoBoard.receiveAttack(attackP1)
   let renderP1Hits = renderHits("player2", playerTwoBoard)
   let renderP1Misses = renderMisses("player2", playerTwoBoard)
   let sunkP2 = playerTwoBoard.checkSunk("Player 1")
   if (sunkP2 == true) {
     stopPlaying = true
     return
 }
   let attackP2 = playerTwo.computerAttack()
   let receiveP1 = playerOneBoard.receiveAttack(attackP2)
   let renderP2Hits = renderHits("player1", playerOneBoard)
   let renderP2Misses = renderMisses("player1", playerOneBoard)
   let sunkP1 = playerOneBoard.checkSunk("Player 2")
   if (sunkP1 == true) {
     stopPlaying = true
     return
 }

   counter += 1
 }
 
}


