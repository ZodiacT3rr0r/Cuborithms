import algorithms from '../data-algs/OLL-adv-algs';
import Timer from "./timer"

function OLLtrainer() {
  return (
    <div>
      <Timer algorithms={algorithms} hint={true} />
    </div>
  );
}

export default OLLtrainer;
