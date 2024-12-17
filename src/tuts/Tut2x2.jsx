import { NavLink } from "react-router-dom";

const Tut2x2 = () => {
  return ( 
    <div className="w-1/2 mx-auto text-center pb-48 z-1 text-white">
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">How to solve a 2x2!</div>
      <div className="mx-auto text-xl text-white">We dont need any specific algorithms to learn the basic method. All you need is to learn this 4 move sequence known as the <span className="font-bold">Sexy Move</span></div>
      <div className="flex justify-center my-8 border border-orange-400">
        <div>
          <img className="w-28" src="/Images/2x2tut/2x2sexy1.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">Start state - R</div>
        </div>
        <div>
          <img className="w-28" src="/Images/2x2tut/2x2sexy2.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">U</div>
        </div>
        <div>
          <img className="w-28" src="/Images/2x2tut/2x2sexy3.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">R'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/2x2tut/2x2sexy4.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">U'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/2x2tut/2x2sexy5.png" alt="Visual representation of the final state of the cube" />
          <div className="font-bold">Final state</div>
        </div>
      </div>
      <div className="mx-auto text-xl text-white">The exact reverse of this sequence of moves is called the <span className="font-bold">Unsexy move</span></div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 1 - White Layer</div>
      <div className="flex justify-center my-4">
        <img className="w-28" src="/Images/2x2tut/2x2grey.png" alt="2x2 with all colours grey" />
        <img className="w-12 h-8 my-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        <img className="w-28 rotate-180" src="/Images/2x2tut/2x2WhiteLayer.png" alt="2x2 with white layer solved but all others grey" />
      </div>
      <div className="mx-auto text-xl text-white">Find any white piece and hold the cube so that the white faces down. This solves the first piece as shown:</div>
      <img className="w-28 rotate-180 mx-auto my-4" src="/Images/2x2tut/piece1.png" alt="grey cube with 1 corner piece facing down" />
      <div className="mx-auto text-xl text-white">There are 3 remaining white pieces for the first layer. Each piece will go to a specific place based on their other2 neighbouring colours on the piece.</div>
      <img className="w-28 rotate-180 mx-auto my-4" src="/Images/2x2tut/remainingSpots.png" alt="Arrows pointing at remaining spots of white layer" />
      <div className="border border-red-500 my-6">
        <div className="mx-auto text-xl text-white font-bold">Note: The colours on a cube have a specific orientation. Right now the orientation is not important, just memorize the opposite colour pairs.</div>
        <div className="mx-auto flex justify-center text-xl text-white">
          <ul className="text-left list-disc">
            <li><span className="text-orange-600">Orange</span> - <span className="text-red-600">Red</span></li>
            <li><span className="text-blue-700">Blue</span> - <span className="text-green-500">Green</span></li>
            <li><span className="text-white">White</span> - <span className="text-yellow-400">Yellow</span></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto text-xl text-white">Now we will solve the cube using only the Sexy and Unsexy moves</div>
      <div className="mx-auto text-xl text-white">With the solved white piece always on the bottom, find another white piece in the top layer. Examples:</div>
      <div className="flex justify-center my-4 border border-orange-400">
        <img className="w-28" src="/Images/2x2tut/secondPiece-ex1.png" alt="case 1 of second piece orientation" />
        <img className="w-28" src="/Images/2x2tut/secondPiece-ex2.png" alt="case 2 of second piece orientation" />
        <img className="w-28" src="/Images/2x2tut/secondPiece-ex3.png" alt="case 3 of second piece orientation" />
      </div>
      <div className="mx-auto text-xl text-white">Example on how to identify correct location of piece.</div>
      <div className="flex justify-center my-4 border border-orange-400">
        <div>
          <img className="w-28" src="/Images/2x2tut/secondPiece-ex1.png" alt="case 1 of second piece orientation" />
          <div className="w-28">New piece</div>
        </div>
        <div>
          <img className="w-28 rotate-180" src="/Images/2x2tut/piece1.png" alt="representation of first solved piece" />
          <div className="w-28">Solved piece</div>
        </div>
        <div className="my-auto mx-2">
          <div className="font-semibold">No shared Colours</div>
          <img className="h-8 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <div>
          <img className="w-28 rotate-180" src="/Images/2x2tut/ex1Spot.png" alt="Arrow pointing where second piece will go relative to first solved piece" />
          <div className="w-28">New piece belongs here</div>
        </div>
      </div>
      <div className="flex justify-center my-4 border border-orange-400">
        <div>
          <img className="w-28" src="/Images/2x2tut/secondPiece-ex2.png" alt="case 2 of second piece orientation" />
          <div className="w-28">New piece</div>
        </div>
        <div>
          <img className="w-28 rotate-180" src="/Images/2x2tut/piece1.png" alt="representation of first solved piece" />
          <div className="w-28">Solved piece</div>
        </div>
        <div className="my-auto mx-2">
          <div className="font-semibold">Red shared</div>
          <img className="h-8 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <div>
          <img className="w-28 rotate-180" src="/Images/2x2tut/ex2Spot.png" alt="Arrow pointing where second piece will go relative to first solved piece" />
          <div className="w-28">New piece belongs here</div>
        </div>
      </div>
      <div className="flex justify-center my-4 border border-orange-400">
        <div>
          <img className="w-28" src="/Images/2x2tut/secondPiece-ex3.png" alt="case 3 of second piece orientation" />
          <div className="w-28">New piece</div>
        </div>
        <div>
          <img className="w-28 rotate-180" src="/Images/2x2tut/piece1.png" alt="representation of first solved piece" />
          <div className="w-28">Solved piece</div>
        </div>
        <div className="my-auto mx-2">
          <div className="font-semibold">Blue shared</div>
          <img className="h-8 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <div>
          <img className="w-28 rotate-180" src="/Images/2x2tut/ex3Spot.png" alt="Arrow pointing where second piece will go relative to first solved piece" />
          <div className="w-28">New piece belongs here</div>
        </div>
      </div>
      <div className="mx-auto text-xl text-white">Rotate the top layer so that the unsolved white piece is directly above the spot it needs to go in. Example:</div>
      <img className="w-28 mx-auto" src="/Images/2x2tut/secondPiecePos1.png" alt="Example of how to place second piece." />
      <div className="mx-auto text-xl text-white">There are 3 possible cases for inserting. The case and solution is shown in below table, start performing all moves by keeping the unsolved piece on top right facing towards you</div>
      <div className="mt-4">
        <div className="flex border border-orange-500">
          <img className="w-28 border-r border-orange-500" src="/Images/2x2tut/secondPiecePos1.png" alt="Case 1 of inserting second piece" />
          <div className="m-auto font-semibold text-white text-xl">3 sexy moves OR 3 unsexy moves</div>
        </div>
      </div>
      <div>
        <div className="flex border border-orange-500">
          <img className="w-28 border-r border-orange-500" src="/Images/2x2tut/secondPiecePos2.png" alt="Case 2 of inserting second piece" />
          <div className="m-auto font-semibold text-white text-xl">2 sexy moves OR 4 unsexy moves</div>
        </div>
      </div>
      <div>
        <div className="flex border border-orange-500">
          <img className="w-28 border-r border-orange-500" src="/Images/2x2tut/secondPiecePos3.png" alt="Case 3 of inserting second piece" />
          <div className="m-auto font-semibold text-white text-xl">4 sexy moves OR 2 unsexy moves</div>
        </div>
      </div>
      <div className="mx-auto text-xl text-white font-bold border-2 border-red-500 my-4 p-2">Note: If no other white piece is present on top layer and white layer is not solved, insert a random yellow piece in place of an wrongly placed white layer piece and use the extracted piece to solve.</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 2 - Positioning the top layer</div>
      <div className="mx-auto text-xl text-white">A piece is in correct postion if the other 2 colours are same as that of the bottom layer piece. Example of piece in correct position:</div>
      <div className="flex justify-evenly my-8 border border-orange-400">
        <img className="w-28" src="/Images/2x2tut/topPiece-ex1.png" alt="case 1 of top piece orientation" />
        <img className="w-28" src="/Images/2x2tut/topPiece-ex2.png" alt="case 2 of top piece orientation" />
        <img className="w-28" src="/Images/2x2tut/topPiece-ex3.png" alt="case 3 of top piece orientation" />
      </div>
      <div className="mx-auto text-xl text-white">Now turn the top layer so that only one piece is in correct position then repeat the shown moves until all corners are correctly positioned</div>
      <div className="mx-auto text-xl my-4 text-white">If all 4 are in correct position after rotating top layer, Congratulations!! You can skip this step for now, although this might not always be the case</div>
      <div className="mx-auto text-xl text-white">If at all times there are 0 or 2 correctly positioned corners in top layer, perform the given moves below and start this step again.</div>

      <div className="mx-auto text-xl text-white mt-8">Moves to correctly position the corners</div>
      <div className="mx-auto text-xl text-white">(For 1 corner correctly positioned, keep that piece on the right facing you)</div>
      <div className="flex justify-evenly my-8 border border-orange-400">
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos1.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">Start state - U</div>
        </div>
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos2.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">R</div>
        </div>
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos3.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">U'</div>
        </div>
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos4.png" alt="Visual representation of cube with L' move" />
          <div className="font-bold">L'</div>
        </div>
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos5.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">U</div>
        </div>
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos6.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">R'</div>
        </div>
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos7.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">U'</div>
        </div>
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos8.png" alt="Visual representation of cube with L move" />
          <div className="font-bold">L</div>
        </div>
        <div>
          <img className="w-24" src="/Images/2x2tut/topLayerPos9.png" alt="Visual representation of the final state of cube" />
          <div className="font-bold">Final State</div>
        </div>
      </div>
      <div>
        <ul className="text-white text-left list-disc text-xl">
          <li>For 1 corner positioned correctly this will position all correctly, if not then perform the sequence of moves again</li>
          <li>For 2 corners diagonally placed, this will give a case where only 1 corner can be positioned correctly, now repeat this step for 1 corner</li>
        </ul>
      </div>
      <div className="text-xl text-white text-left font-semibold my-4">Hint to memorize: Turn the top layer with your right hand to the left using the finger trick then turn the right side up, then turn the top layer with your left hand to the right and turn the left side up. Repeat but turn down the sides instead of up.</div>

      <div className="text-xl text-white text-center">Now all the pieces in the top layer i.e. yellow layer should be in their correct positions. If not repeat this step carefully again.</div>

      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 3 - Solving the cube</div>
      <div className="text-xl text-white text-center">Turn the cube upside down so that the unsolved pieces are on the bottom</div>
      <div className="text-xl text-white text-center">Now for each unsolved corner perform a couple of sexy or unsexy moves to solve the corner, Example of the two cases (look at the yellow-blue-red corner):</div>
      <div className="flex justify-evenly my-8 border border-orange-400">
        <div>
          <img className="w-24 rotate-180" src="/Images/2x2tut/finalCorners1.png" alt="case 1 of last layer corner orientation" />
          <div className="font-bold">2 Sexy moves</div>
        </div>
        <div>
          <img className="w-24 rotate-180" src="/Images/2x2tut/finalCorners2.png" alt="case 2 of last layer corner orientation" />
          <div className="font-bold">2 Unsexy moves</div>
        </div>
      </div>
      <div className="text-xl text-white text-center">This solves the bottom right corner facing you. After 1 corner is solved, bring the other solved corners to the bottom right one by one by rotating the bottom layer</div>
      <div className="text-xl text-white text-center">After all corners are solved, the cube will be solved</div>
      <div className="text-xl text-white text-center my-4">Congratulations!! Now with practice you can solve a 2x2 under a minute</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Next Steps</div>
      <div className="text-white text-xl text-center">Congratulations again!! Now you can try learning <NavLink to="/2x2-advanced" className="text-blue-600 underline">advanced 2x2 methods</NavLink> to improve at speed solving</div>
    </div>
  );
}
 
export default Tut2x2;