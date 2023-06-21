import React, {useEffect} from "react";
import AOS from "aos";
import { ColorRise } from "../components/ColorRise";

export function Projects() {
    useEffect(() => {
      AOS.init({
        duration: 2000
      });
    
      return () => {
        AOS.refresh();
      };
    }, []);
     
    
    return(
    <div>
        content here
    </div>
    );
}