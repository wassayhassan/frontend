import React from "react";
import { useState, useEffect } from "react";
import {Button, Modal, Checkbox, TextInput} from 'flowbite-react';
import axios from "axios";

function CollegeNameModal({collegeFil, setCollegeFil}){

    const [show, setShow] = useState(false);
    const [collegeFilters, setCollegeFilters] = useState([]);
   function onClick(){
    setShow(!show);
    if(!show){
       getCollegeFilters();
    }
    }
  function onClose(){
    setShow(false);
  }
  function handleCollegeWeightChange(e){
      console.log(e.target.value);
  }
  function handleFilterChange(e){
      let name = e.target.name;
      if(e.target.checked){
          setCollegeFil(prev=> {
          return  prev.concat(name);
          })
      }else{
        setCollegeFil(prev=> {
            prev.filter((colls)=> colls !== name);
        })
      }
  }
  function handleSelectAllChange(e){
    setCollegeFil([]);
    if(e.target.checked){
        collegeFilters.forEach((collegeFilter)=> {
            setCollegeFil((prev)=> prev.concat(collegeFilter.College));
        })
    }
   setTimeout(()=> {
    console.log(collegeFil)
   }, 2000);
  }

  function getCollegeFilters(){
    axios.get('/api/college/names/getall').then((response)=> {
        setCollegeFilters(response.data);
        console.log(response.data)
    })
  }



    return (
        <>
            <Button onClick={onClick}>
                Add College Filters
            </Button>
            <Modal
                show={show}
                onClose={onClose}
            >
                <Modal.Header>
                Select Colleges
                </Modal.Header>
                <Modal.Body>
                <div className="space-y-6">

                    <div className="h-96 overflow-y-scroll">
                               <div className="flex flex-row justify-start gap-2 w-60">
                                    <Checkbox id='all' name="all" onChange={handleSelectAllChange} />
                                    <p className="text-md font-semibold">
                                    Select All
                                    </p>
                                </div>
                        {collegeFilters.map(collegefilter=> {
                            return(
                            <div className="flex flex-row justify-between" key={collegefilter._id}>

                                <div className="flex flex-row justify-start gap-2 w-60">
                                    <Checkbox id={collegefilter.College} name={collegefilter.College} checked={collegeFil.includes(collegefilter.College)} onChange={handleFilterChange} />
                                    <p className="text-md font-semibold">
                                    {collegefilter.College}
                                    </p>
                                </div>
                                <div className="w-20 h-6">
                                <TextInput
                                        id="collegeweight"
                                        type="number"
                                        value={collegefilter.Weight}
                                        onChange={handleCollegeWeightChange}
                                        required={true}
                                    />
                                </div>
                            </div>
                            )
                        })}
                    </div>



                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={onClick}>
                    Save Changes
                </Button>
                <Button
                    color="gray"
                    onClick={onClick}
                >
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </>
    )
}
export default CollegeNameModal;