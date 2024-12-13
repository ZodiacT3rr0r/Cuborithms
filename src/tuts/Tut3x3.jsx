import { NavLink } from "react-router-dom";

const Tut3x3 = () => {
  return ( 
    <div className="w-1/2 mx-auto text-center pb-48">
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">How to solve a 3x3!</div>
      <div className="mx-auto text-xl text-white">We dont need to many algorithms to learn for the beginner's tutorial. If you know how to solve the 2x2, you will know how to solve some parts of the cube. Even if you dont know, this tutorial will teach you how to solve a 3x3.</div>
      <div className="mx-auto text-xl mt-4 text-white">For now you only need to learn what are the Sexy and Unsexy moves and learning the <NavLink to="/notations" className="text-blue-600 underline">Move Notations</NavLink> would be adviced but not necessary for the beginners tutorial</div>
      <div className="flex justify-center mt-8 border border-orange-400">
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy1.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">Start state - R</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy2.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">U</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy3.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">R'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy4.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">U'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy5.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Final state</div>
        </div>
      </div>
      <div className="text-xl text-white text-center font-bold">Right Sexy Move</div>
      <div className="flex justify-center mt-8 border border-orange-400">
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy1L.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">Start state - R</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy2L.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">U</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy3L.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">R'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy4L.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">U'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/3x3sexy5L.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Final state</div>
        </div>
      </div>
      <div className="text-xl text-white text-center font-bold">Left Sexy Move</div>

      <div className="text-xl text-white text-center font-semibold my-4">Left and Right Unsexy moves are the exact reverse of the sexy moves</div>
      <div className="text-xl text-white text-center my-4 border border-red-500 p-2">Note: If only a sexy or unsexy move is mentioned ahead in the tutorial, assume it to be right sexy/unsexy move</div>
      <div className="text-xl text-white text-center font-semibold">Practice these moves well before going forward</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 1 - White cross</div>
      <div className="flex justify-center my-4">
        <img className="w-28" src="/Images/3x3tut/centersOnly.png" alt="Cube with only centers coloured" />
        <img className="w-12 h-8 my-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        <img className="w-28" src="/Images/3x3tut/whiteCross.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-xl text-white text-center font-bold">Hold white center on top and find edges containing white in the bottom layer</div>
      <div className="text-xl text-white text-center font-bold my-4">Do the following moves depending on the orientation of bottom piece. There are 2 cases</div>
      <div className="text-xl my-1 text-center font-bold text-green-500">Case 1: White side of edge is facing down</div>
      <div className="flex justify-evenly border border-orange-400">
        <div>
          <img className="w-28 rotate-180" src="/Images/3x3tut/EdgeCase1-1.png" alt="cube with bottom layer showing moves to align" />
          <div className="font-bold">Start state: align</div>
        </div>
        <div>
          <img className="w-28 rotate-180" src="/Images/3x3tut/EdgeCase1-2.png" alt="Cube showing rotation of correct layer for the case" />
          <div className="font-bold">Rotate layer twice</div>
        </div>
        <div>
          <img className="w-28" src="/Images/3x3tut/EdgeCase1-3.png" alt="Cube showing solved edge piece" />
          <div className="font-bold">Final State</div>
        </div>
      </div>
      <div className="text-white mt-2 mb-8 text-center font-bold">Rotate the bottom layer until the other colour of edge matches side layer's center, then rotate that particular layer to align both colours of the edges to their respective layers</div>


      <div className="text-xl my-1 text-center font-bold text-green-500">Case 2: White side of edge is facing the side</div>
      <div className="flex justify-evenly border border-orange-400">
        <div>
          <img className="w-28 mx-auto rotate-180" src="/Images/3x3tut/EdgeCase2-1.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">Start state: align</div>
        </div>
        <div>
          <img className="w-28 mx-auto rotate-180" src="/Images/3x3tut/EdgeCase2-2.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">Rotate layer to side</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/EdgeCase2-3.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">Rotate the top layer</div>
        </div>
      </div>
      <div className="text-white mt-2 text-center font-bold">Top layer is rotated so that the spot where the white edge is supposed to go is on top of the white edge as shown</div>
      <div className="flex justify-evenly border border-orange-400">
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/EdgeCase2-4.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">Rotate side layer</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/EdgeCase2-5.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">Rotate layer back to alignment</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/EdgeCase2-6.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">Final State - Solved edge</div>
        </div>
      </div>
      <div className="text-white mt-2 mb-8 text-center font-bold">Rotate side layer so that the edge is in the top layer with white facing up. After alignment the edge should be in its solved spot as shown</div>

      <div className="text-xl my-1 text-center font-bold text-green-500">Other Cases:</div>
      <div className="text-white mt-2 mb-8 font-bold">
        <ul className="text-left list-disc">
          <li>For edges inverted in toplayer, rotate them to the bottom and solve as per case 2</li>
          <li>For edges in the middle layer, follow case 2 from second move onwards</li>
          <li>For edges in top layer at incorrect spots, rotate the piece to be in bottom layer and follow case 1</li>
        </ul>
      </div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 2 - First Layer</div>
      <div className="flex justify-center my-4">
        <img className="w-28 rotate-180" src="/Images/3x3tut/whiteCross.png" alt="Cube with only centers coloured" />
        <img className="w-12 h-8 my-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        <img className="w-28 rotate-180" src="/Images/3x3tut/firstLayer.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-white mt-2 mb-8 text-center font-bold text-xl">Hold the white cross at the bottom</div>

      <div className="text-white mt-2 mb-8 text-center font-bold text-xl">With the cross on the bottom, find a corner piece in the top layer with white on it. Turn the top layer so the surrounding centers match the colors on the corner, Example:</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <img className="w-28" src="/Images/3x3tut/firstCorner1.png" alt="Cube with only centers coloured" />
        <img className="w-28" src="/Images/3x3tut/firstCorner2.png" alt="Arrow pointing right" />
        <img className="w-28" src="/Images/3x3tut/firstCorner3.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-white mt-2 mb-8 text-center font-bold text-xl">Above images also show the 3 possible orientations of the corner, each corner can be solved using right sexy moves starting with the corner and its spot on right facing you</div>
      <div className="text-white mt-2 mb-8 text-center font-bold text-xl">Although below table shows the efficient way to solve each</div>
      <div className="mt-4">
        <div className="flex border border-orange-500">
          <img className="w-28 border-r border-orange-500" src="/Images/3x3tut/firstCorner1.png" alt="Case 1 of inserting second piece" />
          <div className="m-auto font-semibold text-white text-xl">2 Unsexy moves</div>
        </div>
      </div>
      <div>
        <div className="flex border border-orange-500">
          <img className="w-28 border-r border-orange-500" src="/Images/3x3tut/firstCorner2.png" alt="Case 2 of inserting second piece" />
          <div className="m-auto font-semibold text-white text-xl">3 Sexy moves OR 3 Unsexy moves</div>
        </div>
      </div>
      <div>
        <div className="flex border border-orange-500">
          <img className="w-28 border-r border-orange-500" src="/Images/3x3tut/firstCorner3.png" alt="Case 3 of inserting second piece" />
          <div className="m-auto font-semibold text-white text-xl">2 Sexy moves</div>
        </div>
      </div>
      <div className="text-white mt-2 mb-8 text-center text-xl">If a corner is in the wrong spot in the bottom layer or in the wrong orientation, perform a single right sexy move keeping the piece on bottom right then solve as per one of the cases above</div>
      <div className="text-white mt-2 mb-8 text-center text-xl">Do this until the first layer is solved</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 3 - Second Layer</div>
      <div className="flex justify-center my-4">
        <img className="w-28 rotate-180" src="/Images/3x3tut/firstLayer.png" alt="Cube with only centers coloured" />
        <img className="w-12 h-8 my-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        <img className="w-28 rotate-180" src="/Images/3x3tut/secondLayer.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-white mt-2 mb-8 text-center text-xl">Find an edge piece in the top layer without yellow as either of its 2 colors</div>
      <div className="text-white mt-2 mb-8 text-center text-xl">Turn the top layer until the edge matches its side colour with a center piece, Example:</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <img className="w-28" src="/Images/3x3tut/secondLayer1.png" alt="Cube with only centers coloured" />
        <img className="w-28" src="/Images/3x3tut/secondLayer2.png" alt="Arrow pointing right" />
      </div>
      <div className="text-white mt-2 mb-8 text-center text-xl">Now hold the edge to the front and perform the following moves</div>
      <div className="text-xl my-1 text-center font-bold text-green-500">Case 1: Edge goes to the right</div>
      <div className="flex justify-evenly mt-8 border border-orange-400">
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsert1.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">Start state - U</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsert2.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">Right sexy move</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsert3.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">y</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsert4.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Left sexy move</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsert5.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Final state</div>
        </div>
      </div>

      <div className="text-xl my-1 text-center font-bold text-green-500">Case 2: Edge goes to the left</div>
      <div className="flex justify-evenly mt-8 border border-orange-400">
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsertL1.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">Start state - U'</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsertL2.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">Left sexy move</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsertL3.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">y'</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsertL4.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Right sexy move</div>
        </div>
        <div>
          <img className="w-28 mx-auto" src="/Images/3x3tut/secondLayerInsertL5.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Final state</div>
        </div>
      </div>
      <div className="text-xl text-white text-center my-4 border border-red-500 p-2">
        <div className="mb-4 font-semibold">Note: Algorithm memorization trick for inserting edge in second layer</div>
        <div>
          <ul className="list-disc text-left mx-auto w-min text-nowrap">
            <li>Turn the top with your left hand</li>
            <li>Do the left 4-moves</li>
            <li>Rotate the cube to face the left side</li>
            <li>Do the right 4-moves</li>
          </ul>
        </div>
      </div>
      <div className="text-white mt-2 mb-8 text-center font-bold text-xl">If any edge is wrongly placed, insert a random yellow edge in place to remove the non-yellow edge, then insert it correctly at its spot.</div>

      <div className="text-white mt-2 mb-8 text-center font-bold text-xl">Do this until all the edges are solved</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 4 - Top Cross</div>
      <div className="flex justify-center my-4">
        <img className="w-28" src="/Images/3x3tut/thirdLayerGrey.png" alt="Cube with only centers coloured" />
        <img className="w-12 h-8 my-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        <img className="w-28" src="/Images/3x3tut/TopCross.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-white mt-2 mb-8 text-center text-xl">There are 3 possible cases where the cross is not already made as shown below</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <img className="w-28" src="/Images/3x3tut/TopDot.png" alt="Cube with only centers coloured" />
        <img className="w-28" src="/Images/3x3tut/TopL.png" alt="Arrow pointing right" />
        <img className="w-28" src="/Images/3x3tut/TopLine.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-white mt-2 mb-8 text-center text-xl">For each case hold the cube as shown and perform the algorithm shown below</div>
      <div className="flex justify-evenly mt-8 border border-orange-400">
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Fsexy1.png" alt="Visual representation of cube with R move" />
          <div className="font-semibold">Start state - F</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Fsexy2.png" alt="Visual representation of cube with U move" />
          <div className="font-semibold">Right Sexy move - R</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Fsexy3.png" alt="Visual representation of cube with R' move" />
          <div className="font-semibold">U</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Fsexy4.png" alt="Visual representation of cube with U' move" />
          <div className="font-semibold">R'</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Fsexy5.png" alt="Visual representation of cube with U' move" />
          <div className="font-semibold">U'</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Fsexy6.png" alt="Visual representation of cube with U' move" />
          <div className="font-semibold">F'</div>
        </div>
      </div>
      <div className="text-white mt-2 mb-8 text-center text-xl">Each case will lead to another until you reach the line case/ case 3 which leads to the top cross</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <img className="w-28" src="/Images/3x3tut/TopDot.png" alt="Cube with only centers coloured" />
        <div className="my-auto mx-2">
          <div className="font-semibold">F-sexy-F'</div>
          <img className="h-8 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <img className="w-28" src="/Images/3x3tut/TopL.png" alt="Arrow pointing right" />
        <div className="my-auto mx-2">
          <div className="font-semibold">F-sexy-F'</div>
          <img className="h-8 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <img className="w-28" src="/Images/3x3tut/TopLine.png" alt="Cube with only white cross and centers coloured" />
        <div className="my-auto mx-2">
          <div className="font-semibold">F-sexy-F'</div>
          <img className="h-8 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <img className="w-28" src="/Images/3x3tut/TopCross.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-white mt-2 mb-8 text-center text-xl">Note: after each F-sexy-F' move, you might need to rotate the top layer to hold the next case in correct orientation</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 5 - Top Cross with Color</div>
      <div className="flex justify-center my-4">
        <img className="w-28" src="/Images/3x3tut/TopCross.png" alt="Cube with only centers coloured" />
        <img className="w-12 h-8 my-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        <img className="w-28" src="/Images/3x3tut/TopCrossColor.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-white mt-2 mb-8 text-center text-xl">Rotate the cube until you have 2 edges correctly aligned with their respective centers. If you have all 4 aligned, you can skip this step</div>
      <div className="text-white mt-2 mb-8 text-center text-xl">For 2 edges aligned you will have one of 2 cases shown below</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <img className="w-28" src="/Images/3x3tut/2edgeCase1.png" alt="Cube with only centers coloured" />
        <img className="w-28" src="/Images/3x3tut/2edgeCase2.png" alt="Arrow pointing right" />
      </div>
      <div className="text-white mt-4 text-center text-xl">Hold the 2 matching edges at the back/right. If they are across from each other, hold them in any way</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <img className="w-28" src="/Images/3x3tut/2edgePos1.png" alt="Cube with only centers coloured" />
        <img className="w-28" src="/Images/3x3tut/2edgePos2.png" alt="Arrow pointing right" />
      </div>
      <div className="text-white mt-4 text-center text-xl">Then perform the following moves</div>
      <div className="flex justify-evenly mt-2 border border-orange-400">
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Sune1.png" alt="Visual representation of cube with R move" />
          <div className="font-semibold">Start state - R</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Sune2.png" alt="Visual representation of cube with U move" />
          <div className="font-semibold">U</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Sune3.png" alt="Visual representation of cube with R' move" />
          <div className="font-semibold">R'</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Sune4.png" alt="Visual representation of cube with U' move" />
          <div className="font-semibold">U</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Sune5.png" alt="Visual representation of cube with U' move" />
          <div className="font-semibold">R</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Sune6.png" alt="Visual representation of cube with U' move" />
          <div className="font-semibold">U2</div>
        </div>
        <div>
          <img className="w-24 mx-auto" src="/Images/3x3tut/Sune7.png" alt="Visual representation of cube with U' move" />
          <div className="font-semibold">R'</div>
        </div>
      </div>
      <div className="text-white mt-4 text-center text-xl">These set of moves are called Sune, similar to sexy moves, these also have a name. This algorithm will be useful for advanced method so learn it well if you wish to learn advanced methods ahead</div>
      <div className="text-white mt-4 text-center text-xl font-bold">Memorization trick: Focus on the corner edge pair of first and second layer that is removed and see how ut moves. This will help understanding the algorithm</div>

      <div className="text-white mt-4 text-center text-xl">If you had the edges aligned across, that is case 2, you will have case 1 now, perform algorithm as per case 1</div>
      <div className="text-white mt-4 text-center text-xl">Now you have solved the top layer edges</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 6 - Top Corners Placement</div>
      <div className="text-white mt-4 text-center text-xl">A corner is in the correct position if all 3 colors on the piece match the surrounding colors, Example:</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <img className="w-28" src="/Images/3x3tut/cornerPoscase1.png" alt="Cube with only centers coloured" />
        <img className="w-28" src="/Images/3x3tut/cornerPoscase2.png" alt="Arrow pointing right" />
        <img className="w-28" src="/Images/3x3tut/cornerPoscase3.png" alt="Arrow pointing right" />
      </div>
      <div className="text-white mt-4 text-center text-xl">If 1 corner is correct, hold it in the front/right, if 0 are correct, hold any corner in the front/right, if all 4 are correct, you can skip this step as well for now</div>
      <div className="text-white mt-4 text-center text-xl">Follow the given algorithm below from the given position, repeat until all corners are placed correctly</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos1.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">Start state - U</div>
        </div>
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos2.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">R</div>
        </div>
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos3.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">U'</div>
        </div>
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos4.png" alt="Visual representation of cube with L' move" />
          <div className="font-bold">L'</div>
        </div>
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos5.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">U</div>
        </div>
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos6.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">R'</div>
        </div>
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos7.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">U'</div>
        </div>
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos8.png" alt="Visual representation of cube with L move" />
          <div className="font-bold">L</div>
        </div>
        <div>
          <img className="w-24" src="/Images/3x3tut/CornerPos9.png" alt="Visual representation of the final state of cube" />
          <div className="font-bold">Final State</div>
        </div>
      </div>
      <div className="text-xl text-white text-left font-semibold my-4">
        <div className="text-center">Hint to memorize:</div>
        <ul className="list-disc mx-auto">
          <li>Turn the top layer with your right hand to the left using the finger trick then turn the right side up.</li>
          <li>Turn the top layer with your left hand to the right and turn the left side up</li>
          <li>Repeat but turn down the sides instead of up</li>
        </ul>
      </div>
      <div className="text-xl text-white text-center my-4 border border-red-500 p-2 font-bold">Note: If you have only 2 corners in the correct position, your cube is unsolvable, and needs to be taken apart and reassembled</div>
      <div className="text-white mt-4 text-center text-xl">Perform this step carefully until all the corners are correctly placed</div>

      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Step 7 - Top Corners Orientation</div>
      <div className="text-white mt-4 text-center text-xl">This is the final step of solving the 3x3 cube.</div>
      <div className="text-white mt-4 text-center text-xl">Hold the cube upside down so that the yellow face is at the bottom now, you may have 2, 3 or 4 unsolved corners</div>
      <div className="text-white mt-4 text-center text-xl">Perform sexy moves until the corner is solved on the bottom right, then rotate the bottom layer and bring another unsolved piece to the bottom right. Repeat this step until the corners are solved then re-align the bottom layer.</div>
      <div className="text-white mt-4 text-center text-xl">The table below shows efficient ways of solving the corners and the different cases that occur</div>
      <div className="flex justify-evenly my-8 border border-orange-400">
        <div>
          <img className="w-24 rotate-180" src="/Images/3x3tut/CornerOrientation1.png" alt="case 1 of last layer corner orientation" />
          <div className="font-bold">2 Sexy moves</div>
        </div>
        <div>
          <img className="w-24 rotate-180" src="/Images/3x3tut/CornerOrientation2.png" alt="case 2 of last layer corner orientation" />
          <div className="font-bold">2 Unsexy moves</div>
        </div>
      </div>
      <div className="text-white mt-4 text-center text-xl">An example is shown below:</div>
      <div className="flex justify-evenly my-4 border border-orange-400">
        <img className="w-20 rotate-180" src="/Images/3x3tut/OrientEx1.png" alt="Cube with only centers coloured" />
        <div className="my-auto mx-2">
          <div className="text-sm font-semibold">2 Sexy moves</div>
          <img className="h-4 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <img className="w-20 rotate-180" src="/Images/3x3tut/OrientEx2.png" alt="Arrow pointing right" />
        <div className="my-auto mx-2">
          <div className="text-sm font-semibold">D - turn bottom layer</div>
          <img className="h-4 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <img className="w-20 rotate-180" src="/Images/3x3tut/OrientEx3.png" alt="Cube with only white cross and centers coloured" />
        <div className="my-auto mx-2">
          <div className="text-sm font-semibold">2 Unsexy moves</div>
          <img className="h-4 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <img className="w-20 rotate-180" src="/Images/3x3tut/OrientEx4.png" alt="Arrow pointing right" />
        <div className="my-auto mx-2">
          <div className="text-sm font-semibold">Align bottom layer</div>
          <img className="h-4 mx-auto" src="/Images/arrow.webp" alt="Arrow pointing right" />
        </div>
        <img className="w-20 rotate-180" src="/Images/3x3tut/OrientEx5.png" alt="Cube with only white cross and centers coloured" />
      </div>
      <div className="text-xl text-white text-center my-4">Congratulations!! Now with practice you can solve a 3x3 in a couple minutes</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Next Steps</div>
      <div className="text-white text-xl text-center">Congratulations again!! Now you can try learning <NavLink to="/CFOP" className="text-blue-600 underline">CFOP: advanced 3x3 method</NavLink> to improve at speed solving</div>
    </div>
  );
}
 
export default Tut3x3;