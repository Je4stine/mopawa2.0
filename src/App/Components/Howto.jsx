import Usage from '../Assets/slider1.jpg'

const Howto =()=>{
    return (
        <>
        <div className=' flex justify-evenly flex-1 max-[768px]:flex-col'>
            <div className=" flex flex-col items-center justify-center bg-gray-100 max-[768px]:p-3">
                <h1>
                    Ultra Easy to Use
                </h1>
                <p className=" text-center max-[768px]:text-sm">
                A shared power bank rental station is the most convenient way to charge your phone when you’re out nowadays. <br /> All you need to do is scan the code on the machine, then get the power bank and start charging. You’re free to go anywhere instead of sticking around the socket while charging.
                When you finish charging, return the power bank to the nearest station; <br/> You don’t have to return to where you borrowed the power bank.<br/>
                </p>
                <p className=' max-[768px]:tetx-sm'>
                Step 1: Pay the security deposit <br />
                Step 2: Take the power bank and start charging <br />
                Step 3: Return the power bank to the nearest station ,<br />
                </p>
            </div>
            <div className=' w-full'>
                <img src={Usage} alt="Usage"/>
            </div>
        </div>

        <div className=' flex justify-evenly flex-1 max-[768px]:flex-col-reverse '>
            <div className=' w-full'>
                        <img src={Usage} alt="Usage"/>
             </div>
            <div className=" flex flex-col items-center justify-center bg-gray-100 max-[768px]:p-3">
                <h1 className=' max-[768px]:text-center'>
                Drive more customers to the business
                </h1>
                <p className=" text-center max-[768px]:text-sm">
                Businesses must offer their location on the charge application so customers can find them.<br/> When customers search for power bank rental stations to borrow or return a power bank, this greatly increases the probability of a customer visiting the business with a charging device. And it could increase the dwell time in their store while charging.
                </p>
            </div>
        </div>
        </>
    )
}

export default Howto;