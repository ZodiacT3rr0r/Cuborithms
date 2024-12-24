import { useState, useEffect, useRef } from 'react';

const Timer = ({ algorithms, hint }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [algIndex, setAlgIndex] = useState(algorithms ? Math.floor(Math.random() * algorithms.length) : null);
  const [color, setColor] = useState('text-white');
  const [ready, setReady] = useState(false);
  const [recordedTimes, setRecordedTimes] = useState([]);
  const [previousScramble, setPreviousScramble] = useState(null); // Track the last scramble
  const [showCase, setShowCase] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const setGreenRef = useRef(null);

  const produceScramble = () => {
    function getAxis(face) {
      if (face === 'U' || face === 'D') return 'Y';
      if (face === 'L' || face === 'R') return 'X';
      if (face === 'F' || face === 'B') return 'Z';
    }

    const faces = ['U', 'D', 'L', 'R', 'F', 'B'];
    const modifiers = ['', "'", '2'];
    const scrambleLength = 20;

    let scramble = [];
    let lastFace = null;
    let lastAxis = null;

    for (let i = 0; i < scrambleLength; i++) {
      let face, axis;

      do {
        face = faces[Math.floor(Math.random() * faces.length)];
        axis = getAxis(face);
      } while (face === lastFace || axis === lastAxis);

      const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
      scramble.push(face + modifier);

      lastFace = face;
      lastAxis = axis;
    }

    return scramble.join(' ');
  };

  const [scramble, setScramble] = useState(algorithms ? algorithms[algIndex] : produceScramble());

  const produceAlgorithm = () => {
    setAlgIndex((algIndex + 1) % algorithms.length);
    setScramble(algorithms[algIndex]);
  };

  const handlePreviousScramble = () => {
    if (algorithms) {
      setAlgIndex((algIndex + algorithms.length - 1) % algorithms.length);
      setScramble(algorithms[algIndex]);
    } else if (previousScramble) {
      setScramble(previousScramble);
    }
  };

  const handleNextScramble = () => {
    if (algorithms) {
      produceAlgorithm();
    } else {
      setPreviousScramble(scramble);
      setScramble(produceScramble());
    }
  };

  const reverseScramble = (scramble) => {
    const moves = scramble.split(' ');

    const reversedMoves = moves.reverse().map((move) => {
      if (move.endsWith("'")) {
        return move.slice(0, -1);
      } else if (move.endsWith('2')) {
        return move;
      } else {
        return move + "'";
      }
    });

    return reversedMoves.join(' ');
  };

  const handleColor = (event) => {
    if (event.code === 'Space') {
      setColor('text-red-500');
      window.removeEventListener('keydown', handleColor);

      setGreenRef.current = setTimeout(() => {
        setReady(true);
        setColor('text-green-500');
      }, 1000);
    }
  };

  const handleSpaceBar = (event) => {
    if (setGreenRef.current) {
      clearTimeout(setGreenRef.current);
    }
    setColor('text-white');
    if (event.code === 'Space') {
      setIsActive((prevIsActive) => {
        if (prevIsActive) {
          setReady(false);
          window.addEventListener('keydown', handleColor);
        }
        return !prevIsActive;
      });
    }
  };

  const stringTimeToNumTime = (timeString) => {
    const [seconds, milliseconds] = timeString.split(':').map(Number);
    return seconds * 1000 + milliseconds * 10;
  };

  const numTimeToStringTime = (ms) => {
    const sec = Math.floor(ms / 1000);
    const millisec = Math.floor((ms % 1000) / 10);
    const stringTime = sec + ":" + millisec;
    return stringTime;
  };

  const bestTime = () => {
    if (!recordedTimes.length) return '--';
    return numTimeToStringTime(Math.min(...recordedTimes.map(stringTimeToNumTime)));
  };

  const avgTime = () => {
    if (!recordedTimes.length) return '--';
    var sum = 0;
    recordedTimes.map((stringTime) => {
      sum += stringTimeToNumTime(stringTime);
    });
    return numTimeToStringTime(Math.floor(sum / recordedTimes.length));
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (ready) {
        setTime(0);
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        setColor('text-white');
        setIsActive(!isActive);
        window.addEventListener('keydown', handleColor);
      }
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (time > 0 && !ready) {
      const newTimes = [...recordedTimes, formatTime(time)];
      setRecordedTimes(newTimes);
      localStorage.setItem('recordedTimes', JSON.stringify(newTimes));
    }
  }, [ready]);

  useEffect(() => {
    const storedTimes = JSON.parse(localStorage.getItem('recordedTimes')) || [];
    setRecordedTimes(storedTimes);

    window.addEventListener('keydown', handleColor);
    window.addEventListener('keyup', handleSpaceBar);

    return () => {
      window.removeEventListener('keyup', handleSpaceBar);
      window.removeEventListener('keydown', handleColor);

      if (setGreenRef.current) {
        clearTimeout(setGreenRef.current);
      }
    };
  }, []);

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    const milliseconds = time % 1000 / 10;
    return `${seconds}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='min-h-[90vh] flex text-white'>
      <div className='border border-yellow-500 m-auto w-5/6 min-h-[80vh] flex'>
        <div className='border-r-yellow-500 border-r w-1/3'>
          <div>
            <table className='w-2/3 mx-auto'>
              <thead>
                <tr>
                  <th
                    className=' cursor-pointer'
                    onClick={() => {
                      localStorage.removeItem('recordedTimes');
                      setRecordedTimes([]);
                    }}
                  >
                    Reset
                  </th>
                  <th>time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>current</th>
                  <td className=' text-center'>
                    {recordedTimes.length > 0 && !(formatTime(time) == '0:00')
                      ? isActive || formatTime(time)
                      : '--'}
                  </td>
                </tr>
                <tr>
                  <th>best</th>
                  <td className=' text-center'>{bestTime()}</td>
                </tr>
                <tr>
                  <th>avg</th>
                  <td className=' text-center'>{avgTime()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='w-full min-h-[80vh]'>
          {!isActive && (
            <div className='flex border-b border-b-yellow-500 justify-center pb-3 p-2'>
              <div className='flex justify-center items-center'>
                <div className='text-5xl cursor-pointer' onClick={handlePreviousScramble}>
                  &#x25B2;
                </div>
                <div className='text-3xl mx-4'>
                  {algorithms ? reverseScramble(scramble.algorithm) : scramble}
                </div>
                <div className='text-5xl cursor-pointer' onClick={handleNextScramble}>
                  &#x25BC;
                </div>
              </div>
            </div>
          )}
          <div
            className={`min-h-[71vh] flex justify-center items-center text-8xl font-segment7 ${color}`}
          >
            {formatTime(time)}
          </div>
        </div>
        {hint && (
          <div className='border-l-yellow-500 border-l w-1/4'>
            <h2 className='text-center font-bold text-lg'>Hint Section</h2>
            <div className='flex flex-col items-center'>
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded m-2'
                onClick={() => setShowCase((prev) => !prev)}
              >
                {showCase ? 'Hide Case' : 'Show Case'}
              </button>
              {showCase && <p className='text-center'>Case: {scramble.name}, {scramble.shape}</p>}
              <button
                className='bg-green-500 text-white px-4 py-2 rounded m-2'
                onClick={() => setShowSolution((prev) => !prev)}
              >
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </button>
              {showSolution && <p className='text-center'>Solution: {algorithms ? algorithms[algIndex].algorithm : 'N/A'}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timer;
