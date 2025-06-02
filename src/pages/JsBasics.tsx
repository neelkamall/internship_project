import { IonContent, IonPage } from "@ionic/react";
import React from "react";

const JsBasics: React.FC = () => {
  const abc = 20;
  const bac = abc;
  console.log(bac);
  console.log("abc:", abc);
  if (abc === 20){
    console.log("hello");
  }

  return (
    <IonPage>
      <IonContent>
        <div>abc:{abc}</div>
        {bac === abc&&(
          <div>
            bac ={bac}
          </div>
        )}
        <div>bac; {abc == 20 ? "Hi" : "Bye"}</div>
      </IonContent>
    </IonPage>
  );
};

export default JsBasics;
