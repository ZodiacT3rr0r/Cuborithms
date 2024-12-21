import algorithms from '../data-algs/PLL-adv-algs';
import Timer from "./timer"

function PLLtrainer() {
  return (
    <div>
      <Timer algorithms={algorithms} hint={true} />
    </div>
  );
}

export default PLLtrainer;
