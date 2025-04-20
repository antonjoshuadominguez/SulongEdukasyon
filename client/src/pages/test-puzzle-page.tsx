import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, Clock } from "lucide-react";
import MainLayout from "@/layouts/main-layout";

// Import image directly
import marcosImage from "@assets/ferdinand marcos.jpg"; 

interface PuzzlePieceProps {
  value: number;
  onClick: () => void;
  isBlank: boolean;
  isMovable: boolean;
}

function PuzzlePiece({ value, onClick, isBlank, isMovable }: PuzzlePieceProps) {
  // Calculate which part of the image to show
  const row = Math.floor(value / 3);
  const col = value % 3;
  
  return (
    <div 
      onClick={isMovable ? onClick : undefined}
      className={`w-full h-full border border-gray-200 ${isMovable ? 'cursor-pointer hover:opacity-80' : ''} ${isBlank ? 'opacity-0' : ''}`}
      style={{
        backgroundImage: isBlank ? 'none' : `url(${marcosImage})`,
        backgroundSize: '300% 300%',
        backgroundPosition: `${col * 50}% ${row * 50}%`,
        transition: 'all 0.2s ease',
      }}
    />
  );
}

export default function TestPuzzlePage() {
  // Create a 3x3 grid of tiles
  const [tiles, setTiles] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [blankTileIndex, setBlankTileIndex] = useState(8); // Bottom right corner
  const [moves, setMoves] = useState(0);
  
  // Initialize the puzzle
  useEffect(() => {
    shufflePuzzle();
  }, []);
  
  // Determine which moves are valid for the blank tile
  const getValidMoves = (blankIndex: number): number[] => {
    const validMoves: number[] = [];
    
    // Check above (if not in top row)
    if (blankIndex >= 3) {
      validMoves.push(blankIndex - 3);
    }
    
    // Check below (if not in bottom row)
    if (blankIndex < 6) {
      validMoves.push(blankIndex + 3);
    }
    
    // Check left (if not in leftmost column)
    if (blankIndex % 3 !== 0) {
      validMoves.push(blankIndex - 1);
    }
    
    // Check right (if not in rightmost column)
    if (blankIndex % 3 !== 2) {
      validMoves.push(blankIndex + 1);
    }
    
    return validMoves;
  };
  
  // Handle tile click
  const handleTileClick = (index: number) => {
    // Get valid moves for the blank tile
    const validMoves = getValidMoves(blankTileIndex);
    
    // Check if the clicked tile is adjacent to the blank tile
    if (validMoves.includes(index)) {
      // Move the tile by swapping with blank tile
      const newTiles = [...tiles];
      [newTiles[index], newTiles[blankTileIndex]] = [newTiles[blankTileIndex], newTiles[index]];
      
      // Update state
      setTiles(newTiles);
      setBlankTileIndex(index);
      setMoves(moves + 1);
    }
  };
  
  // Check if a tile can be moved
  const isTileMovable = (index: number): boolean => {
    const validMoves = getValidMoves(blankTileIndex);
    return validMoves.includes(index);
  };
  
  // Shuffle the puzzle pieces - create a solvable sliding puzzle
  const shufflePuzzle = () => {
    let newTiles = Array.from({ length: 9 }, (_, i) => i);
    let newBlankIndex = 8; // Start with blank at bottom right
    
    // Make 100 random valid moves to shuffle the puzzle
    // This ensures the puzzle is always solvable
    for (let i = 0; i < 100; i++) {
      const validMoves = getValidMoves(newBlankIndex);
      if (validMoves.length > 0) {
        const randomIndex = Math.floor(Math.random() * validMoves.length);
        const moveToIndex = validMoves[randomIndex];
        
        // Swap the blank tile with a valid adjacent tile
        [newTiles[newBlankIndex], newTiles[moveToIndex]] = 
          [newTiles[moveToIndex], newTiles[newBlankIndex]];
        
        newBlankIndex = moveToIndex;
      }
    }
    
    setTiles(newTiles);
    setBlankTileIndex(newBlankIndex);
    setMoves(0);
  };
  
  // Check if puzzle is solved
  const isSolved = tiles.every((tile, index) => {
    // The blank tile can be anywhere for a win condition in a sliding puzzle
    if (tile === 8) return true;
    // For all other tiles, they must be in their correct position
    return tile === index;
  });
  
  return (
    <MainLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Picture Puzzle Test</h1>
        
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span>Moves: {moves}</span>
              </div>
              
              <Button 
                variant="outline"
                size="sm"
                onClick={shufflePuzzle}
              >
                Shuffle
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-1 bg-gray-100 p-2 rounded aspect-square">
              {Array.from({ length: 9 }, (_, index) => (
                <div key={index} className="aspect-square">
                  <PuzzlePiece
                    value={tiles[index]}
                    onClick={() => handleTileClick(index)}
                    isBlank={tiles[index] === 8}
                    isMovable={isTileMovable(index)}
                  />
                </div>
              ))}
            </div>
            
            {isSolved && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded">
                <p className="font-bold">Puzzle Solved!</p>
                <p>You've completed the puzzle in {moves} moves.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}