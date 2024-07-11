import { useRecoilState } from 'recoil';
import { typeState, carpetSizeState, totalFloorState, floorState, facingState, ageState, bedroomState, bathroomsState, balconyState, tenantState, availabilityState, descState, spaceState, rentSaleState } from './../atom';
import { useState } from 'react';
import "../styles/PropertyDetail.css";

const PropertyDetail = () => {
    const [type, setType] = useRecoilState(typeState);
    const [sale, setSale] = useRecoilState(rentSaleState);
    const [carpetSize, setCarpetSize] = useRecoilState(carpetSizeState);
    const [totalFloor, setTotalFloor] = useRecoilState(totalFloorState);
    const [floor, setFloor] = useRecoilState(floorState);
    const [facing, setFacing] = useRecoilState(facingState);
    const [age, setAge] = useRecoilState(ageState);
    const [bhk, setBhk] = useRecoilState(bedroomState);
    const [bath, setBath] = useRecoilState(bathroomsState);
    const [balcony, setBalcony] = useRecoilState(balconyState);
    const [tenant, setTenant] = useRecoilState(tenantState);
    const [avail, setAvail] = useRecoilState(availabilityState);
    const [des, setDes] = useRecoilState(descState);
    const [space, setSpace] = useRecoilState(spaceState);

    return (
        <div>
            <div id='inside-div' className="p-1 md:p-5">
                <form className="space-y-4 bg-white text-black">
                    <div className="text-sm lg:text-[16px] p-5">
                        <label className="block font-medium mb-1">
                            Property for <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
                            <label className="flex items-center">
                                <input onClick={() => setSale("Rent")} type="radio" name="userType" value="owner" className="form-radio" required />
                                <span className="ml-2">Rent</span>
                            </label>
                            <label className="flex items-center">
                                <input onClick={() => setSale("Sale")} type="radio" name="userType" value="builder" className="form-radio" required />
                                <span className="ml-2">Sale</span>
                            </label>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] p-5">
                        <label className="block font-medium mb-1">
                            Property type <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
                            <div className="flex flex-col">
                                <label className="flex items-center">
                                    <input
                                        onChange={(e) => { setType(e.target.value) }}
                                        type="radio"
                                        name="propType"
                                        value="Residential"
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Residential</span>
                                </label>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex items-center">
                                    <input
                                        onChange={(e) => setType(e.target.value)}
                                        type="radio"
                                        name="propType"
                                        value="Commercial"
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Commercial</span>
                                </label>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex items-center">
                                    <input
                                        onChange={(e) => setType(e.target.value)}
                                        type="radio"
                                        name="propType"
                                        value="Land / Plot"
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Land / Plot</span>
                                </label>
                            </div>
                        </div>
                        {type === 'Residential' && (
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-3">
                                <p
                                    onClick={() => setSpace("Flat/Apartment")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 rounded-full ${space === "Flat/Apartment" ? "bg-gray-200" : ""}`}
                                >
                                    Flat/Apartment
                                </p>
                                <p
                                    onClick={() => setSpace("House/Villa")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 rounded-full ${space === "House/Villa" ? "bg-gray-200" : ""}`}
                                >
                                    House/Villa
                                </p>
                            </div>
                        )}
                        {type === 'Commercial' && (
                            <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-4 gap-3">
                                <p
                                    onClick={() => setSpace("Office Space")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Office Space" ? "bg-gray-200" : ""}`}
                                >
                                    Office Space
                                </p>
                                <p
                                    onClick={() => setSpace("Co Working")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Co Working" ? "bg-gray-200" : ""}`}
                                >
                                    Co Working
                                </p>
                                <p
                                    onClick={() => setSpace("Restaurant/Cafe")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Restaurant/Cafe" ? "bg-gray-200" : ""}`}
                                >
                                    Restaurant/Cafe
                                </p>
                                <p
                                    onClick={() => setSpace("Shop/Showroom")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Shop/Showroom" ? "bg-gray-200" : ""}`}
                                >
                                    Shop/Showroom
                                </p>
                                <p
                                    onClick={() => setSpace("Industrial Building")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Industrial Building" ? "bg-gray-200" : ""}`}
                                >
                                    Industrial Building
                                </p>
                                <p
                                    onClick={() => setSpace("Industrial Shed")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Industrial Shed" ? "bg-gray-200" : ""}`}
                                >
                                    Industrial Shed
                                </p>
                                <p
                                    onClick={() => setSpace("Warehouse/Godown")}
                                    className={`generic-class-for-click flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Warehouse/Godown" ? "bg-gray-200" : ""}`}
                                >
                                    Warehouse/Godown
                                </p>
                            </div>
                        )}

                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Build up Area <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="0 Sq.ft" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Carpet Area <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="0 Sq.ft" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setCarpetSize(e.target.value)} />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Property on Floor <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="Floor" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setFloor(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Total Floor <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="Total Floor" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setTotalFloor(e.target.value)} />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Facing <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="text" placeholder="Enter Facing" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setFacing(e.target.value)} />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Age of Construction <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="Age of Construction" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setAge(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Bedrooms <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="Bedrooms" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setBhk(e.target.value)} />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Bathrooms <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="Bathrooms" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setBath(e.target.value)} />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Balconies <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="Balconies" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setBalcony(e.target.value)} />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Tenants Preferred <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="text" placeholder="Tenants Preferred" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setTenant(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Availability <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="text" placeholder="Availability" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setAvail(e.target.value)} />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <textarea type="number" placeholder="Description" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setDes(e.target.value)} />
                                </label>
                            </div>
                        </div>

                    </div>

                    <button className="generic-class-for-button generic-class-for-button1">Send</button>
                </form>
            </div>
        </div>
    );
}

export default PropertyDetail;
