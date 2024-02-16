import React from "react"
import './JobDetails.scss'
import { Save, Folder } from 'react-bootstrap-icons'
import Logo from "../../components/Logo/Logo"

const JobDetails = () => {
    return (
        <main id="job-detail">
            <div className="container">
                <div className="cover-image">

                </div>

                <div className="main-content">

                    <div>
                        <Logo width={60} height={60} />
                        <h1 >Nom du poste</h1>
                        <h4>Nom du company</h4>
                        <div className="location-date-actions flex justify-content-between align-items-center">
                            <div>
                                <span>Emplacement</span>
                                <span> - </span>
                                <span>Date</span>
                            </div>
                            <div className="flex align-items-center">
                                <button className="btn btn-transparent">
                                    <Save size={20} className="mr-10" />
                                    Sauvegarder
                                </button>
                                <button className="btn btn-purple ml-10">Postuler</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-content-between">
                    <div className="flex flex-column flex-2 gap-5">
                        <div className="card about-job">
                            <div>
                                <h3>Apropos du poste</h3>
                                <p className="mt-10">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eos aliquid vel, recusandae quaerat magni vitae doloribus excepturi illum repellendus placeat sunt nulla, saepe veritatis. Culpa iste porro voluptas! Fuga quaerat provident quis doloribus recusandae debitis reprehenderit quae ab itaque.
                                </p>
                            </div>
                            <div className="mt-20">
                                <h4 >Responsabilités : </h4>
                                <div className="mt-5">
                                    <ul >
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, possimus.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, possimus.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, possimus.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, possimus .</li>
                                    </ul>
                                </div>
                                <p>lorem*1000</p>
                            </div>
                            <div className="mt-20">
                                <h4 > Skills : </h4>
                                <div className="flex align-items-center mt-10">
                                    <span className="skill">Lorem.</span>
                                    <span className="skill">Lorem.</span>
                                    <span className="skill">Lorem.</span>
                                </div>
                            </div>
                        </div>
                        <div className="card about-company">
                            <h3 className="mb-15">A propos du société</h3>
                            <div>
                                <div className="flex align-items-center">
                                    <div className="p-30">
                                        <div className="company-image">
                                            <img src="/img/test/image_test.jpg" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-5">Nom du société</h4>
                                        <span className="text-grey"> 1,000,000 followers</span>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quo at repellendus perferendis soluta, debitis enim provident natus! Rerum nihil, id a beatae similique ratione fuga facilis dolor reprehenderit, odit, quos laudantium quae sequi dicta soluta autem. Tempora dolorum necessitatibus, ipsam laudantium vel veniam aliquid, quisquam perferendis, quibusdam nulla cum.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-column flex-1 gap-10">
                        <div className="card job-specific">
                            <h3>2,5 MAr</h3>
                            <span className="block mt-10">Salaire à peu pres </span>
                            <div>
                                <div className="flex align-items-center mt-20">
                                    <div className="flex px-20 align-items-center">
                                        <Folder size={15} />
                                    </div>
                                    <div>
                                        <h4>Lorem ipsum dolor sit amet.</h4>
                                        <p className="text-grey">Lorem ipsum dolor sit amet, </p>
                                    </div>
                                </div>
                                <div className="flex align-items-center mt-20">
                                    <div className="flex px-20 align-items-center">
                                        <Folder size={15} />
                                    </div>
                                    <div>
                                        <h4>Lorem ipsum dolor sit amet.</h4>
                                        <p className="text-grey">Lorem ipsum dolor sit amet, </p>
                                    </div>
                                </div>
                                <div className="flex align-items-center mt-20">
                                    <div className="flex px-20 align-items-center">
                                        <Folder size={15} />
                                    </div>
                                    <div>
                                        <h4>Lorem ipsum dolor sit amet.</h4>
                                        <p className="text-grey">Lorem ipsum dolor sit amet, </p>
                                    </div>
                                </div>
                                <div className="flex align-items-center mt-20">
                                    <div className="flex px-20 align-items-center">
                                        <Folder size={15} />
                                    </div>
                                    <div>
                                        <h4>Lorem ipsum dolor sit amet.</h4>
                                        <p className="text-grey">Lorem ipsum dolor sit amet, </p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-20 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quibusdam!</p>
                        </div>

                        <div className="card lastest-job">
                            <h3>Postes récentes</h3>
                            <span className="block mt-10">90 postes </span>
                            <div className="items mt-5">
                                <div className="item mt-20">
                                    <h4 className="mb-5">Nom emploi Lorem, ipsum.</h4>
                                    <div className="flex align-items-center text-grey">
                                        <div className="company-image mr-10 ">
                                            <img src="/img/test/image_test.jpg" />
                                        </div>
                                        <span className="block">Nom company</span>
                                        <span className="block mx-5">•</span>
                                        <span className="block">Emplacement</span>
                                    </div>
                                </div>
                                <div className="item mt-20">
                                    <h4 className="mb-5">Nom emploi Lorem, ipsum.</h4>
                                    <div className="flex align-items-center text-grey">
                                        <div className="company-image mr-10 ">
                                            <img src="/img/test/image_test.jpg" />
                                        </div>
                                        <span className="block">Nom company</span>
                                        <span className="block mx-5">•</span>
                                        <span className="block">Emplacement</span>
                                    </div>
                                </div>
                                <div className="item mt-20">
                                    <h4 className="mb-5">Nom emploi Lorem, ipsum.</h4>
                                    <div className="flex align-items-center text-grey">
                                        <div className="company-image mr-10 ">
                                            <img src="/img/test/image_test.jpg" />
                                        </div>
                                        <span className="block">Nom company</span>
                                        <span className="block mx-5">•</span>
                                        <span className="block">Emplacement</span>
                                    </div>
                                </div>
                                <div className="item mt-20">
                                    <h4 className="mb-5">Nom emploi Lorem, ipsum.</h4>
                                    <div className="flex align-items-center text-grey">
                                        <div className="company-image mr-10 ">
                                            <img src="/img/test/image_test.jpg" />
                                        </div>
                                        <span className="block">Nom company</span>
                                        <span className="block mx-5">•</span>
                                        <span className="block">Emplacement</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-content-center">
                                <button className="btn btn-transparent btn-see-all">Voir tous les postes sur cet société</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default JobDetails;