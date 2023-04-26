import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";
import React, { useContext, useRef } from "react";



class ScrollChange {
    /**
     *
     */
    constructor() {
        makeObservable(this, {
            scrollValue: observable,
            scrollState: computed,
            setScrollValue: action
        })
    }

    scrollValue: number = 0


    setScrollValue = (val: number) => {
        console.log(this.scrollValue)
        this.scrollValue = val
    }


    get scrollState(): boolean {
        return this.scrollValue < 400 ? false : true;
    }

}



const ScrollChangeContext = React.createContext<ScrollChange | undefined>(undefined);

export const useScrollChangeContext = () => {

    const value = useContext(ScrollChangeContext);

    if (!value) throw new Error("useScrollChangeContext should be inside ScrollChangeProvider");

    return value;
}


type Props = {
    children: React.ReactNode;
    store: ScrollChange;
};

export function ScrollChangeProvider({ children, store }: Props) {

    return (
        <ScrollChangeContext.Provider value={store}>
            {children}
        </ScrollChangeContext.Provider>
    )
}


export default ScrollChange