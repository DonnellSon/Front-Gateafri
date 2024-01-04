import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './ProfilePictureSelectorModal.scss'
import { ArrowClockwise, ArrowCounterclockwise, XLg } from 'react-bootstrap-icons'
import Modal from '../Modal/Modal'
import CheckBox from '../CheckBox/CheckBox'
import axios from 'axios'
import CircleLoader from '../CircleLoader/CircleLoader'

const ProfilePictureSelectorModal = ({ open = true, file,onChanged=()=>{} }) => {
    const [modalLoaded, setModalLoaded] = useState(false)
    const [isOpen, setIsOpen] = useState(open)
    const [isUploading,setIsUploading]=useState(false)
    useEffect(() => {
        setIsOpen(true)
    }, [file])
    useEffect(() => {
        setTimeout(() => {
            setModalLoaded(true)
        }, 250)
    }, [])

    const uploadProfilePicture = () => {
        let postFormData = new FormData()
        if (file) {
            postFormData.append('file', file)
            setIsUploading(true)
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_DOMAIN}/api/posts`,
                withCredentials: true,
                data: postFormData
            }).then((res) => {
                console.log(res);
                setIsUploading(false)
            }).catch((err) => {
                setIsUploading(false)
                console.log(err.response);

            })
        }


    }

    const imgRef = useRef()
    const imgContainerRef = useRef()
    const cropperRef = useRef()
    const rangeRef = useRef()
    const imgCropperRef = useRef()

    const [mouseDown, setMouseDown] = useState(false)
    const [mouseEnter, setMouseEnter] = useState(false)

    const [initMouseX, setInitMouseX] = useState(0)
    const [initMouseY, setInitMouseY] = useState(0)
    const [initImageX, setInitImageX] = useState(0)
    const [initImageY, setInitImageY] = useState(0)
    const [xMargin, setXMargin] = useState(0)
    const [yMargin, setYMargin] = useState(0)

    const [imgWidth, setImgWidth] = useState(0)
    const [imgHeight, setImgHeight] = useState(0)

    const [imgLeft, setImgLeft] = useState(0)
    const [imgTop, setImgTop] = useState(0)
    const [cropperLeft, setCropperLeft] = useState(0)
    const [cropperTop, setCropperTop] = useState(0)

    const [ratio, setRatio] = useState(1)

    const [originalImageWidth, setOriginalImageWidth] = useState(0)
    const [originalImageHeight, setOriginalImageHeight] = useState(0)



    const handleMouseMove = (e) => {

        if (mouseDown) {

            var x = e.clientX - initMouseX
            var y = e.clientY - initMouseY
            x = initImageX + x
            y = initImageY + y
            if (x > xMargin) x = xMargin
            if (y > yMargin) y = yMargin
            let xLimit = imgContainerRef.current.clientWidth - imgRef.current.clientWidth - xMargin
            let yLimit = imgContainerRef.current.clientHeight - imgRef.current.clientHeight - yMargin
            if (x < xLimit) { x = xLimit }
            if (y < yLimit) { y = yLimit }
            imgRef.current.style.left = x + 'px'
            imgRef.current.style.top = y + 'px'

            setImgLeft(imgRef.current.getBoundingClientRect().left)
            setImgTop(imgRef.current.getBoundingClientRect().top)
            setCropperLeft(cropperRef.current.getBoundingClientRect().left)
            setCropperTop(cropperRef.current.getBoundingClientRect().top)

        }

    }
    const handleMouseEnter = () => {
        setMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setMouseEnter(false)
    }
    const handleMouseDown = (e) => {
        setInitMouseX(e.clientX)
        setInitMouseY(e.clientY)
        setInitImageX(imgRef.current.getBoundingClientRect().left - cropperRef.current.getBoundingClientRect().left)
        setInitImageY(imgRef.current.getBoundingClientRect().top - cropperRef.current.getBoundingClientRect().top)

        setXMargin(cropperRef.current.getBoundingClientRect().left - imgCropperRef.current.getBoundingClientRect().left)
        setYMargin(cropperRef.current.getBoundingClientRect().top - imgCropperRef.current.getBoundingClientRect().top)
        setMouseDown(true)
    }
    const handleMouseUp = () => {
        setMouseDown(false)
    }

    const handleImageLoad = () => {
        if (imgRef.current.naturalWidth > imgRef.current.naturalHeight) {
            imgRef.current.style.height = cropperRef.current.offsetHeight + "px"
            imgRef.current.style.top = (cropperRef.current.offsetTop - (cropperRef.current.offsetHeight / 2)) + "px"
            let extra = (imgRef.current.clientWidth - imgContainerRef.current.clientWidth)
            imgRef.current.style.left = -extra / 2 + "px"
        }

        setOriginalImageWidth(imgRef.current?.clientWidth)
        setOriginalImageHeight(imgRef.current?.clientHeight)

    }

    const resizeImage = () => {
        imgRef.current.style.width = (rangeRef.current.value / 10) * originalImageWidth + "px"
        imgRef.current.style.height = (rangeRef.current.value / 10) * originalImageHeight + "px"
        setImgWidth((rangeRef.current.value / 10) * originalImageWidth)
        setImgHeight((rangeRef.current.value / 10) * originalImageHeight)
    }

    useEffect(() => {
        setImgLeft(imgRef.current?.getBoundingClientRect().left)
        setImgTop(imgRef.current?.getBoundingClientRect().top)
        setCropperLeft(cropperRef.current?.getBoundingClientRect().left)
        setCropperTop(cropperRef.current?.getBoundingClientRect().top)

    }, [imgCropperRef.current, imgRef.current, imgHeight, imgWidth])




    useEffect(() => {
        if (mouseDown && mouseEnter) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }
        window.addEventListener('mouseup', handleMouseUp)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [mouseDown, mouseEnter])

    useEffect(() => {

        setImgWidth(imgRef.current?.offsetWidth)
        setImgHeight(imgRef.current?.offsetHeight)
        setOriginalImageWidth(imgRef.current?.clientWidth)
        setOriginalImageHeight(imgRef.current?.clientHeight)
        if (rangeRef.current) {
            rangeRef.current.value = 10
        }

    }, [modalLoaded])








    // let mouseMove = false
    // let mouseDown = false
    // let initMouseX = 0
    // let initMouseY = 0
    // let initImageX = 0
    // let initImageY = 0
    // let ratio = 1

    // const [originalImageHeight, setOriginalImageHeight] = useState(0)
    // const [originalImageWidth, setOriginalImageWidth] = useState(0)

    // let xMargin = 0
    // let yMargin = 0

    // useEffect(() => {

    // }, [])

    // useEffect(() => {
    //     xMargin=cropperRef.current.getBoundingClientRect().left-imgCropperRef.current.getBoundingClientRect().left
    //     yMargin=cropperRef.current.getBoundingClientRect().top-imgCropperRef.current.getBoundingClientRect().top
    //     imgContainerRef.current.addEventListener('mouseenter', mouseMoveOn)
    //     imgContainerRef.current.addEventListener('mouseleave', mouseMoveOff)
    //     imgContainerRef.current.addEventListener('mousedown', mouseDownOn)
    //     imgContainerRef.current.addEventListener('mouseup', mouseDownOff)
    //     window.addEventListener('mouseup', mouseDownOff)
    //     window.addEventListener('mousemove', (e) => {
    //         e.stopPropagation()
    //         if (mouseMove && mouseDown) {
    //             var x = e.clientX - initMouseX
    //             var y = e.clientY - initMouseY
    //             x = initImageX + x
    //             y = initImageY + y
    //             if (x > xMargin) x = xMargin
    //             if (y > yMargin) y = yMargin
    //             let xLimit = imgContainerRef.current.clientWidth - imgRef.current.clientWidth - xMargin
    //             let yLimit = imgContainerRef.current.clientHeight - imgRef.current.clientHeight - yMargin
    //             if (x < xLimit) { x = xLimit }
    //             if (y < yLimit) { y = yLimit }
    //             imgRef.current.style.left = x + 'px'
    //             imgRef.current.style.top = y + 'px'
    //         }
    //     })

    // }, [])




    // const resetImage = () => {
    //     if (imgRef.current.naturalWidth > imgRef.current.naturalHeight) {
    //         ratio = imgRef.current.naturalWidth / imgRef.current.naturalHeight
    //         imgRef.current.style.height = imgContainerRef.current.clientHeight - (yMargin * 2) + "px"
    //         imgRef.current.style.width = (imgContainerRef.current.clientWidth - (xMargin * 2)) * ratio + "px"

    //         imgRef.current.style.top = xMargin + "px"
    //         let extra = (imgRef.current.clientWidth - imgContainerRef.current.clientWidth)
    //         imgRef.current.style.left = -extra / 2 + "px"
    //     }
    //     rangeRef.current.value = 10
    //     setOriginalImageHeight(imgRef.current.clientHeight)
    //     setOriginalImageWidth(imgRef.current.clientWidth)
    // }
    // const resizeImage = (e) => {
    //     if (imgRef.current) {
    //         let w = imgRef.current.clientWidth
    //         let h = imgRef.current.clientHeight
    //         imgRef.current.style.width = (rangeRef.current.value / 10) * originalImageWidth + 'px'
    //         imgRef.current.style.height = (rangeRef.current.value / 10) * originalImageHeight + 'px'
    //         let w2 = imgRef.current.clientWidth
    //         let h2 = imgRef.current.clientHeight
    //         if (w - w2 != 0) {
    //             let diffW = (w - w2) / 2
    //             let diffH = (h - h2) / 2
    //             let x = (imgRef.current.getBoundingClientRect().left - imgContainerRef.current.getBoundingClientRect().left) + diffW
    //             let y = (imgRef.current.getBoundingClientRect().top - imgContainerRef.current.getBoundingClientRect().top) + diffH
    //             if (x > xMargin) x = xMargin
    //             if (y > yMargin) y = yMargin
    //             let xLimit = imgContainerRef.current.clientWidth - imgRef.current.clientWidth - xMargin
    //             let yLimit = imgContainerRef.current.clientHeight - imgRef.current.clientHeight - yMargin
    //             if (x < xLimit) { x = xLimit }
    //             if (y < yLimit) { y = yLimit }


    //             imgRef.current.style.left = x + "px"
    //             imgRef.current.style.top = y + "px"
    //         }
    //     }
    // }

    // const mouseDownOn = (e) => {
    //     mouseDown = true
    //     initMouseX = e.clientX
    //     initMouseY = e.clientY
    //     initImageX = imgRef.current.getBoundingClientRect().left - imgContainerRef.current.getBoundingClientRect().left
    //     initImageY = imgRef.current.getBoundingClientRect().top - imgContainerRef.current.getBoundingClientRect().top
    // }
    // const mouseDownOff = () => {
    //     mouseDown = false
    // }

    // const mouseMoveOn = () => {
    //     mouseMove = true
    // }
    // const mouseMoveOff = () => {
    //     mouseMove = false
    // }




    if (file) {
        return (
            <Modal className='profile-picture-selector-modal' open={isOpen} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className="top flex align-items-center justify-content-center">
                    <h3>Changer ma photo de profil</h3>
                    <div className="close-modal" onClick={() => setIsOpen(false)}>
                        <XLg />
                    </div>
                </div>
                <div className="body">
                    <div className="img-cropper" ref={imgCropperRef}>
                        <div className="img-container" ref={imgContainerRef}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <img ref={imgRef} src={`${URL.createObjectURL(file)}`} alt="" onLoad={handleImageLoad} />
                            <div className="image-filter"></div>
                            <div ref={cropperRef} className="cropper" style={{
                                background: `linear-gradient(rgb(24 24 24 / 75%),rgb(24 24 24 / 75%)),url(${URL.createObjectURL(file)})`,
                                backgroundSize: `${imgWidth}px ${imgHeight}px`,
                                backgroundPosition: `-${cropperLeft - imgLeft}px -${cropperTop - imgTop}px`,
                                backgroundRepeat: "no-repeat"
                            }}>
                                <div></div>
                            </div>
                            <div ref={cropperRef} className="cropper circle" style={{
                                background: `${URL.createObjectURL(file)}`,
                                backgroundSize: `${imgWidth}px ${imgHeight}px`,
                                backgroundPosition: `-${cropperLeft - imgLeft}px -${cropperTop - imgTop}px`,
                                backgroundRepeat: "no-repeat"
                            }}>
                                <div></div>
                            </div>
                            {/* <div className="top-right flex gap-10">
                                <button>
                                    <ArrowCounterclockwise size={19}/>
                                </button>
                                <button>
                                    <ArrowClockwise size={19}/>
                                </button>
                            </div> */}
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="bottom flex justify-content-between">
                    <div className="flex align-items-center gap-10">
                        <CheckBox />
                        <span>Recadrer</span>
                    </div>
                    <input className='image-zoom-range' ref={rangeRef} min={10} max={40} type="range" onChange={resizeImage} />
                    <button onClick={uploadProfilePicture} className="btn btn-purple">{
                        isUploading ? <CircleLoader/> : 'Enregistrer'
                    }</button>
                </div>
            </Modal>
        )
    }
}

export default ProfilePictureSelectorModal
