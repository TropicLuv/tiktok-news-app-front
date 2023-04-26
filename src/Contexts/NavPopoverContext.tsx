import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import { PopoverData } from "../Components/Header/Header";
import { Overview } from "../ConstData/Header";
import React, { useContext, useRef } from "react";

//BABEL
// class NavPopover {
//     @observable state: boolean = false
//     @observable parentId: string = 'overview';
//     @observable data: PopoverData | undefined = undefined
//     @observable str: string = '!!!!!!!!!!!!';

// }



class NavPopover {
    /**
     *
     */
    constructor() {
        makeObservable(this, {
            state: observable,
            parentId: observable,
            data: observable,
            left: observable,
            right: observable,

            setData: action,
            setState: action,
            setParentId: action,
            setLeft: action,
            setRight: action,
        })
    }

    state: boolean = false
    setState = (state: boolean) => {
        this.state = state;
    };
    // public get getState(): boolean {
    //     return this.state
    // };


    parentId: string = "history"
    setParentId = (parentId: string) => {
        this.parentId = parentId
        console.log("parent id is " + this.parentId)

    };


    data: PopoverData | null = null
    setData = (popoverData: PopoverData) => {
        this.data = popoverData

    };
    // public get getData(): PopoverData | null {
    //     return this.data
    // };

    left: number = window.innerWidth / 2
    right: number = window.innerWidth / 2

    setLeft = (val: number) => {
        console.log(this.left)
        this.left = val
    }
    setRight = (val: number) => (
        this.right = val
    )



    navPopoverSetAllProps = (state: boolean, parentId: string, data: PopoverData, left: number, right: number) => {
        this.setParentId(parentId);
        this.setLeft(left);
        this.setRight(right);
        this.setData(data);
        this.setState(state);
    }



}

const NavPopoverContext = React.createContext<NavPopover | undefined>(undefined);

export const useNavPopoverCtx = () => {

    const value = useContext(NavPopoverContext);

    if (!value) throw new Error("useScrollChangeContext should be inside ScrollChangeProvider");

    return value;
}

type Props = {
    children: React.ReactNode;
    store: NavPopover
};

export function NavPopoverProvider({ children, store }: Props) {
    const ctx = useRef(new NavPopover());

    return (
        <NavPopoverContext.Provider value={store}>
            {children}
        </NavPopoverContext.Provider>
    )
}

export default NavPopover

