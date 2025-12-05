import { useState } from "react"

const Choose = () => {

    const [plus, setPlus] = useState(true)
  return (
    <section className='px-5 py-10 sm:px-10 xl:px-50 3xl:px-100 lg:py-20 xl:py-40 bg-[#F7F7F7]' >
        <div className='md:flex'>
            <p className='text-4xl lg:text-5xl font-semibold mb-5'>Why Choose Digital Nomads HQ?</p>
            <p className='text-lg'>With so many digital marketing agencies to choose from, all promising the same results… <span className='underline'>Here’s what sets us Digital Nomads HQ apart and why so many local businesses engage us as their marketing partner:</span></p>
        </div>

        <div className='lg:grid grid-cols-3 gap-5 mt-5'>
            <div>
                <h3 className='text-[#F34D01] text-3xl font-semibold  mb-5'>Award-Winning Agency</h3>
                <p><span className='font-bold'>We’re an award-winning digital agency!</span> – Not once, not twice but we are proud to have been awarded over 100+ industry awards for our success in marketing.</p>
            </div>
            <div>
                <h3 className='text-[#F34D01] text-3xl font-semibold  mb-5'>Award-Winning Agency</h3>
                <p><span className='font-bold'>We’re an award-winning digital agency!</span> – Not once, not twice but we are proud to have been awarded over 100+ industry awards for our success in marketing.</p>
            </div>
            <div>
                <h3 className='text-[#F34D01] text-3xl font-semibold  mb-5'>Award-Winning Agency</h3>
                <p>Our commitment to excellence means the standards are high. <span className='font-bold'>Crazy high!… </span>Our goal is that every aspect of execution, results and communication reflects this, to ensure this standard is met, every deliverable is completed in-house by our team. </p>
            </div>
            <div>
                <h3 className='text-[#F34D01] text-3xl font-semibold  mb-5'>Award-Winning Agency</h3>
                <p>We’re an award-winning digital agency! – Not once, not twice but we are proud to have been awarded over 100+ industry awards for our success in marketing.</p>
            </div>
            <div>
                <h3 className='text-[#F34D01] text-3xl font-semibold  mb-5'>Award-Winning Agency</h3>
                <p>We’re an award-winning digital agency! – Not once, not twice but we are proud to have been awarded over 100+ industry awards for our success in marketing.</p>
            </div>
            <div>
                <h3 className='text-[#F34D01] text-3xl font-semibold  mb-5'>Award-Winning Agency</h3>
                <p>We’re an award-winning digital agency! – Not once, not twice but we are proud to have been awarded over 100+ industry awards for our success in marketing.</p>
            </div>
        </div>
        <div className='flex items-center justify-center mt-5'>
            <p onClick={() => setPlus(i => !i)} className='text-lg font-semibold cursor-pointer'>We also believe in strong business values... {plus ? "+" : "-"}</p>
        </div>
        
        { !plus &&
            <div className='lg:grid grid-cols-3 gap-5 mt-5'>
                <div>
                    <h3 className='text-3xl font-semibold  mb-5'>Relationship</h3>
                    <p><span className='font-bold'>We’re an award-winning digital agency!</span> – Not once, not twice but we are proud to have been awarded over 100+ industry awards for our success in marketing.</p>
                </div>
                <div>
                    <h3 className='text-3xl font-semibold  mb-5'>Excellence</h3>
                    <p><span className='font-bold'>We’re an award-winning digital agency!</span> – Not once, not twice but we are proud to have been awarded over 100+ industry awards for our success in marketing.</p>
                </div>
                <div>
                    <h3 className='text-3xl font-semibold  mb-5'>Integrity</h3>
                    <p><span className='font-bold'>We’re an award-winning digital agency!</span> – Not once, not twice but we are proud to have been awarded over 100+ industry awards for our success in marketing.</p>
                </div>
            </div>
        }
    </section>
  )
}

export default Choose