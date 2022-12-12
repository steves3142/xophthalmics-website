import React, { useState } from 'react'

function ROI_Calculator() {
    const [dollars, setDollars]= useState(50)

    return(
        <section className="flex-row flex-start pt-11 absolute h-96 left-3.5 right-3.5 bg-teal-400 rounded-2xl">
            <div className="flex-none order-none">
                <div className="container absolute h-75 top-144">
                    <div className="absolute flex-row flex-start pt-0 gap-2.5 w-96 h-80">

                    </div>
                    <div>
                        <div>
                            <input 
                            className="w-40" 
                            type="range" 
                            value={dollars}
                            onChange={e => setDollars(Number(e.target.value))} 
                            min={0} 
                            max={100} />
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
                <div className="absolute h-80 top-52">
                    <p>
                    ** The information provided here is offered by Xenon Ophthalmics. It should not be construed as tax advice or as a promise for tax savings or reduced tax liability. Individual tax situations may vary. Federal rules and tax guidelines are subject to change. Please consult with your own personal advisers.
                    </p>
                    <break/>
                    <p>
                    * This ROI calculator is provided as-is and for reference only. This is not a guarantee of your actual ROI or results. *
                    </p>
                    <p>
                    * You may be eligible to write off the equipment purchase for your practice under Section 179 of the U.S. federal tax Code**. *
                    </p>
                </div>
            </div>
        </section>

    )
}

export default ROI_Calculator