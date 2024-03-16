import React, { useRef, useState, Fragment } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {InformationCircleIcon, PlusCircleIcon, ColorSwatchIcon, MinusCircleIcon} from '@heroicons/react/outline'
import { SketchPicker } from 'react-color';
import { Popover, Transition } from '@headlessui/react';
 

const AddListing = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  
  const [options, setOptions] = useState(false); 

  //options  
  const [colorOptionTemp, setColorOptionTemp] = useState({colorName:"", colorCode:"", colorQuantity:1, colorPrice:0});
  const [colorOptions, setColorOptions] = useState([]);
  
  const [sizeOptionTemp, setSizeOptionTemp] = useState({colorCode:"", size:"", icon:"", sizeQuantity:""}); 
  const [sizeOptions, setSizeOptions] = useState([]); 
 
  const [customOptionTemp, setCustomOptionTemp] = useState({colorCode:"", optionName:"", icon:"", customOptionQuantity:""});
  const [customOptions, setCustomOptions] = useState([]);

  const [colorInput, setColorInput] = useState(false); 
  const optionName = "";
  const icon = "";

  
  function handleOptionSubmit(event, option){ 
    event.preventDefault();  
    console.log(event);
    const [name, value] = event.target;
    console.log(event.target);
    switch(option){
      case "color":
        setColorOptions(oldArray => [...oldArray, {colorName:colorOptionTemp.colorName, colorCode:colorOptionTemp.colorCode, colorQuantity:colorOptionTemp.colorQuantity, colorPrice:colorOptionTemp.colorPrice}]);       
        break; 
      case "size":
        setSizeOptions(oldArray => [...oldArray, {colorCode:"", size:sizeOptionTemp.size, icon:"", sizeQuantity:sizeOptionTemp.sizeQuantity }]);
        break; 
      case "custom":
        setCustomOptions(oldArray => [...oldArray, {optionName:customOptionTemp.optionName, icon:customOptionTemp.icon}]);
        break;
    } 
  };



  function handleOptionChange(data, option){ 
    let [name, value] = ["",""]; 
    if(data.target !== undefined){
      data.preventDefault();  
      [name, value] = [data.target.name, data.target.value];
    }else{
      [name, value] = data;
    } 

    switch(option){
      case "color":
        setColorOptionTemp
        (
          prevColorOptionTemp => {
            return {...prevColorOptionTemp, [name]: value}
          }
        );   
        break; 
      case "size":
        setSizeOptionTemp
        (
          prevSizeOptionTemp => {
            return {...prevSizeOptionTemp, [name]: value}
          }
        ); 
        break; 
      case "custom":
        setCustomOptionTemp
        (
          prevCustomOptionTemp => {
            return {...prevCustomOptionTemp, [name]: value}
          }
        ); 
        //setCustomOptions(oldArray => [...oldArray, {optionName:"", icon:""}]);
        break;
    } 
  };

  const removeOption = (optionType, index) => {
    console.log(index);
    if(optionType==="color"){
      if(index === "all"){
        setColorOptions([]);
      }else{
        setColorOptions((prevState) => {
          return [...prevState.slice(0,index), ...prevState.slice(index+1)]
        });
      }
    }else if(optionType==="size"){ 
      if(index === "all"){
        setSizeOptions([]);
      }else{
        setSizeOptions((prevState) => {
          return [...prevState.slice(0,index), ...prevState.slice(index+1)]
        });
      } 
    }else{ 
      if(index === "all"){
        setCustomOptions([]);
      }else{
        setCustomOptions((prevState) => {
          return [...prevState.slice(0,index), ...prevState.slice(index+1)]
        });
      } 
    } 
  }

  const handleOptionToggleChange = (event) => {
    setOptions(event.target.value);
  }

 console.log(colorOptionTemp);
 console.log(colorOptions);
 
