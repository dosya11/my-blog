import React from "react";  
import AboutCard from "../AboutCard/AboutCard";
import PopularPosts from "../PopularPosts/PopularPosts";
import Tags from "../Tags/Tags";
const IntroductionMenu = () => {
return (
    <div className="w3-col l4">
        <AboutCard/>
        <PopularPosts/>
        <Tags/>
  
  {/* END Introduction Menu */}
</div>

)
}


export default IntroductionMenu;
