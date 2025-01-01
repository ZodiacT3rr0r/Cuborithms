const AlgSkeleton = ({ algorithms, path, imgnum }) => {
  return ( 
    <div className={`text-white mx-auto ${imgnum == 1 ? "w-1/2" : "w-2/3"}`}>
      <table className="text-center border-collapse w-full">
        <thead className="font-bold border border-white">
          <tr>
            <td className="border border-white">Name</td>
            <td className="border border-white">Case</td>
            <td className="border border-white">Algorithms</td>
            <td className="border border-white">Shape</td>
            <td className="border border-white">Best</td>
            <td className="border border-white">Avg</td>
          </tr>
        </thead>
        <tbody>
          {algorithms.map((alg) => (
            <tr key={alg.name}>
              <td className="border border-white">{alg.name}</td>
              {imgnum == 1 &&
                <td className="border border-white">
                  <img 
                    src={`${path}${alg.name.toLowerCase().replace(/\s+/g, '')}${alg.shape.toLowerCase().replace(/\s+/g, '')}.png`} 
                    alt="Image showing case" 
                    className="mx-auto" 
                  />
                </td>
              }
              {imgnum == 2 &&
                <td className="border border-white">
                  <img 
                    src={`${path}${alg.name.toLowerCase().replace(/[\s/]+/g, '')}${alg.shape.toLowerCase().replace(/[\s/]+/g, '')}a.png`} 
                    alt="Image showing case" 
                    className="mx-auto" 
                  />
                  <img 
                    src={`${path}${alg.name.toLowerCase().replace(/[\s/]+/g, '')}${alg.shape.toLowerCase().replace(/[\s/]+/g, '')}b.png`} 
                    alt="Image showing case" 
                    className="mx-auto" 
                  />
                </td>
              }
              <td className="border border-white">{alg.algorithm}</td>
              <td className="border border-white">{alg.shape}</td>
              <td className="border border-white">{alg.bestTime}</td>
              <td className="border border-white">{alg.avgTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlgSkeleton;