/*
const handleColorOptionChange = (event) => {
  setColorOptionTemp((prevColorOptionTemp)=>{
    return 
  })
}



  console.log(colorOptions);
  const [colorValue, setColorValue] = useState ("#ddd");
  const handleColorChange = (color) => {
    setColorValue(color.hex);
  };


  const handleOptionNameChange = (event) => {
    const value = event.target.value; 
    setColorOptions(
     [{"colorName": value, "colorValue": colorValue}]
    );
  }
*/
















      return(
        <div className="block bg-slate-100 w-screen m-3 px-5 py-7 rounded-2xl overflow-y-scroll">
          <form>  
              <div className="grid grid-cols-2">
                <div className="mb-3 p-2 col-span-2 md:col-span-1">
                  <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Item/Service Name</label>
                  <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Item/Service Name" required/>
                </div>
                <div className="mb-3 p-2 col-span-2 md:col-span-1">
                  <label htmlFor="category" className="block mb-2 text-md font-medium text-gray-700 ">Category</label>
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                  <option>Select Category:</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                  </select> 
                </div>
              </div> 
            <div className="grid col-span-1 mt-4">
                <div className="col-span-2 bg-white p-5 mx-2 rounded-lg">
                    Ad
                </div>
            </div> 
            
            <div className="grid grid-cols-2"> 
              <div className="mb-3 p-2 col-span-2 md:col-span-1">
                <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Product/Service Search Tags</label>
                <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Product/Service Search Tags" required/>
              </div> 
              <div className="mb-3 p-2 col-span-2 md:col-span-1">
                  <label htmlFor="basePrice" className="block mb-2 text-md font-medium text-gray-700 ">Item/Service Base Price</label>
                  <input type="number" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Item/Service Name" required/>
                </div>
            </div> 

            <div className="grid grid-cols-2"> 
               <div className="mb-3 p-2 col-span-2 md:col-span-1" >
                  <label htmlFor="options" className="block mb-2 text-md font-medium text-gray-700 ">Does This Listing Have a Option?</label>
                  <select 
                  value={options}
                  onChange={handleOptionToggleChange} id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                    <option value={'no selection'}>Does This Listing Have Multiple Option?</option>
                    <option value={'yes'}>yes</option>
                    <option value={'no'}>no</option> 
                  </select> 
                </div>
            </div>  
          </form>
          {
          options === 'yes' &&
          <> 
          {/* COLOR OPTION SECTION */} 
            <div className="bg-slate-300 rounded-lg">
              <div className="flex justify-between w-full p-3">
                <h1 className="text-slate-700 w-1/2 sm:w-auto text-base sm:text-md md:text-lg font-bold my-auto">
                  COLOR OPTION SECTION
                </h1>
                {colorOptions.length !== 0 && 
                  <> 
                    <button onClick={()=>removeOption("color","all")} className="flex my-auto bg-red-300 rounded-lg p-1 text-xs">
                      <MinusCircleIcon className="h-4 my-auto pr-1"/>Clear Section 
                    </button> 
                  </>
                }
              </div>
              {colorOptions.length !== 0 && 
                <>
                  {
                    colorOptions.map((colorOption, index)=>{
                        return(
                          <div key={index} className="relative grid grid-cols-6 mb-4 p-3 border-t">
                            <div className="mb-3 p-2 col-span-6 md:col-span-2">
                              <label htmlFor="colorName" className="block mb-2 text-md font-medium text-gray-700 ">Color Name</label>
                              <input type="text" style={{background:"#E6F7FF"}} value={colorOption.colorName} id="colorName" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 " readOnly/>
                            </div>
                            <div className="mb-3 p-2 col-span-6 md:col-span-2">
                              <label htmlFor="colorCode" className="block mb-2 text-md font-medium text-gray-700 ">Color Code</label>
                              <div className="relative">
                                <input type="text" style={{background:"#E6F7FF"}} value={colorOption.colorCode} name="colorCode" id="colorCode" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3" readOnly/> 
                                <ColorSwatchIcon style={{color:`${colorOption.colorCode !== "" ? colorOption.colorCode:"black"}`}} className="w-5 absolute top-3 right-3"/> 
                              </div>
                            </div> 
                            <div className="mb-3 p-2 col-span-6 md:col-span-1">
                              <label htmlFor="colorOptionQuantity" className="block mb-2 text-md font-medium text-gray-700 ">Quantity</label>
                              <input type="text" style={{background:"#E6F7FF"}} value={colorOption.colorQuantity} id="colorOptionQuantity" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 " readOnly/>
                            </div>
                            <div className="mb-3 p-2 col-span-6 md:col-span-1">
                              <label htmlFor="colorOptionPrice" className="block mb-2 text-md font-medium text-gray-700 ">Price</label>
                              <input type="text" style={{background:"#E6F7FF"}} value={colorOption.colorPrice} id="colorOptionPrice" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 " readOnly/>
                            </div>
                            <div className="absolute right-0 mb-3 p-2" > 
                              <button onClick={()=>removeOption("color",index)} className="flex my-auto justify-center p-1 w-full rounded-lg bg-red-300 "><MinusCircleIcon className="h-4 my-auto px-1"/> 
                              </button>
                            </div>
                          </div>  
                        )
                    }) 
                  }
                </>
              }
              <form onSubmit={(event)=>{handleOptionSubmit(event,"color")}}>
                <div className="grid grid-cols-4 mb-4 p-3 border-t">
                  <div className="mb-3 p-2 col-span-4 lg:col-span-1">
                    <label htmlFor="colorName" className="block mb-2 text-md font-medium text-gray-700 ">Color Name</label>
                    <input 
                      onChange={(event) => handleOptionChange(event,"color")}
                      type="text"  
                      name="colorName"
                      id="colorName" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " 
                      placeholder="Color Name" 
                      required
                    />
                  </div>
                  <div className="mb-3 p-2 col-span-4 lg:col-span-1">
                    <label htmlFor="colorCode" className="block mb-2 text-md font-medium text-gray-700 ">Color Code</label>
                      <Popover className="relative"> 
                        <Popover.Button>
                          <input 
                          type="text" 
                          value={colorOptionTemp.colorCode}  
                          className="bg-gray-50 absolute top-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" 
                          required
                          readOnly
                          /> 
                          <ColorSwatchIcon style={{color:`${colorOptionTemp.colorCode !== "" ? colorOptionTemp.colorCode:"black"}`}} className="w-5 absolute top-3 right-3"/> 
                        </Popover.Button> 
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-500"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        > 
                          <Popover.Panel className="absolute top-12">
                            <SketchPicker 
                              color={colorOptionTemp.colorCode}
                              onChange={(color) => handleOptionChange(["colorCode", color.hex], "color")}
                            /> 
                          </Popover.Panel> 
                        </Transition> 
                      </Popover> 
                  </div>
                  <div className="mb-3 p-2 col-span-4 lg:col-span-1">
                    <label htmlFor="colorOptionQuantity" className="block mb-2 text-md font-medium text-gray-700 ">Quantity</label>
                    <div className="flex my-auto space-x-2">
                      <div onClick={(event) => handleOptionChange(["colorQuantity", colorOptionTemp.colorQuantity !==1 ? colorOptionTemp.colorQuantity - 1 : 1],"color")} className="cursor-pointer hover:bg-slate-200 my-auto py-1 px-2.5 bg-slate-400 rounded-md">-</div>
                      <input  
                        type="text"  
                        name="colorQuantity"
                        id="colorQuantity" 
                        value={colorOptionTemp.colorQuantity}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " 
                        placeholder="Quantity" 
                        required
                      />
                      <div onClick={(event) => handleOptionChange(["colorQuantity", colorOptionTemp.colorQuantity + 1],"color")} className="cursor-pointer hover:bg-slate-200 my-auto py-1 px-2.5 bg-slate-400 rounded-md">+</div>
                    </div> 
                  </div>

                  <div className="mb-3 p-2 col-span-4 lg:col-span-1">
                    
                    <div className="flex">
                      <label htmlFor="colorPrice" className=" mb-2 text-md font-medium text-gray-700 ">Price</label>
                      <p className="font-thin text-sm m-0.5"> - Base: $12,000</p>
                    </div>
                    <div className="flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3 " >
                      <span className="pr-1">$</span>
                      <input 
                        onChange={(event) => handleOptionChange(event, "color")}
                        type="text"  
                        name="colorPrice"
                        id="colorPrice" 
                        className="bg-gray-50 border-0 w-28" 
                        placeholder="0" 
                        required
                      />
                    </div>
                    
                  </div>
                   
                  <div className="mb-3 p-2 col-span-4 justify-center" > 
                    <button type="submit" name="addOption" className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">
                      Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                    </button>
                  </div>
                </div>  
              </form>
            </div> 

 
            <div className="bg-slate-300 rounded-lg">
              <div className="flex justify-between w-full p-3">
                <h1 className="text-slate-700 w-1/2 sm:w-auto text-base sm:text-md md:text-lg font-bold my-auto">
                  SIZE OPTION SECTION
                </h1>
                {sizeOptions.length !== 0 && 
                  <> 
                    <button onClick={()=>removeOption("size","all")} className="flex my-auto bg-red-300 rounded-lg p-1 text-xs">
                      <MinusCircleIcon className="h-4 my-auto pr-1"/>Reset Section 
                    </button> 
                  </>
                }
              </div>
              {sizeOptions.length !== 0 && 
                <>
                  {
                    sizeOptions.map((sizeOption, index)=>{
                        return(
                          <div key={index} className="grid grid-cols-4 mb-4 p-3 border-t">
                          {colorOptions.length !== 0 &&
                            <div className="mb-3 p-2 col-span-2 lg:col-span-1">
                              <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Color</label>
                              <input type="text" id="listingName" value={sizeOption.sizeName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Size Option" required/>
                            </div> 
                          }
                            <div className="mb-3 p-2 col-span-2 lg:col-span-1">
                              <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Size Option</label>
                              <input type="text" id="listingName" value={sizeOption.sizeName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Size Option" required/>
                            </div> 
                            <div className="mb-3 p-2 col-span-2 lg:col-span-1 justify-center" >
                              <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                              <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
                            </div> 
                            <div className="mb-3 p-2 col-span-2 lg:col-span-1">
                              <label htmlFor="colorOptionQuantity" className="block mb-2 text-md font-medium text-gray-700 ">Quantity</label>
                              <input type="text" style={{background:"#E6F7FF"}} value={sizeOption.quantity} id="colorOptionQuantity" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 " readOnly/>
                            </div>
                            <div className="mb-3 p-2 col-span-4 lg:col-span-1 justify-center" >
                              <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                              <button onClick={()=>removeOption("size",index)} className="flex justify-center p-2.5 w-full rounded-lg bg-red-300" >Remove Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                                {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                              </button>
                            </div>
                          </div>  
                        )
                    }) 
                  }
                </>
              }
              <form onSubmit={(event)=>{handleOptionSubmit(event,"size")}}> 
                <div className="grid grid-cols-4 mb-4 p-3 border-t">
                {
                  colorOptions.length !== 0 &&
                  <div className="mb-3 p-2 col-span-4 lg:col-span-1">
                    <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Color Option</label>
                    <select 
                      id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                      <option value={'no selection'}>Select Color of Size</option>
                      {
                        colorOptions.map((colorOption, index)=>{
                          return( 
                            <option key={index} value={colorOption.colorName}>{colorOption.colorName}</option>
                          );
                        })
                      } 
                    </select> 
                  </div> 
                }
                  <div className={`mb-3 p-2 col-span-4 ${colorOptions.length !== 0 ? "lg:col-span-1" : "lg:col-span-2"}`}>
                    <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Size Option</label>
                    <input 
                      onChange={(event) => handleOptionChange(event,"size")}
                      value={sizeOptions} 
                      type="text"
                      id="listingName" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                      placeholder="Size Option" 
                      required/>
                  </div>  
                  <div className="mb-3 p-2 col-span-4 lg:col-span-1">
                    <label htmlFor="colorOptionQuantity" className="block mb-2 text-md font-medium text-gray-700 ">Quantity</label>
                    <div className="flex my-auto space-x-2">
                      <div className="cursor-pointer hover:bg-slate-200 my-auto py-1 px-2.5 bg-slate-400 rounded-md">-</div>
                      <input 
                        onChange={(event) => handleOptionChange(event,"size")}
                        type="text"  
                        name="sizeQuantity"
                        id="sizeQuantity" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " 
                        placeholder="Quantity" 
                        required
                      />
                      <div className="cursor-pointer hover:bg-slate-200 my-auto py-1 px-2.5 bg-slate-400 rounded-md">+</div>
                    </div>
                  </div>

                  <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                    <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                    <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
                  </div>

                  <div className="mb-3 p-2 col-span-4 lg:col-span-4 justify-center"> 
                    <button  className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                      {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                    </button>
                  </div>
                </div>  
              </form>
            </div> 


            <div className="bg-slate-300 rounded-lg">
              <div className="flex justify-between w-full p-3">
                <h1 className="text-slate-700 w-1/2 sm:w-auto text-base sm:text-md md:text-lg font-bold my-auto">
                  CUSTOM OPTION SECTION
                </h1>
                {
                  customOptions.length !== 0 && 
                  <> 
                    <button onClick={()=>removeOption("color","all")} className="flex my-auto bg-red-300 rounded-lg p-1 text-xs">
                      <MinusCircleIcon className="h-4 my-auto pr-1"/>Reset Section 
                    </button> 
                  </>
                }
              </div>
              {customOptions.length !== 0 && 
                <>
                  {
                    customOptions.map((customOption, index)=>{
                        return(
                          <div className="grid grid-cols-4 mb-4 p-3 border-t">
                            <div className="mb-3 p-2 col-span-4 md:col-span-2">
                              <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Option Name</label>
                              <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Option Name" required/>
                            </div>
                            <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                              <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                              <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
                            </div>
                            <div className="mb-3 p-2 col-span-4 lg:col-span-1">
                              <label htmlFor="colorOptionQuantity" className="block mb-2 text-md font-medium text-gray-700 ">Quantity</label>
                              <input type="text" style={{background:"#E6F7FF"}} value={customOption.quantity} id="customOptionQuantity" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 " readOnly/>
                            </div>
                            <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                              <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                              <button className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                                {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                              </button>
                            </div>
                          </div>   
                        )
                    }) 
                  }
                </>
              }
              <form onSubmit={(event)=>{handleOptionSubmit(event,"custom")}}> 
                <div className="grid grid-cols-4 mb-4 p-3 border-t">
                  <div className="mb-3 p-2 col-span-4 md:col-span-2">
                    <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Option Name</label>
                    <input value={customOptions.optionName} type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Option Name" required/>
                  </div>
                  <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                    <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                    <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
                  </div>
                  <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                    <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                    <button className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                      {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                    </button>
                  </div>
                </div>  
              </form>
            </div> 
          </>
          }


        <form>
       
          <div className="grid grid-cols-1">
            <div className="mb-3 p-2">
              <label htmlFor="description" className="block mb-2 text-md font-medium text-gray-700 ">Description</label>
              {/* <textarea type="text" id="description" className="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required/>  */}
                <Editor
                  apiKey='pwelp62bmj5dog9mpkvpmy7d1n7o067m0dr4vbl8dn5rf9tq'
                  onInit={(evt, editor) => editorRef.current = editor}
                  initialValue="  
                  <h1> Description </h1>
                  The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black. Need to add an extra pop of color to your outfit? Our white tee has you covered.
                  <br/>
                  <h1> Highlights </h1> 
                  Hand cut and sewn locally
                  Dyed with our proprietary colors
                  Pre-washed & pre-shrunk
                  Ultra-soft 100% cotton
                  <br/>
                  <h1> Details </h1>
                  The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming Charcoal Gray limited release.
                  "
                  init={{ 
                    height : "450",
                    skin: "snow",
                    icons:"thin",
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:'undo redo | styleselect | bold italic underline forecolor backcolor | link image code | align | bullist numlist',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background-color:#F9F9F9;}',
                    content_css: '//www.tiny.cloud/css/codepen.min.css'
                  }}
                />  
                <button className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg block float-right my-5 text-white font-extrabold" onClick={log}>Submit Listing</button> 
            </div>
          </div> 
        </form>
    </div>
  )
  
}

export default AddListing