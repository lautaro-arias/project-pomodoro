import React,{ useState } from 'react'
import "../styles/controls.css"
interface ControlsProps {
  updateWorkTime: (newWorkTime: number) => void;
  updateBreakTime: (newBreakTime: number) => void;
}

const Controls: React.FC<ControlsProps> = ({ updateWorkTime,updateBreakTime}) => {
  const [workInput, setWorkInput] = useState<number>(0) ;
  const [breakInput, setBreakInput] = useState<number>(0) ;

  const handleApplySettings = () => {
    
    if( workInput && breakInput !==0){
      alert(" Trabajo y Descanso tienen valores por favor elije uno")
      return
    }
    else if( workInput > 90){
      alert("Ingresa un valor menor a 90 ")
      return
    }
    else if (workInput > 0 ) {
      updateWorkTime(workInput * 60);
    } else if (breakInput > 30 ){
        alert("Ingrese un valor menor a 30")
        return
    } 
    else {
      updateBreakTime(breakInput * 60);
    }  
  };


  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog rounded-3 fondo">
            <div className="modal-content  fondo">
              <div className="modal-header  ">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Configuraciones</h1>
                  <i style-="color: black;" className="fas fa-times close-btn"></i>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                      <div className="flexbox">
                        <section className="row timer-settings" style-="flex-direction: column; align-items: flex-start;">
                           <label for-="timer-inputs">Tiempo (minutos)</label>
                          <div id="timer-inputs">
                            <div className="mx-2" style-="flex: 0 0 auto;display: flex; flex-direction: column; margin">
                                <label for-="timer">Trabajo</label>
                              <input  
                              type="number"
                              min="0" 
                              id="timer"
                              value={ workInput }
                              placeholder="ingresa un numero"
                              onChange={(e) => setWorkInput(Number(e.target.value))}
                              />
                            </div>
                            <div className="mx-2" style-="flex: 0 0 auto;display: flex; flex-direction: column;">
                                 <label  for-="break">Descanso</label>
                              <input  
                              type="number" 
                              min="0"
                              id="timer"
                              value={ breakInput } 
                              placeholder="ingresa un numero"
                              onChange={(e) => setBreakInput(Number(e.target.value))}
                                />
                            </div>
                          </div>
                        </section>
                      </div>
                      <button type="submit" 
                              className="apply-settings"
                              id="applySettings"
                              onClick={ handleApplySettings }
                              data-bs-dismiss="modal">Aplicar
                            </button>
                </div>
                  <div className="modal-footer "></div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Controls