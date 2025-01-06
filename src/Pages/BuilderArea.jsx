import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import DataStyleSelection from '../Components/DataStyleSelection/DataStyleSelection';
import './BuilderArea.css'
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";

const BuilderArea = (props) => {
    const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

            <div id='main-box' className="flex flex-row">
                <UserDataCollect />
                <div className='w-5/12 h-fit'>
                    {props.theme}
                </div>
                <DataStyleSelection/>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>Print</Button>
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default BuilderArea
