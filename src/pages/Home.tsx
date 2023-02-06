import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonItem,
  IonCardTitle,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const data = [
    { id: 1, name: "John Doe", is_selected: false },
    { id: 2, name: "Victor Wayne", is_selected: false },
    { id: 3, name: "Jane Doe", is_selected: false },
  ];
  const show = async (value: any, index: any) => {
    console.log(value, index);
    value.is_selected = !value.is_selected;
    if (value.is_selected) {
      document.getElementById("card" + index)!.style.backgroundColor = "red";
    } else {
      document.getElementById("card" + index)!.style.backgroundColor = "white";
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="center">
        <div>
          {data.map((value: any, index: number) => (
            <IonCard id={"card" + index} onClick={() => show(value, index)}>
              <IonCardTitle>{value.name}</IonCardTitle>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
