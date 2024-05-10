import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const CvPaper = () => {
    const paperParent = useRef()
    const [paperItem, setPaperItem] = useState(null)

    useEffect(() => {

        const scale = () => {
            if (paperParent.current && paperItem) {
                const parentW = paperParent.current.offsetWidth;
                paperItem.style.transform = `scale(${(parentW * 1) / 793})`
            }
        }
        scale()
        window.addEventListener('resize', scale)
        return () => {
            window.removeEventListener('resize', scale)
        }

    }, [])

    return (
        <div className='cv-papper relative' ref={paperParent}>
            <div className="a4" ref={setPaperItem}>
                <h1>Voici le titre</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos repudiandae fuga, magnam aperiam nemo facilis recusandae mollitia autem laborum unde ratione eum. Culpa non ut dolor inventore aspernatur dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos repudiandae fuga, magnam aperiam nemo facilis recusandae mollitia autem laborum unde ratione eum. Culpa non ut dolor inventore aspernatur dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos repudiandae fuga, magnam aperiam nemo facilis recusandae mollitia autem laborum unde ratione eum. Culpa non ut dolor inventore aspernatur dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos repudiandae fuga, magnam aperiam nemo facilis recusandae mollitia autem laborum unde ratione eum. Culpa non ut dolor inventore aspernatur dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos repudiandae fuga, magnam aperiam nemo facilis recusandae mollitia autem laborum unde ratione eum. Culpa non ut dolor inventore aspernatur dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos repudiandae fuga, magnam aperiam nemo facilis recusandae mollitia autem laborum unde ratione eum. Culpa non ut dolor inventore aspernatur dicta.</p>
            </div>
        </div>
    )
}

export default CvPaper
