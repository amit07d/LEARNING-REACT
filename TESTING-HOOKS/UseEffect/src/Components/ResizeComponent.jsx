import { useState, useEffect } from "react";

function ResizeComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        console.log('Event listener Added');
        window.addEventListener('resize', handleResize) 
    
        return (() => {
            console.log('Event Listener removed');
            window.removeEventListener('resize', handleResize)
            
        })
    }, [])

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl text-gray-800 font-bold">window width: {windowWidth} px</h1>
        </div>
    )
}
export default ResizeComponent