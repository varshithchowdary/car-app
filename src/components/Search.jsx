import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { BiSearchAlt } from "react-icons/bi";
import { Separator } from '@radix-ui/react-select';
import data from '@/Shared/data';

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%] text-black'> 
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg text-black">
          <SelectValue placeholder="Car Condition" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="used">Used</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg text-black">
          <SelectValue placeholder="Car Brand" />
        </SelectTrigger>
        <SelectContent>
          {data.CarBrand.map((brand) => (
            <SelectItem key={brand.id} value={brand.name}>{brand.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg text-black">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {data.Pricing.map((price) => (
            <SelectItem key={price.id} value={price.price}>{price.price}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div>
        <BiSearchAlt className='text-[50px] bg-primary rounded-full p-3 hover:scale-150 transition-all cursor-pointer' />
      </div>
    </div>
  )
}

export default Search
