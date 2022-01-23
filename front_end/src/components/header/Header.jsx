import "./header.css";
import codeImage from '../../Images/code_white.svg';
import fittingImage from '../../Images/fitting_white.svg';
import inspectImage from '../../Images/inspect_white.svg';

export default function Header() {
  // console.log(image);
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Development Made Easy</span>
        <span className="headerTitleLg">WEB-EASY</span>
      </div>
      <div className="headerDesc">
        <div className="box">
          <img src={codeImage} alt="" />
          <p>Contribute and Consume Top Notch Work</p>
        </div>
        <div className="box">
        <p> Pick the right components for you! </p>
          <img src={fittingImage} alt="" />
        </div>
        <div className="box">
          <img src={inspectImage} alt="" />
          <p>Work only on your Main Idea!</p>
        </div>
      </div>
      <div className="overlay"></div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg"
        alt=""
      />
    </div>
  );
}