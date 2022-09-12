import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { Select, Checkbox, Label, TextInput } from "flowbite-react";
function DistrictModal({setDistrictFilter, districtFilter}){
  const [show, setShow] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [branches, setBranches] = useState([]);
  const [branchNames, setBranchNames] = useState([]);

  useEffect(()=> {
    setDistrictFilter([]);
    districts.forEach((district)=> {
        let name = district.District;
        setDistrictFilter(prev=> {
            return [...prev, {name: name,branches: branchNames}]
        })
    })
  }, [branches, districts]);

  function handleDistrictWeightChange(e){
    console.log(e.target.value);
  }


  function getAllDistricts(){
    axios.get('/api/districts/getall').then((response)=> {
      setDistricts(response.data);
    }).catch(err=> {
      console.log(err);
    })
  }
  function getAllBranches(){
    axios.get('/api/branches/getall').then((response)=> {
      setBranches(response.data);
      response.data.forEach((bran)=> {
        setBranchNames(prev=> prev.concat(bran.Branch_Name));


      })
    })
  }

  function onClick(){
    setShow(!show);
  }
  function onClose(){
    setShow(false);
  }
  function handleDistrictChange(e){
    let name = e.target.id;
    if(e.target.checked){
        console.log('checked true');
        setDistrictFilter(prev=> {
          return   [...prev, {name: name, branches: []}]
             }
            );
    }else{
        setDistrictFilter(prev=> {
            return prev.filter((dis)=> dis.name !== name);
        })
    }
    setTimeout(()=> {
        console.log(districtFilter)
    }, 1500);
  }
  function handleBranchChange(e){
    let name = e.target.name;
    let value = e.target.value;

    setDistrictFilter(prev=> {
        return prev.filter((obj)=> obj.name !== name);
    })
    if(value === 'selectall'){
        console.log('selectall')
        setDistrictFilter(prev=> {
            return [...prev, {name: name,branches: branchNames}]
        })
    }else{
        setDistrictFilter(prev=> {
            return [...prev, {name: name,branches: [value]}]
        })
    }

    setTimeout(()=> {
        console.log(districtFilter)
    }, 1500);
  }

  useEffect(()=> {
    getAllDistricts();
    getAllBranches();

  }, [])

    return (
        <React.Fragment>
        <Button onClick={onClick}>
          Select District
        </Button>
        <Modal
          show={show}
          onClose={onClose}
        >
          <Modal.Header>
            Select District and Branches
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
            <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white text-left">
                Select a District
                </p>
                <div className="h-96 overflow-y-scroll">
                  {districts.map((district, idx)=> {
                    return (
                    <div className="flex gap-2 flex-col border-gray-200 m-1 border-2 p-1 rounded-md" key={district._id}>
                        <div className="flex flex-row justify-between gap-2">
                            <div className="flex flex-row justify-start gap-2">
                                <Checkbox id={district.District} name={district.District} checked={districtFilter.find(fil=> fil.name === district.District)} onChange={handleDistrictChange}/>
                                <p className="text-md font-semibold">
                                {district.District}
                                </p>
                            </div>

                            <div className=" flex flex-row">
                                <p className="font-semibold mx-2">District Weight</p>
                            <TextInput
                                id="districtWeight"
                                type="number"
                                value={district.Weight}
                                required={true}
                                color="blue"
                                onChange = {handleDistrictWeightChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className=" font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                                    Select a Branch
                                    </p>
                                <Select
                                id="branches"
                                required={true}
                                name={district.District}
                                onChange= {handleBranchChange}
                                >
                                <option key={-1} id="-01" value="selectall">Select All</option>
                                {branches.map((branch, idx)=> {
                                    return <option key={idx} value={branch.Branch_Name}>{branch.Branch_Name}</option>
                                })}

                            </Select>
                            
                            <div className="flex flex-row justify-end">
                                <p className="font-semibold mx-2">Branch Weight</p>
                            <TextInput
                                id="branchWeight"
                                type="number"
                                value="0"
                                required={true}
                                color="blue"
                                onChange = {handleDistrictWeightChange}
                                />
                            </div>
                        </div>
                      
                  </div>
                    )
                  })}

                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onClick}>
              I accept
            </Button>
            <Button
              color="gray"
              onClick={onClick}
            >
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
}
export default DistrictModal;