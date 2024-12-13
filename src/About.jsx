import IMAGES from "./IMAGES";

const About = () => {
  return ( 
    <div className="relative min-h-screen">
      <div className="w-6/12 mx-auto">
        <div className="border-b-2 border-b-orange-400 text-center text-4xl p-4 font-semibold">About Me</div>
        <div className="flex">
          <div className="w-1/3 m-2"><img src={IMAGES.logo} className="w-full" alt="Image of me showing off my cubing skills😅" /></div>
          <div className="w-2/3 text-white">Hi! I'm Dhrushit Jain, and my mission is to empower you to achieve more than you ever thought possible. The Rubik's Cube is often seen as an insurmountable challenge, something that only a select few can master. But in reality, the cube is a perfect example of how anyone can achieve greatness with the right mindset. All it takes is curiosity, practice, and a little bit of guidance. This website is here to show you that with determination, you can solve the Rubik's Cube, and in the process, you'll gain the confidence to tackle other challenges in life. Whether you stick with speedcubing or move on to other pursuits, the lessons learned here—persistence, patience, and the courage to face the unknown—will stay with you. Let's embark on this journey together, and discover just how capable you truly are!</div>
        </div>
      </div>-
    </div>
  );
}
 
export default About;