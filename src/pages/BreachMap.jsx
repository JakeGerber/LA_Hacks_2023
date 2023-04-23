import React, { useState } from 'react';
import USAMap from 'react-usa-map';


const BreachMap = ({data}) => {
  const [US_State, setUS_State] = useState("")
  const [US_DataBreach, setUS_DataBreach] = useState()

  const [temp, setTemp] = useState(Object.assign({}, data))
  
  const [t, setT] = useState({    NJ: {
    fill: temp["NJ"],
  },
  NY: {
    fill: temp["NY"],
  },
});


  const mapHandler = (event) => {
    setUS_State(event.target.dataset.name)
    setUS_DataBreach(data[event.target.dataset.name][0])
    //alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */

  const statesCustomConfig = {
    AK: {
      fill: temp.AK
    },
    AL: {
      fill: temp.AL[1]
    },
    AR: {
      fill: temp.AR[1]
    },
    AZ: {
      fill: temp.AZ[1]
    },
    CA: {
      fill: temp.CA[1]
    },
    CO: {
      fill: temp.CO[1]
    },
    CT: {
      fill: temp.CT[1]
    },
    DC: {
      fill: temp.DC[1]
    },
    DE: {
      fill: temp.DE[1]
    },
    FL: {
      fill: temp.FL[1]
    },
    GA: {
      fill: temp.GA[1]
    },
    HI: {
      fill: temp.HI[1]
    },
    IA: {
      fill: temp.IA[1]
    },
    ID: {
      fill: temp.ID[1]
    },
    IL: {
      fill: temp.IL[1]
    },
    IN: {
      fill: temp.IN[1]
    },
    KS: {
      fill: temp.KS[1]
    },
    KY: {
      fill: temp.KY[1]
    },
    LA: {
      fill: temp.LA[1]
    },
    MA: {
      fill: temp.MA[1]
    },
    MD: {
      fill: temp.MD[1]
    },
    ME: {
      fill: temp.ME[1]
    },
    MI: {
      fill: temp.MI[1]
    },
    MN: {
      fill: temp.MN[1]
    },
    MO: {
      fill: temp.MO[1]
    },
    MS: {
      fill: temp.MS[1]
    },
    MT: {
      fill: temp.MT[1]
    },
    NC: {
      fill: temp.NC[1]
    },
    ND: {
      fill: temp.ND[1]
    },
    NE: {
      fill: temp.NE[1]
    },
    NH: {
      fill: temp.NH[1]
    },
    NJ: {
      fill: temp.NJ[1]
    },
    NM: {
      fill: temp.NM[1]
    },
    NV: {
      fill: temp.NV[1]
    },
    NY: {
      fill: temp.NY[1]
    },
    OH: {
      fill: temp.OH[1]
    },
    OK: {
      fill: temp.OK[1]
    },
    OR: {
      fill: temp.OR[1]
    },
    PA: {
      fill: temp.PA[1]
    },
    RI: {
      fill: temp.RI[1]
    },
    SC: {
      fill: temp.SC[1]
    },
    SD: {
      fill: temp.SD[1]
    },
    TN: {
      fill: temp.TN[1]
    },
    TX: {
      fill: temp.TX[1]
    },
    UT: {
      fill: temp.UT[1]
    },
    VA: {
      fill: temp.VA[1]
    },
    VT: {
      fill: temp.VT[1]
    },
    WA: {
      fill: temp.WA[1]
    },
    WI: {
      fill: temp.WI[1]
    },
    WV: {
      fill: temp.WV[1]
    },
    WY: {
      fill: temp.WY[1]
    },
    
  
  
  
  


    }
  
  
  return (
    <div className="App">
      <h1>WOWOWOOWW</h1>
      <h2>{temp.KS[0]}</h2>
      <h1>{US_DataBreach}</h1>
      {console.log(temp["AK"])}
      <USAMap customize={statesCustomConfig} onClick={mapHandler} />
      <h1>WOW {US_State}</h1>
    </div>
    
  );
};

export default BreachMap;
