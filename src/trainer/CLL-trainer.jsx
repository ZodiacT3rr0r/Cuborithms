import algorithms from '../data-algs/CLL-algs';
import Timer from "./timer"

function CLLtrainer() {
  return (
    <div>
      <Timer algorithms={algorithms} hint={true} />
    </div>
  );
}

export default CLLtrainer;
