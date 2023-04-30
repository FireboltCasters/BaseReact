import React, {FunctionComponent, useEffect} from 'react';
import {useSynchedState} from "../storage/SynchedStateHelper";
import {SynchedStates} from "../storage/SynchedStates";
import {Button} from "primereact/button";
import {InputTextarea} from "primereact/inputtextarea";
import {MyFirstAlgorithms} from "./MyFirstAlgorithms";

export const Demo : FunctionComponent = (props) => {

    const [exampleInput, setExampleInput] = useSynchedState(SynchedStates.exampleSynchedInput)
    const [exampleOutput, setExampleOutput] = useSynchedState(SynchedStates.exampleSynchedOutput)

    useEffect(() => {
        document.title = "My Example Project";
    }, [])

    function renderTutorial(){
        return(
            <div>
                <Button label={"PrimeReact Components"} onClick={() => window.open("https://www.primefaces.org/primereact-v8/", "_blank")}/>
            </div>
        )
    }

    function renderContent(){
        return(
            <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", backgroundColor: "transparent", alignItems: "center", justifyContent: "center"}}>
                <div>{"Edit: 'src/ignoreCoverage/main/MyFirstAlgorithms.tsx'"}</div>
                <div style={{height: "50px"}}></div>
                <div style={{flexDirection: "row", display: "flex"}}>
                    <div style={{flexDirection: "column", display: "flex"}}>
                        <div>{"Input"}</div>
                        <InputTextarea rows={5} cols={30} value={exampleInput} onChange={(e) => {
                            setExampleInput(e.currentTarget.value)
                        }} />
                        <Button label={"Submit"} onClick={() => {
                            let output = MyFirstAlgorithms.myFirstAlgorithm(exampleInput)
                            setExampleOutput(output)
                        }}/>
                    </div>
                    <div style={{width: "50px"}}>{""}</div>
                    <div>
                        <div>{"Output"}</div>
                        <InputTextarea rows={5} cols={30} value={exampleOutput} onChange={(e) => {
                            setExampleOutput(e.currentTarget.value)
                        }} />
                    </div>
                </div>
            </div>
        )
    }

    return (
            <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column"}}>
                {renderTutorial()}
                <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", backgroundColor: "transparent"}}>
                    {renderContent()}
                </div>
            </div>
        );
}
