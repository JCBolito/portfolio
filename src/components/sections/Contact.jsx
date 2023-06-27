import ColorPalette from "../ColorPalette";
import Image from "next/image";
export default function Contact() {
  return (
    <section
      id="contact"
      className="grid content-center justify-items-center gap-4"
    >
      <h1 className="text-left text-4xl font-extrabold">Contact me!</h1>
      <ColorPalette />
      <form
        action="https://formsubmit.co/bolitojoshuacaleb.professional@gmail.com"
        id="contact-form"
        className="grid w-full max-w-xl gap-4"
        method="POST"
      >
        <Input type="email" id="Email" label="Email" />
        <Input type="text" id="_subject" label="Subject" />
        <TextArea id="message" label="Message" />
        <button
          className="flex w-full max-w-[10rem] items-center justify-center gap-1 justify-self-center
		  rounded bg-[#F02D3A] p-2 font-extrabold text-white transition-all hover:bg-[#DD0426]"
        >
          <Image
            src="/contacts/send.png"
            alt=""
            width={512}
            height={512}
            className="w-5 invert"
          />
          Send
        </button>
      </form>
    </section>
  );
}

function Input({ type, id, label }) {
  return (
    <div className="relative mt-6">
      <input
        type={type}
        name={id}
        id={id}
        placeholder=" "
        className="peer w-full border-b-2 border-black bg-transparent px-2 py-1 
			outline-none transition-all placeholder:text-[#00000080]"
        required
      />
      <label
        htmlFor={id}
        className="absolute -top-4 left-0 text-xs font-bold transition-all peer-placeholder-shown:left-2 
			peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:left-0
			peer-focus:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

function TextArea({ id, label }) {
  return (
    <div className="relative mt-8">
      <textarea
        name={id}
        id={id}
        cols="30"
        rows="5"
        placeholder=" "
        className="peer w-full resize-none rounded border-2 border-black bg-transparent p-2 outline-none
		transition-all"
        required
      ></textarea>
      <label
        htmlFor={id}
        className="absolute -top-6 left-0 text-xs font-bold transition-all peer-placeholder-shown:left-2 
			peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:left-0
			peer-focus:text-xs"
      >
        {label}
      </label>
    </div>
  );
}
