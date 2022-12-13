// Framer Motion
import TransitionAnimator from "../../components/TransitionAnimator";

export default function Home() {
  return (
    <TransitionAnimator>
      <div className="home_container">
        <div className="home_name">Sai Min Pyae Kyaw</div>
        <div className="home_role">{'{'}Web Developer{'}'}</div>
        
        <img 
        className="home_doubleRetangle1" 
        src={require('./../../assets/images/doubleRantangle.svg').default} 
        alt="Sai Min Pyae Kyaw" />

        <img 
        className="home_polygon" 
        src={require('./../../assets/images/polygon.svg').default} 
        alt="Sai Min Pyae Kyaw" />

        <img 
        className="home_rectangle" 
        src={require('./../../assets/images/rectangle.svg').default} 
        alt="Sai Min Pyae Kyaw" />

        <img 
        className="home_lines" 
        src={require('./../../assets/images/topLines.svg').default} 
        alt="Sai Min Pyae Kyaw" />
      </div>
    </TransitionAnimator>
  );
}
