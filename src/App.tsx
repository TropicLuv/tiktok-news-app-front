import { useEffect, useMemo, } from 'react';
import Header from './Components/Header/Header'
import NavPopover, { NavPopoverProvider } from './Contexts/NavPopoverContext';
import Body from './Components/Body/Body';
import ScrollChange, { ScrollChangeProvider } from './Contexts/ScrollChangeContext';





const App = () => {

  const scrollStore = useMemo(() => new ScrollChange(), []);
  const navPopoverStore = useMemo(() => new NavPopover(), [])





  // const controller = new ScrollMagic.Controller();
  // const scene = new ScrollMagic.Scene({
  //   triggerElement: '#scrollTo', // the element that triggers the event
  //   triggerHook: 'onEnter', // when the trigger should be fired
  // });


  // scene.setTween(TweenMax.to(window, 1, {
  //   scrollTo: {
  //     y: document.body.clientHeight,
  //     offsetY: 50,
  //   },
  // }));
  // controller.addScene(scene);


  useEffect(() => {
    const handleScroll = () => {
      if (scrollStore.scrollValue) {
        // element!.scrollIntoView();
        // window.scrollTo({
        //   // top: element!.offsetTop,
        //   behavior: "smooth"
        // });
      }
      const scrollY = window.scrollY;


      scrollStore.setScrollValue(scrollY);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    // <React.StrictMode>
    <ScrollChangeProvider store={scrollStore}>
      <NavPopoverProvider store={navPopoverStore}>
        <Header />

        <Body />


      </NavPopoverProvider>
    </ScrollChangeProvider>


    // </React.StrictMode>
  )
}

export default App
