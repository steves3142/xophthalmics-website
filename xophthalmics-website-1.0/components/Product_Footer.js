import React from 'react'

function Product_Footer() {
    return (
        <div className="flex-row flex-start px-5 py-4 absolute w-90 h-16 bg-neutral-200 rounded-t-2xl">
            <button className="w-125 h-10 order-none flex-grow-0">
                <div className="flex-row flex-start pr-2 gap-5 w-110 h-5 left-10 top-2">
                    <div className="flex-row flex-start pl-6 pr-3">
                        <p className="flex items-center text-center">
                            $789/ month
                        </p>
                        {/* <p className="flex items-center text-center">
                            Est. Lease
                        </p> */}
                    </div>
                </div>
                <div className="absolute w-8 h-8 left-0 top-6 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-4 -3 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </button>
        </div>

    )
}

export default Product_Footer

// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 17px 19.9999px 17px 20.0001px;

// position: absolute;
// width: 531.3px;
// height: 74px;
// left: calc(50% - 531.3px/2 - 179.01px);
// top: calc(50% - 74px/2 - 1624.66px);

// background: #F4F4F4;
// border-radius: 16px 16px 0px 0px;

/* button */


// width: 491.3px;
// height: 40px;


// /* Inside auto layout */

// flex: none;
// order: 0;
// flex-grow: 0;

/* div for lease*/


/* Auto layout */

// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px 10px;
// gap: 20px;

// position: absolute;
// width: 439.3px;
// height: 21px;
// left: 42px;
// top: 9.5px;