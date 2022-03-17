import React, { useRef, useState, Fragment } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {InformationCircleIcon, PlusCircleIcon, ColorSwatchIcon, MinusCircleIcon} from '@heroicons/react/outline'
import { SketchPicker } from 'react-color';
import { Popover, Transition } from '@headlessui/react';
let optionSectionsList = 
[
    {
      Name:'color option section'
    },
    {
      Name:'size option section'
    },
    {
      Name:'custom option section'
    }
];

const AddListing = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  
  const [options, setOptions] = useState(false); 

  //options
  const [sizeOptions, setSizeOptions] = useState([]); 
  const [colorOptions, setColorOptions] = useState([]);
  const [customOptions, setCustomOptions] = useState([]);

  const optionName = "";
  const icon = "";

  
  function addOptionEntry(event, value){
    console.log(value);
      switch(event){
        case "color":
          setColorOptions(oldArray => [...oldArray, {colorName:"", colorCode:""}]);
          break;
        
        case "size":
          setSizeOptions(oldArray => [...oldArray, {sizeName:value}]);
          break;

        case "custom":
          setCustomOptions(oldArray => [...oldArray, {optionName:"", icon:""}]);
          break;
      }
      
  };

 
  const handleChange = (event) => {
    setOptions(event.target.value);
  }


  const [colorValue, setColorValue] = useState ("#ddd");
  const handleColorChange = (color) => {
    setColorValue(color.hex);
  };

  return (
    <div className="block bg-slate-100 w-screen m-3 px-5 py-7 rounded-2xl overflow-y-scroll">
        <form>  
          <div className="grid grid-cols-2">
            <div className="mb-3 p-2 col-span-2 md:col-span-1">
              <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Item/Service Name</label>
              <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Item/Service Name" required/>
            </div>
            <div className="mb-3 p-2 col-span-2 md:col-span-1" >
              <label htmlFor="options" className="block mb-2 text-md font-medium text-gray-700 ">Does This Listing Have a Option?</label>
              <select 
              value={options}
              onChange={handleChange} id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                <option value={'no selection'}>Does This Listing Have a Option?</option>
                <option value={'yes'}>yes</option>
                <option value={'no'}>no</option> 
              </select> 
            </div>
          </div> 

          {
          options === 'yes' &&
          <> 
            <div className="bg-slate-300 rounded-lg">
              <div className="flex justify-between w-full p-3">
                <h1 className="text-slate-700 w-1/2 sm:w-auto text-base sm:text-md md:text-lg font-bold my-auto">
                  COLOR OPTION SECTION
                </h1>
                {/* <button className="flex my-auto` bg-red-300 rounded-lg p-1 text-xs"><MinusCircleIcon className="h-4 my-auto pr-1"/>Reset Section</button> */}
              </div>
              {colorOptions.map((colorOption) =>{
              <div className="grid grid-cols-4 mb-4 p-3 border-t">
                <div className="mb-3 p-2 col-span-4 md:col-span-2">
                  <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Color Name</label>
                  <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Color Name" required/>
                </div>
                <div className="mb-3 p-2 col-span-4 md:col-span-1">
                  <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Color Code</label>
                  <div className="relative">
                    <input type="text" id="listingName" value={colorValue} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Color Code" required/> 
                    <Popover className="absolute top-3 right-3">
                      <Popover.Button className="absolute top-0 right-0">
                        <ColorSwatchIcon className="w-5"/> 
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
                        <Popover.Panel className="absolute -right-3 top-8">
                          <SketchPicker 
                            color={colorValue}
                            onChange={handleColorChange}
                          /> 
                        </Popover.Panel> 
                      </Transition>
                    </Popover>
                    
                  </div>
                </div> 
                <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                  <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                  <button className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                    {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                  </button>
                </div>
              </div>  
              })}

              <div className="grid grid-cols-4 mb-4 p-3 border-t">
                <div className="mb-3 p-2 col-span-4 md:col-span-2">
                  <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Color Name</label>
                  <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Color Name" required/>
                </div>
                <div className="mb-3 p-2 col-span-4 md:col-span-1">
                  <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Color Code</label>
                  <div className="relative">
                    <input type="text" id="listingName" value={colorValue} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Color Code" required/> 
                    <Popover className="absolute top-3 right-3">
                      <Popover.Button className="absolute top-0 right-0">
                        <ColorSwatchIcon className="w-5"/> 
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
                        <Popover.Panel className="absolute -right-3 top-8">
                          <SketchPicker 
                            color={colorValue}
                            onChange={handleColorChange}
                          /> 
                        </Popover.Panel> 
                      </Transition>
                    </Popover>
                    
                  </div>
                </div> 
                <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                  <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                  <button className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                    {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                  </button>
                </div>
              </div>  
            </div> 

            <div className="bg-slate-300 rounded-lg">
              <div className="flex justify-between w-full p-3">
                <h1 className="text-slate-700 w-1/2 sm:w-auto text-base sm:text-md md:text-lg font-bold my-auto">
                  SIZE OPTION SECTION
                </h1>
                {/* <button className="flex my-auto` bg-red-300 rounded-lg p-1 text-xs"><MinusCircleIcon className="h-4 my-auto pr-1"/>Reset Section</button> */}
              </div>
              {sizeOptions.map((sizeOption, i) =>{
                <div className="grid grid-cols-4 mb-4 p-3 border-t">
                  <div className="mb-3 p-2 col-span-4 md:col-span-3">
                    <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Size Option</label>
                    <input type="text" id="listingName" value={sizeOption.sizeName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Size Option" required/>
                  </div> 
                  <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                    <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                    <button className="flex justify-center p-2.5 w-full rounded-lg bg-green-300" onClick={() => addOptionEntry("size", i)}>Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                      {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                    </button>
                  </div>
                </div>  
              })
              }
              <div className="grid grid-cols-4 mb-4 p-3 border-t">
                <div className="mb-3 p-2 col-span-4 md:col-span-3">
                  <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Size Option</label>
                  <input value={sizeOptions} type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Size Option" required/>
                </div> 
                <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                  <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                  <button  onClick={() => addOptionEntry("size", sizeOptions)} className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                    {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                  </button>
                </div>
              </div>  

            </div> 

            <div className="bg-slate-300 rounded-lg">
              <div className="flex justify-between w-full p-3">
                <h1 className="text-slate-700 w-1/2 sm:w-auto text-base sm:text-md md:text-lg font-bold my-auto">
                  CUSTOM OPTION SECTION
                </h1>
                {/* <button className="flex my-auto` bg-red-300 rounded-lg p-1 text-xs"><MinusCircleIcon className="h-4 my-auto pr-1"/>Reset Section</button> */}
              </div>
              
              {customOptions.map((customOption) =>{
              <div className="grid grid-cols-4 mb-4 p-3 border-t">
                <div className="mb-3 p-2 col-span-4 md:col-span-2">
                  <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Option Name</label>
                  <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Option Name" required/>
                </div>
                <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                  <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                  <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
                </div>
                <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                  <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                  <button onClick={() => addOptionEntry("size", sizeOptions)} className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                    {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                  </button>
                </div>
              </div>  
              })}

              <div className="grid grid-cols-4 mb-4 p-3 border-t">
                <div className="mb-3 p-2 col-span-4 md:col-span-2">
                  <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Option Name</label>
                  <input value={optionName} type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Option Name" required/>
                </div>
                <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                  <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                  <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
                </div>
                <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                  <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                  <button onClick={() => addOptionEntry("custom", {optionName:"optionName", icon:"icon"})} className="flex justify-center p-2.5 w-full rounded-lg bg-green-300">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/> 
                    {/* ? Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/> : */}
                  </button>
                </div>
              </div>  
            </div> 
          </>
          }
          



{/* 
          <div className="bg-slate-300 rounded-lg">
            <div className="grid grid-cols-4 mb-4 p-3">
              <div className="mb-3 p-2 col-span-4 md:col-span-1">
                <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Option Name</label>
                <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Option Name" required/>
              </div>
              <div className="mb-3 p-2 col-span-4 md:col-span-1">
                <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Option Name</label>
                <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Option Name" required/>
              </div>
              <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
              </div>
              <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                <button className="flex justify-center p-2.5 w-full rounded-lg bg-red-200">Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/></button>
              </div>
            </div>

            <div className="grid grid-cols-4 mb-4 p-3 border-t-2">
              <div className="mb-3 p-2 col-span-4 md:col-span-2">
                <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Option Name</label>
                <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Option Name" required/>
              </div>
              <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
              </div>
              <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                <button className="flex justify-center p-2.5 w-full rounded-lg bg-red-200">Delete Option <MinusCircleIcon className="h-4 my-auto px-1"/></button>
              </div>
            </div>

            <div className="grid grid-cols-4 mb-4 p-3 border-t-2">
              <div className="mb-3 p-2 col-span-4 md:col-span-2">
                <label htmlFor="listingName" className="block mb-2 text-md font-medium text-gray-700 ">Option Name</label>
                <input type="text" id="listingName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Option Name" required/>
              </div>
              <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                <label htmlFor="options" className="flex w-full mb-2 text-center text-md font-medium text-gray-700 ">Upload Icon <InformationCircleIcon className="h-4 my-auto px-1"/></label>
                <button className="block m-auto p-2.5 w-full rounded-lg bg-slate-200">Add Image</button>
              </div>
              <div className="mb-3 p-2 col-span-4 md:col-span-1 justify-center" >
                <label htmlFor="options" className="block w-full mb-2 text-md font-medium text-gray-700 ">Add Option</label>
                <button className="flex justify-center p-2.5 w-full rounded-lg bg-green-200">Add Option <PlusCircleIcon className="h-4 my-auto px-1"/></button>
              </div>
            </div>
          </div> 
           */}
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
              <label htmlFor="category" className="block mb-2 text-md font-medium text-gray-700 ">Category</label>
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
              <option>Select Category:</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
              </select> 
            </div>
          </div> 

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