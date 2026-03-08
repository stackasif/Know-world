function Contact() {
  const handleSubmit=(formData)=>{
      // console.log(formData.entries());
     const data= Object.fromEntries(formData.entries())
      
  }

  return (

    <div className="bg-slate-800 text-white grid place-items-center min-h-[80vh]">
      <form action={handleSubmit} className="max-w-md mx-auto space-y-3 border-2 p-10 border-neutral-400 rounded-md text-sm text-black">
        <h1 className="text-center text-gray-200 my-2 text-2xl font-bold">Contact us</h1>
        <input 
          type="text" 
          required
          name="username"
          placeholder="Name......"
          className="w-full border p-1"
          autoComplete="false"
        />

        <input 
          type="email" 
          required
          name="email"
          placeholder="Email...."
          className="w-full border p-1"
          autoComplete="false"
        />

        <textarea 
          placeholder="Message......"
          required
          name="message"
          // rows="10"
          className="w-full border p-1"
          autoComplete="false"
        ></textarea>

        <button type="submit" className="border px-4 py-2 text-white w-full bg-slate-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;