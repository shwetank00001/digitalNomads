import Remark from '../../../public/Remarkable-Marketing.svg'
import Crop from '../../../public/crop.jpg'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MoveRight } from 'lucide-react'

const First = () => {
  return (
    <div className='px-5 py-10 sm:px-10 xl:px-50 3xl:px-100 lg:py-20 xl:py-40' >
        <div className='flex justify-between gap-20'>
            <section className='flex flex-col '>
                <img className='rounded-2xl w-full h-full -rotate-6' src={Crop}/>
                <img className='rounded-2xl  mr-15 w-full h-full rotate-10' src={Crop}/>
            </section>

            <section>
                <div className='flex flex-col items-center'>
                    <div className='flex'>
                        <Input className="rounded-4xl w-100 border-black p-1" />
                    </div>
                    <div className='h-70 mt-5'>
                        <img className='w-full h-full' src={Remark} />
                    </div>
                    <div className='text-3xl font-semibold'>
                        Sunshine Coast digital marketing agency that gets your business results! <span className='text-neutral-600'>A digital marketing partnership for success.</span>
                    </div>
                    <div className='mt-5 flex items-center gap-5 '>
                        <Button className="bg-orange-600 rounded-4xl p-8 text-xl">Get A Proposal</Button>
                        <Button className='underline font-semibold text-xl'>Meet our team <span>🡲</span></Button>  
                    </div>
                </div>
            </section>

            <section className='flex flex-col '>
                <img className='rounded-2xl  w-full h-full rotate-6' src={Crop}/>
                <img className='rounded-2xl ml-10 w-full h-full -rotate-10' src={Crop}/>
            </section>
            
        </div>
        <footer>
            <div className='mt-10 flex justify-between text-lg font-semibold'>
                <p>150+ Real Results</p>
                <p className=''>📈 39.1% increase in organic traffic in 6 months - National Franchise</p>
                <p>🙌 "Shwetank HQ has helped us grow incredibly fast!" - Local Small Business</p>
                <p>🌟 "Brilliant Services, Highly Professional." - Healthcare Organisation</p>
                <p>🚀 x21 Targeted Keywords Now In Top #3 Position - Construction Company</p>
            </div>
        </footer>
    </div>
  )
}

export default First