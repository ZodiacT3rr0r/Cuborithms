import React, { useState, useEffect, useRef } from 'react';
import algorithms from '../data-algs/PLL-adv-algs';

function PLLtrainer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [algIndex, setAlgIndex] = useState(Math.floor(Math.random() * algorithms.length));
  const [currentAlgorithm, setCurrentAlgorithm] = useState(algorithms[algIndex]);
  const [color, setColor] = useState('text-white');
  const [ready, setReady] = useState(false);
  const [recordedTimes, setRecordedTimes] = useState([]);
  const setGreenRef = useRef(null);
  

  const produceAlgorithm = () => {
    setAlgIndex((algIndex + 1) % algorithms.length);
    setCurrentAlgorithm(algorithms[algIndex]);
  };

  const handleColor = (event) => {
    console.log(isActive, ready);
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
    console.log(isActive, ready);
    if (setGreenRef.current) {
      clearTimeout(setGreenRef.current);
    }

    if (event.code === 'Space') {
      setIsActive((prevIsActive) => {
        if (prevIsActive) {
          setReady(false);
          setColor('text-white');
          window.addEventListener('keydown', handleColor);
        }
        return !prevIsActive;
      });
    }
  };

  const prevAlg = () => {
    setAlgIndex((algIndex + algorithms.length - 1) % algorithms.length);
    setCurrentAlgorithm(algorithms[algIndex]);
  };

  const stringTimeToNumTime = (timeString) => {
    const [seconds, milliseconds] = timeString.split(':').map(Number);
    return seconds * 1000 + milliseconds * 10;
  };
  
  const numTimeToStringTime = (ms) => {
    const sec = Math.floor(ms/1000);
    const millisec = Math.floor((ms%1000)/10);
    const stringTime = sec + ":" + millisec;
    return stringTime;
  };

  const bestTime = () => {
    if (!recordedTimes.length) 
      return '--';
    return numTimeToStringTime(Math.min(...recordedTimes.map(stringTimeToNumTime)))
  }

  const avgTime = () => {
    if(!recordedTimes.length)
      return '--';
    var sum = 0;
    recordedTimes.map((stringTime) => {sum+=stringTimeToNumTime(stringTime)});
    return numTimeToStringTime(Math.floor(sum/recordedTimes.length));
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (ready) {
        setTime(0);
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
          console.log(isActive, ready);
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
    <div className='min-h-[90vh] flex'>
      <div className='border border-yellow-500 m-auto w-5/6 min-h-[80vh] flex'>
        <div className='border-r-yellow-500 border-r w-1/3'>
          <div>
            <table className='w-2/3 mx-auto'>
              <thead>
                <tr>
                  <th className='cursor-pointer' onClick={()=>{localStorage.removeItem('recordedTimes');setRecordedTimes([])}}>Reset</th>
                  <th className=''>time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className='text-white'>current</th>
                  <td className=' text-center'>{recordedTimes.length > 0 && !(formatTime(time) == '0:00')? isActive || formatTime(time) : '--'}</td>
                </tr>
                <tr>
                  <th className=''>best</th>
                  <td className=' text-center'>{bestTime()}</td>
                </tr>
                {1 &&
                  <tr>
                    <th className=''>avg</th>
                    <td className=' text-center'>{avgTime()}</td>
                  </tr>
                }
              </tbody>
            </table>
            <div className='flex flex-wrap justify-center'>
              {recordedTimes.map((t, index) => (
                <div className='bg-black text-white cursor-pointer border rounded-sm w-10 h-6 text-center m-2'>{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full min-h-[80vh]'>
          <div className='flex border-b border-b-yellow-500 justify-center pb-3 p-2'>
            {currentAlgorithm &&
              <div className='flex text-white justify-center items-center'>
                <div className='text-5xl cursor-pointer' onClick={prevAlg}>&#x25B2;</div>
                <div className='text-3xl mx-4'>{currentAlgorithm.algorithm}</div>
                <div className='text-5xl cursor-pointer' onClick={produceAlgorithm}>&#x25BC;</div>
              </div>
            }
          </div>
          <div className={`min-h-[71vh] flex justify-center items-center text-8xl font-segment7 ${color}`}>
            {formatTime(time)}
          </div>
        </div>
        <div className='border-l-yellow-500 border-l w-1/4'>
          <h2>Hint column</h2>
        </div>
      </div>
    </div>
  );
}

export default PLLtrainer;
