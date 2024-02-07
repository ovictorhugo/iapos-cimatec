import { Header } from "../components/Header";
import { MapProfnit } from "../components/MapProfnit";
import { Route, useParams } from 'react-router-dom';
import { Footer } from "../components/Footer";
import { ContentProfnit } from "../components/ContentProfnit";
import { HeaderProfnit } from "../components/HeaderProfnit";

export function Profnit() {

    const { userId } = useParams<{
        userId: string;
  
      }>();

    return  (
        <div>
            <HeaderProfnit/>
            < ContentProfnit id={userId || ''}/>
            <Footer/>
          
        </div>
    )
}