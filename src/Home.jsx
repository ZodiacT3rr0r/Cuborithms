import { spring } from "motion";
import Card from "./cards";
import { motion } from "motion/react";

const Home = () => {

  return ( 
    <div className="w-auto">
      <div className="tuts flex justify-center">
        <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1.5, type: spring, stiffness: 75, damping: 8 }}>
          <Card badge="3x3 tutorial" link={'/3x3-tutorial'} TorL="Learn Now!" />
        </motion.div>

        <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1.5, type: spring, stiffness: 75, damping: 8, delay: 0.3 }}>
          <Card badge="2x2 tutorial" link={'/2x2-tutorial'} TorL="Learn Now!" />  
        </motion.div>

        <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1.5, type: spring, stiffness: 75, damping: 8, delay: 0.6 }}>
          <Card badge="CFOP method" link={'/CFOP'} TorL="Learn Now!" />
        </motion.div>
      </div>

      <div className="trainer flex justify-center">
        <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 1.5, type: spring, stiffness: 75, damping: 8, delay: 0.6 }}>
          <Card badge="OLL Trainer" link={'/trainer/OLL'} TorL="Train Now!" />
        </motion.div>

        <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 1.5, type: spring, stiffness: 75, damping: 8, delay: 0.4 }}>
          <Card badge="PLL Trainer" link={'/trainer/PLL'} TorL="Train Now!" />
        </motion.div>

        <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 1.5, type: spring, stiffness: 75, damping: 8, delay: 0.2 }}>
          <Card badge="CLL Trainer" link={'/trainer/CLL'} TorL="Train Now!" />
        </motion.div>

        <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 1.5, type: spring, stiffness: 75, damping: 8 }}>
          <Card badge="3x3 Trainer" link={'/trainer/3x3'} TorL="Train Now!" />
        </motion.div>
      </div>
    </div>
  );
}
 
export default Home;