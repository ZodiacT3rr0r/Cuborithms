import Card from "./cards";

const Home = () => {

  return ( 
    <div className="w-auto">
      <div className="tuts flex justify-center">
        <Card badge="3x3 tutorial" link={'/3x3-tutorial'} TorL="Learn Now!" />
        <Card badge="2x2 tutorial" link={'/2x2-tutorial'} TorL="Learn Now!" />
        <Card badge="CFOP method" link={'/CFOP'} TorL="Learn Now!" />
      </div>
      <div className="trainer flex justify-center">
        <Card badge="OLL Trainer" link={'/trainer/OLL'} TorL="Train Now!" />
        <Card badge="PLL Trainer" link={'/trainer/PLL'} TorL="Train Now!" />
        <Card badge="CLL Trainer" link={'/trainer/CLL'} TorL="Train Now!" />
        <Card badge="3x3 Trainer" link={'/trainer/3x3'} TorL="Train Now!" />
      </div>
    </div>
  );
}
 
export default Home;