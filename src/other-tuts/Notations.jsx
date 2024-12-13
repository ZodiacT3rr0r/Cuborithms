

const Notations = () => {
  return ( 
    <div className="w-1/2 mx-auto text-center pb-48">
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Face Turns</div>
      <div className="mx-auto text-xl text-white">The basic moves are <span className="font-bold">U</span>p, <span className="font-bold">D</span>own, <span className="font-bold">L</span>eft, <span className="font-bold">R</span>ight, <span className="font-bold">F</span>ront and <span className="font-bold">B</span>ack.</div>
      <div className="text-white my-8 text-xl">Each move means to turn that face clockwise when facing that side.</div>
      <div className="flex justify-center border border-orange-400">
        <div>
          <img className="w-28" src="/Images/Notations/U.png" alt="Visual representation of cube with U move" />
          <div className="font-bold">U</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/D.png" alt="Visual representation of cube with D move" />
          <div className="font-bold">D</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/R.png" alt="Visual representation of cube with R move" />
          <div className="font-bold">R</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/L.png" alt="Visual representation of cube with L move" />
          <div className="font-bold">L</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/F.png" alt="Visual representation of cube with F move" />
          <div className="font-bold">F</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/B.png" alt="Visual representation of cube with B move" />
          <div className="font-bold">B</div>
        </div>
      </div>
      <div className="text-white my-8 text-xl">An apostrophe means to turn the face anti-clockwise. D' is pronouned as D prime</div>
      <div className="flex justify-center border border-orange-400">
        <div>
          <img className="w-28" src="/Images/Notations/U'.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">U'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/D'.png" alt="Visual representation of cube with D' move" />
          <div className="font-bold">D'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/R'.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">R'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/L'.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">L'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/F'.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">F'</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/B'.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">B'</div>
        </div>
      </div>
      <div className="text-white my-8 text-xl">To turn the face twice, number 2 is used</div>
      <div className="flex justify-center border border-orange-400">
        <div>
          <img className="w-28" src="/Images/Notations/U2.png" alt="Visual representation of cube with U2 move" />
          <div className="font-bold">U2</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/D2.png" alt="Visual representation of cube with D' move" />
          <div className="font-bold">D2</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/R2.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">R2</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/L2.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">L2</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/F2.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">F2</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/B2.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">B2</div>
        </div>
      </div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Wide Moves</div>
      <div className="text-white mt-8 mb-4 text-xl">Wide moves turn 2 layers at once, they have 2 types of notations:</div>
      <ul className="text-white list-disc text-justify mx-auto w-2/5">
        <li>Lower case letters: <span className="font-bold">u, d, r, l, f, b</span></li>
        <li>Ending in w: <span className="font-bold">Uw, Dw, Rw, Lw, Fw, Bw</span></li>
      </ul>
      <div className="flex justify-center border border-orange-400">
        <div>
          <img className="w-28" src="/Images/Notations/Uw.png" alt="Visual representation of cube with Uw move" />
          <div className="font-bold">Uw/u</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/Dw.png" alt="Visual representation of cube with D' move" />
          <div className="font-bold">Dw/d</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/Rw.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">Rw/r</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/Lw.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Lw/l</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/Fw.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Fw/f</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/Bw.png" alt="Visual representation of cube with U' move" />
          <div className="font-bold">Bw/b</div>
        </div>
      </div>
      <div className="text-white my-4 text-xl">Similarly there are Uw' / u' and Uw2 / u2 for each side</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Slice Moves</div>
      <div className="text-white my-4 text-xl">Slice turns are terms for middle layer turns</div>
      <div className="text-white my-4 text-xl">The notations are <span className="font-bold">M, E</span> and <span className="font-bold">S</span></div>
      <div className="text-white my-4 text-xl">M, E and S follow directions of L, D and F respectively.</div>
      <div className="flex justify-evenly border border-orange-400">
        <div>
          <img className="w-28" src="/Images/Notations/M.png" alt="Visual representation of cube with M move" />
          <div className="font-bold">M</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/E.png" alt="Visual representation of cube with D' move" />
          <div className="font-bold">E</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/S.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">S</div>
        </div>
      </div>
      <div className="text-white my-4 text-xl">There are M', M2 for each slices too</div>
      <div className="text-white my-4 text-xl"><span className="font-bold">Hint to memorize direction:</span> M follows L because L is closer to M than R. Same logic applies for each slice</div>
      <div className="border-y border-y-cyan-400 text-5xl my-8 p-2 font-semibold text-orange-400">Cube Rotations</div>
      <div className="text-white my-4 text-xl">Cube Rotations are simple, the notations are given by rotation about the axis directions. i.e. x, y and z</div>
      <div className="text-white my-4 text-xl">The direction of turn folows same rule as the slices, same direction the closer letter </div>
      <div className="flex justify-evenly border border-orange-400">
        <div>
          <img className="w-28" src="/Images/Notations/X.png" alt="Visual representation of cube with x move" />
          <div className="font-bold">x</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/Y.png" alt="Visual representation of cube with D' move" />
          <div className="font-bold">y</div>
        </div>
        <div>
          <img className="w-28" src="/Images/Notations/Z.png" alt="Visual representation of cube with R' move" />
          <div className="font-bold">z</div>
        </div>
      </div>
      <div className="text-white mt-24 text-xl">Now you have learned the notations of a 3x3 cube. Now you can read and understand cubing algorithms. Bigger cubes have same notations for outer and middle layers bu extra notations for the inner layers.</div>
      <div className="text-teal-500 my-4 text-2xl border-y border-b-yellow-300 border-t-red-600 w-min mx-auto whitespace-nowrap px-2 py-1">Happy Cubing :) &lt;3</div>
    </div>
  );
}
 
export default Notations;