const GetInTouch =()=>{
    return (
        <div className=" flex items-center justify-evenly max-[768px]:flex-col">
            <div className=" p-5">
                <h2 className=" text-center max-[768px]:text-md">
                    Get in touch
                </h2> 
                <p className=" text-center max-[768px]:text-sm">
                    Interested in staring power bank station business? Or want to know more about Mopawa? Simply submit a message to us. <br/> We'll get back to you within 24 hours. You can also contact us through the below information to get a prompt response.
                </p> 
            </div>
            <div className=" flex flex-col flex-1 p-10">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="Contact">
                    <label className=" block text-gray-700 text-sm font-bold mb-2" for="username">
                        Name:
                    </label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
                    <label className=" block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email:
                    </label>
                    <input class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Email"/>
                    <label className=" block text-gray-700 text-sm font-bold mb-2" for="username">
                        Message:
                    </label>
                    <textarea rows="4" cols="50" name="message" form="Contact" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        Message here...
                    </textarea>
                    <input type='Submit'/>
                </form>
            </div>
        </div>
    )
}

export default GetInTouch