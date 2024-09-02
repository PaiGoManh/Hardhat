import React from 'react'
import GetCertificate from './GetCertificate'
import { BrowserProvider } from 'ethers'

const App = () => {

  const provider = new BrowserProvider(window.ethereum);

  async function connectToMetamask(){
    const signer = await provider.getSigner();

  }

  return (
    <>
      <div className='flex justify-between px-[5%]'>
        <div className='mt-10 ml-4 bg-[orange] text-black w-[200px] h-10 p-2 pl-3 cursor-pointer' onClick={connectToMetamask}>
          Connect to MetaMask
        </div>
        <div className='mt-10 ml-4 bg-[orange] text-black w-[200px] h-10 p-2 pl-3'>
          <a href={GetCertificate}>Get Certificate Data</a>
        </div>
      </div>

      <div>
        <h3 className="text-center text-3xl font-bold mb-4">Issue New Certificate</h3>
        <div className="flex flex-col justify-center items-center">
          <form>
            <div className="border-2 rounded px-20">
              <div className="p-2">
                <label className="block" htmlFor="courseName">Select Course *</label>
                <select className="border-2 border-black" name="course" id="course">
                  <option>Certified Blockchain Associate</option>
                  <option>Certified Ethereum Developer</option>
                  <option>Blockchain Foundation</option>
                  <option>Ethereum Fundamentals</option>
                </select>
              </div>
              <div className="p-2">
                <label className="block" htmlFor="certificateID">Certificate ID *</label>
                <input type="text" className="border-2 border-black" name="certificateID" id="certificateID" placeholder="Certificate ID" required />
              </div>
              <div className="p-2">
                <label className="block" htmlFor="candidateName">Candidate Name *</label>
                <input type="text" className="border-2 border-black" name="name" id="name" placeholder="Name" required/>
              </div>
              <div className="p-2">
                <label className="block" htmlFor="grade">Select Grade *</label>
                <select className="border-2 border-black" id="grade" name="grade">
                  <option>S</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div className="p-2">
                <label className="block" htmlFor="date">Issue Date *</label>
                <input type="date" className="border-2 border-black" id="date" name="date" required />
              </div>
              <button className="border-2 bg-orange-700 hover:bg-orange-400 mt-6 ml-10 text-white px-4 py-2 mb-5" type="submit">Issue Certificate</button>
            </div>
          </form>
        </div>
      </div> 
    </>
  )
}

export default App
