import React, { useState } from 'react';
import styles from '../styles/Budget.module.css';


export function Budget() {

    let number = 0;
    let finalResult = 0;

   const [doublebed, setDoubleBed] = useState(number);

   const [singleBed, setSingleBed] = useState(number);
   
   const [result, setResult] = useState(finalResult)

   function addDoubleBed() {
       setDoubleBed(1 + doublebed)
   }

   function removeDoubleBed () {
      setDoubleBed(doublebed - 1)
   }

   function addSingleBed() {
       setSingleBed(singleBed + 1);
   }

   function removeSingleBed() {
       setSingleBed(singleBed - 1)
   }

   function calculate() {
    return  (
       setResult((doublebed + singleBed) * 400)
    )
   }


    return (
        <div className={styles.budgetContainer}>
        <header>
         <h2>Preços</h2>
        </header>
        <div className={styles.counterBody}>
           
         <div className={styles.counters}>
             
         <div className={styles.counter}>
               <p>Cama casal</p>
              <p>
                {doublebed}   
              </p>

              <div className={styles.buttons}>
                 <button onClick={addDoubleBed}>
                    +    
                 </button>
                 <button onClick={removeDoubleBed}>
                    -    
                 </button>   
              </div>   
             </div> {/* COUNTER  */}

             <p className={styles.more}>
               +
             </p>

             <div className={styles.counter}>
             <p>Cama solteiro</p>
              <p>
                {singleBed}   
              </p>

              <div className={styles.buttons}>
                 <button onClick={addSingleBed}>
                    +    
                 </button>
                 <button onClick={removeSingleBed}>
                    -    
                 </button>   
              </div>   
             </div> {/* COUNTER  */}

             <p className={styles.more}>
                 =
             </p>

             <div className={styles.counter}>
                 <p>
                     Total
                 </p>
                 <p>
                     R$ {result}
                 </p>
             </div>

         </div> {/* COUNTERS */}

             <button onClick={calculate} className={styles.calculate}>Calcular</button>
        </div> {/* COUNTER BODY */}
     </div>
    )
}