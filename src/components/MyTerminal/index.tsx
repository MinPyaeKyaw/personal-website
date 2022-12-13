import React, {useState} from "react";

// React Router
import { useNavigate, useLocation } from "react-router-dom";
import { AVAILABLE_ROUTES } from "../../constants/enums";

// Framar motion
import { motion } from "framer-motion";

export default function MyTerinal() {

  const navigate = useNavigate();
  const location = useLocation();

  type isFocusValue = 1 | 0;

  const [inputValue, setInputValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState<isFocusValue>(0);
  const [error, setError] = useState<boolean>(false);

  const handleKeyup = ():void => {
    Object.values(AVAILABLE_ROUTES).forEach((value) => {
      if(inputValue === value.replace("/", "")) {
        navigate(inputValue);
      }else if(inputValue === "home") {
        navigate("/");
      }else {
        setError(true);
      }
    })
  }

  const handleBlur = ():void => {
    setIsFocus(0);
  }

  const handleChange = (v:string):void => {
    setInputValue(v);
  }

  const handleAutoFill = (v:string):void => {
    let hintLists:string[] = [];

    Object.values(AVAILABLE_ROUTES).forEach((hint:string) => {
      if(hint === "/") {
        hintLists.push("home");
      }else {
        hintLists.push(hint.replace("/",""));
      }
    });

    let hint:string[] = hintLists.filter((hint:string) => {
      return hint.startsWith(v);
    })

    if(hint.length === 1) {
      setInputValue(hint[0]);
    }
  }

  return (
    <>
      <motion.div 
      initial={{ scaleY: isFocus }}
      animate={{ scaleY: isFocus }}  
      exit={{ scaleY: isFocus }} 
      className="terminal_helper">
        <div className="terminal_helperHeader">
          <div>I'm Helper</div>
          <div>x</div>
        </div>

        <ol>
          {error && <li className="terminal_listError">404: no page found!</li>}
          {Object.values(AVAILABLE_ROUTES).filter(v => {
            let path = location.pathname;

            return v !== path;
          }).map(value => {
            if(value === "/") {
              return(<li key={value} className="terminal_list">type 'home' (to home page)</li>)
            }else {
              return(<li key={value} className="terminal_list">type '{value.replace("/", "")}' (to {value.replace("/", "")} page)</li>)
            }
          })}
        </ol>
      </motion.div>
      <div className="terminal_container">
        <div className="terminal_label_mb">ME:\type here{'>'}</div>
        <div className="terminal_label_dk">ME:\if you're curious about me\type here{'>'}</div>
        <div className="terminal_inputContainer">
          <input
            className="terminal_input"
            type="text"
            onFocus={() => setIsFocus(1)}
            placeholder="type here"
            onBlur={handleBlur}
            value={inputValue.length > 0 ? inputValue : ""}
            onKeyUp={(e:any) => {
              if(e.key === "Enter") {
                handleKeyup();
              }
            }}
            onKeyDown={(e:any) => {
              if(e.key === "Tab") {
                e.preventDefault();
                handleAutoFill(e.target.value.toLowerCase().trim());
              }
            }}
            onChange={(e:any) => {
              handleChange(e.target.value.toLowerCase().trim());
            }} />
        </div>
      </div>
    </>
  );
}
