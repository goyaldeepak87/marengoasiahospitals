import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className='bg-[#007dc6] '>
                <section className="max-w-screen-xl mx-auto px-4 sm:py-10 py-5 sm:pb-10 pb-6">
                    <div className="container mx-auto">
                        <div className="sec-title mb-8">
                            <h2 className="text-white text-3xl font-bold text-center colorsubtitle subtitle">Our Locations</h2>
                        </div>
                        <div className="divderline grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Location 1 */}
                            <div className="mb-4">
                                <div className="footer-widget">
                                    <h4 className="text-white mb-2 sm:text-xl text-[19px] font-medium ">Marengo CIMS Hospital, Ahmedabad</h4>
                                    <p className="text-white md:text-base text-[14px] mb-3">Off, Science City Rd, Science City, Panchamrut Bunglows II, Sola, Ahmedabad, Gujarat 380060</p>
                                </div>
                                <div className="flex footer_logo items-center center; space-x-2">
                                    <Image
                                        src="/ceti1.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                    <Image
                                        src="/ceti2.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                    <Image
                                        src="/ceti3.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                    <Image
                                        src="/cert4.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                </div>
                            </div>
                            {/* Location 2 */}
                            <div className="mb-4">
                                <div className="footer-widget">
                                    <h4 className="text-white mb-2 sm:text-xl text-[19px] font-medium ">Marengo Asia Hospitals, Faridabad</h4>
                                    <p className="text-white md:text-base text-[14px] mb-3">Plot No.1, HUDA Staff Colony, Sector 16, Faridabad, Haryana 121002</p>
                                </div>
                                <div className="flex items-center footer_logo space-x-2">
                                    <Image
                                        src="/ceti1.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                    <Image
                                        src="/ceti2.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                </div>
                            </div>
                            {/* Location 3 */}
                            <div className="mb-4">
                                <div className="footer-widget">
                                    <h4 className="text-white mb-2 sm:text-xl text-[19px] font-medium">Marengo Asia Hospitals, Gurugram</h4>
                                    <p className="text-white md:text-base text-[14px] mb-3">Golf Course Ext Rd, Sushant Lok II, Sector 56, Gurugram, Ghata, Haryana 122011</p>
                                </div>
                                <div className="flex items-center footer_logo space-x-2">
                                    <Image
                                        src="/ceti1.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                    <Image
                                        src="/ceti3.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                </div>
                            </div>
                            {/* Location 4 */}
                            <div className="mb-4 dividerlinenone">
                                <div className="footer-widget">
                                    <h4 className="text-white mb-2 sm:text-xl text-[17px] font-medium">KK Patel Super Speciality Hospital, Bhuj <br /> (Managed by Marengo CIMS Hospitals)</h4>
                                    <p className="text-white md:text-base text-[14px] mb-3">Bhuj, Mundra Road University, Kutch, Bhuj, Gujarat, 370001</p>
                                </div>
                                <div className=" flex items-center footer_logo space-x-2">
                                    <Image
                                        src="/ceti1.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                    <Image
                                        src="/ceti3.png"
                                        alt="logo"
                                        width={100} // or any specific width in pixels
                                        height={100} // or any specific height in pixels
                                        className="sm:w-[15%] sm:h-[15%] w-[17%] h-[17%] object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="footer-copyright bg-[#1b4e9b] footer-copyright-style-2 pt-1 pb-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="mb-0 text-white text-[13px] pt-1 pb-1"> Copyright © <span className="current-year text-white">2025</span> |
                                Marengo Asia Hospitals. | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
