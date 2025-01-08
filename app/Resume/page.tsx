import Artboard from '@/Components/center/Artboard'
import LeftSidebar from '@/Components/left/LeftSidebar'
import RightSidebar from '@/Components/right/RightSidebar'
const BuilderArea = () => {
    return (
        <>
            <div className="flex flex-row">
                <LeftSidebar />
                <div className='w-5/12 h-fit'>
                    <Artboard/>
                </div>
                <RightSidebar/>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <button className='mx-2 my-5'  onClick={handlePrint}>Print</button>
                <button className='mx-2 my-5'  onClick={handleSelectNewTemplate}>Select Another Template</button>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default BuilderArea